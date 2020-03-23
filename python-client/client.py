import os
import logging
import grpc

import hello_pb2
import hello_pb2_grpc

PROTO_PATH = "../protos/hello.proto"

SERVER_HOST = os.getenv("HOST", "0.0.0.0")
SERVER_PORT = os.getenv("PORT", "50051")
SERVER_ADDRESS = f'{SERVER_HOST}:{SERVER_PORT}'

with grpc.insecure_channel(SERVER_ADDRESS) as channel:
    stub = hello_pb2_grpc.GreeterStub(channel)
    response = stub.SayHello(hello_pb2.HelloRequest(name='SimpliRoute'))
    print("Response: " + response.message)
