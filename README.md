# gRPC Nodejs & Python example

This repo contains an example of a very basic gRPC server definition in NodeJS with clients for python and nodejs.

### Requirements

- make
- nvm
- nodejs v12 installed with nvm
- yarn
- Python3
- virtualenv

### How to run

```bash
# Install server and clients deps
$ make init

# Recompile protos for js and python
$ make compile_protos

# Run server
$ make server

# Open a new terminal and make a request using nodejs client
$ make request_node

# Open a new terminal and make a request using python client
$ make request_python
```
