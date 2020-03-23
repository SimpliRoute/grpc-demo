set_node_version() {
    echo "=> Setting up node v12 using nvm...."
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    nvm use 12
}

run_server() {
    cd node-server; yarn server
}

set_node_version && run_server

