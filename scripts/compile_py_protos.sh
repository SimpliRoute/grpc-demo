#!/bin/bash

echo "=> Compiling python protos definition ...."

cd python-client; source venv/bin/activate && \
    python -m grpc_tools.protoc -I../protos --python_out=../protos/build/python --grpc_python_out=../protos/build/python ../protos/hello.proto

echo "=> Python protos compiled!"