# non-relative code, just for develop
import os
import sys

# import commom package from parent directory
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'common'))

from cloudAMQP_client import CloudAMQPClient # pylint: disable=E0401, C0413


SCRAPE_NEWS_TASK_QUEUE_URL = 'amqp://nfdiqtrj:91N2aiPAipzdKvN-JoiP-B8Mjj09qSes@otter.rmq.cloudamqp.com/nfdiqtrj'
SCRAPE_NEWS_TASK_QUEUE_NAME = 'tap-news-scrape-news-task-queue'

def clearQueue(queue_url, queue_name):
    '''clearQueue'''
    queue_client = CloudAMQPClient(queue_url, queue_name)

    num_of_messages = 0

    while True:
        if queue_client is not None:
            msg = queue_client.getMessage()
            if msg is None:
                print ("Cleared %d messages." % num_of_messages)
                return
            num_of_messages += 1

# develop tool need main function
if __name__ == "__main__":
    # clear_queue(SCRAPE_NEWS_TASK_QUEUE_URL, SCRAPE_NEWS_TASK_QUEUE_NAME)
    clearQueue(SCRAPE_NEWS_TASK_QUEUE_URL, SCRAPE_NEWS_TASK_QUEUE_NAME)

