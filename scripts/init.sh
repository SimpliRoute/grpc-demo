#!/bin/bash

set_node_version() {
    echo "=> Setting up node v12 using nvm...."
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    nvm use 12
}

setup_python() {
    echo "=> Creating python virtualenv and install deps...."
    virtualenv venv && \
    source ./venv/bin/activate && pip install -r requirements.txt
}

run_yarn() {
    echo "=> Installing dependencies at "$(PWD)
    yarn
}

set_node_version
cd node-server; run_yarn
cd ../node-service-def; run_yarn
cd ../python-client; setup_python