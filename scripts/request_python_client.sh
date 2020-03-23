#!/bin/bash

activate_venv() {
    cd python-client; source ./venv/bin/activate
}

request() {
    python client.py
}

export PYTHONPATH=$(PWD)/protos/build/python
activate_venv && request



