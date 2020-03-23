#!/bin/bash

set_node_version() {
    echo "=> Setting up node v12 using nvm...."
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    nvm use 12
}

request() {
    cd node-client; yarn client
}

set_node_version && request