"""Service backend"""
import os
import sys

import operations

from jsonrpclib.SimpleJSONRPCServer import SimpleJSONRPCServer

# import utils package
sys.path.append(os.path.join(os.path.dirname(__file__), 'utils'))

import mongodb_client  # pylint: disable=import-error, wrong-import-position

SERVER_HOST = 'localhost'
SERVER_PORT = 4040

def add(num1, num2):
    """Test Method"""
    print("add is called with %d and %d" %(num1, num2))
    return num1 + num2

def get_one_news():
    """Get one news"""
    print("get_one_news is called.")
    return operations.getOneNews()

RPC_SERVER = SimpleJSONRPCServer((SERVER_HOST, SERVER_PORT))
RPC_SERVER.register_function(add, 'add')
RPC_SERVER.register_function(get_one_news, 'get_one_news')

print("starting RPC server on %s : %d" %(SERVER_HOST, SERVER_PORT))

RPC_SERVER.serve_forever()