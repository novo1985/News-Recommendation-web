import json
import pika

class CloudAMQPClient:
    def __init__(self, cloud_amqp_url, queue_name):
      self.cloud_amqp_url = cloud_amqp_url
      self.queue_name = queue_name
      self.parms = pika.URLParameters(cloud_amqp_url)
      self.parms.socket_timeout = 3
      self.connection = pika.BlockingConnection(self.parms)
      self.channel = self.connection.channel()
      self.channel.queue_declare(queue = queue_name)

    # send a message, json serialization
    def sendMessage(self, message):
      self.channel.basic_publish(exchange = '',
                                 routing_key = self.queue_name,
                                 body = json.dumps(message))
      print ("[x] Sent message to %s:%s" % (self.queue_name, message))

    # get a message: basic_get() function, get one message at a time
    def getMessage(self):
      method_frame, header_frame, body = self.channel.basic_get(self.queue_name, no_ack = False)
      if method_frame:
        print("[x] Received message from %s : %s" % (self.queue_name, body))
        self.channel.basic_ack(method_frame.delivery_tag)
        return json.loads(body.decode('utf-8'))
      else:
        print("No message returned")
        return None

    # BlockingConnection.sleep is a safer way to sleep than time.sleep()
    # this will respond to server's heartbeat
    def sleep(self, seconds):
      self.connection.sleep(seconds)
