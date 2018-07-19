from cloudAMQP_client import CloudAMQPClient

CloudAMQP_URL = "amqp://bxwooqcw:WOijzhO2m5KkgZsAk7dUQPBuGmHHUQym@otter.rmq.cloudamqp.com/bxwooqcw"
TEST_QUEUE_NAME = "test"

def test_basic():
  client = CloudAMQPClient(CloudAMQP_URL, TEST_QUEUE_NAME)

  sentMsg = {"test": "test"}
  client.sendMessage(sentMsg)
  receivedMsg = client.getMessage()

  assert sentMsg == receivedMsg
  print("test_basic passed!")


if __name__ == '__main__':
  test_basic()

