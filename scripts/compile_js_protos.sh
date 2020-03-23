#!/bin/bash

echo "=> Compiling js protos definition ...."


cd protos/build/js; npx grpc_tools_node_protoc --proto_path=../.. --js_out=import_style=commonjs,binary:. --grpc_out=. --plugin=protoc-gen-grpc=./node_modules/grpc-tools/bin/protoc_plugin.js ../../hello.proto


echo "=> JS protos compiled!"