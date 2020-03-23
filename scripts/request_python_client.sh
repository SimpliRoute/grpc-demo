#!/bin/bash

activate_venv() {
    cd python-client; source ./venv/bin/activate
}

request() {
    python client.py
}

activate_venv && request



