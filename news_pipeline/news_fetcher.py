import os
import sys

# import common package in parent directory
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'common'))
sys.path.append(os.path.join(os.path.dirname(__file__), 'scrapers'))

import cnn_news_scraper
from cloudAMQP_client import CloudAMQPClient

# TODO: use your own queue.

SCRAPE_NEWS_TASK_QUEUE_URL = 'amqp://nfdiqtrj:91N2aiPAipzdKvN-JoiP-B8Mjj09qSes@otter.rmq.cloudamqp.com/nfdiqtrj'
SCRAPE_NEWS_TASK_QUEUE_NAME = 'tap-news-scrape-news-task-queue'

DEDUPE_NEWS_TASK_QUEUE_URL = 'amqp://bunixgfg:pegg7vxykSDoWTZ25X1xE7dUpwBJEvP9@otter.rmq.cloudamqp.com/bunixgfg'
DEDUPE_NEWS_TASK_QUEUE_NAME = 'tap-news-dedupe-news-task-queue'

SLEEP_TIME_IN_SECONDS = 5

dedupe_news_queue_client = CloudAMQPClient(DEDUPE_NEWS_TASK_QUEUE_URL, DEDUPE_NEWS_TASK_QUEUE_NAME)
scrape_news_queue_client = CloudAMQPClient(SCRAPE_NEWS_TASK_QUEUE_URL, SCRAPE_NEWS_TASK_QUEUE_NAME)

def handle_message(msg):
    if msg is None or not isinstance(msg, dict):
        print('message is broken')
        return

    task = msg
    text = None

    if task['source'] == 'cnn':
        print('scraping CNN news')
        text = cnn_news_scraper.extract_news(task['url'])
    else:
        print('News source [%s] is not supported.' % task['source'])

    task['text'] = text
    dedupe_news_queue_client.sendMessage(task)

while True:
    if scrape_news_queue_client is not None:
        msg = scrape_news_queue_client.getMessage()
        if msg is not None:
            # Parse and process the task
            try:
                handle_message(msg)
            except Exception as e:
                print(e)
                pass
        scrape_news_queue_client.sleep(SLEEP_TIME_IN_SECONDS)