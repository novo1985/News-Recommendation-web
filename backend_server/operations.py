import json
import os
import pickle # python default package, convert json to redis handled string
import redis
import sys

from bson.json_util import dumps

NEWS_LIST_BATCH_SIZE = 10
NEWS_LIMIT = 200
USER_NEWS_TIME_OUT_IN_SECONDS = 60

REDIS_HOST = 'localhost'
REDIS_PORT = 6379

# import common package
sys.path.append(os.path.join(os.path.dirname(__file__), '../common/'))

import mongodb_client  # pylint: disable=import-error, wrong-import-position
import news_recommendation_service_client
from cloudAMQP_client import CloudAMQPClient

NEWS_TABLE_NAME = "news"
CLICK_LOGS_TABLE_NAME = 'click_logs'

redis_client = redis.StrictRedis(REDIS_HOST, REDIS_PORT, db=0)

# create a new queue to send log information
LOG_CLICKS_TASK_QUEUE_URL = "amqp://vgscksqh:H9iWraK8W1Rh9-sqKS-YpT-fHztO3lZY@otter.rmq.cloudamqp.com/vgscksqh"
LOG_CLICKS_TASK_QUEUE_NAME = "tap-news-log-clicks-task-queue"
cloudAMQP_client = CloudAMQPClient(LOG_CLICKS_TASK_QUEUE_URL, LOG_CLICKS_TASK_QUEUE_NAME)

def getOneNews():
    db = mongodb_client.get_db()
    news = db[NEWS_TABLE_NAME].find_one()
    return json.loads(dumps(news))

def getNewsSummariesForUser(user_id, page_num):
    page_num = int(page_num)
    begin_index = (page_num - 1) * NEWS_LIST_BATCH_SIZE
    end_index = page_num * NEWS_LIST_BATCH_SIZE # excluding end_index

    sliced_news = [] # declare and initialization

    if redis_client.get(user_id) is not None:
        total_news_digests = pickle.loads(redis_client.get(user_id))
        sliced_news_digests = total_news_digests[begin_index:end_index] # only news key
        db = mongodb_client.get_db()
        sliced_news = list(db[NEWS_TABLE_NAME].find({'digest': {'$in':sliced_news_digests}}))

    else:
        db = mongodb_client.get_db()
        total_news = list(db[NEWS_TABLE_NAME].find().sort([('publishedAt', -1)]).limit(NEWS_LIMIT))
        total_news_digests = [x['digest'] for x in total_news]
        redis_client.set(user_id, pickle.dumps(total_news_digests))
        redis_client.expire(user_id, USER_NEWS_TIME_OUT_IN_SECONDS)
        sliced_news = total_news[begin_index:end_index]

    # Get preference for the user
    #preference = news_recommendation_service_client.getPreferenceForUser(user_id)
    #topPreference = None

    #if preference is not None and len(preference) > 0:
    #    topPreference = preference[0]

    #for news in sliced_news:
        # Remove text field to save bandwidth.
    #    del news['text']
    #    if news['class'] == topPreference:
    #        news['reason'] = 'Recommend'
    #    if news['publishedAt'].date() == datetime.today().date():
    #        news['time'] = 'today'

    return json.loads(dumps(sliced_news))

def logNewsClickForUser(user_id, news_id):
    message = {'userId': user_id, 'newsId': news_id, 'timestamp': datetime.utcnow()}

    db = mongodb_client.get_db()
    db[CLICK_LOGS_TABLE_NAME].insert(message)

    # Send log task to machine learning service for prediction
    message = {'userId': user_id, 'newsId': news_id, 'timestamp': str(datetime.utcnow())}
    cloudAMQP_client.send_message(message)













