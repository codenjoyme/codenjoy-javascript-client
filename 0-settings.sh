#!/usr/bin/env bash

. lib.sh

color $COLOR1 "Setup variables..."
echo

eval_echo "[[ \"$GAME_TO_RUN\" == \"\" ]] && GAME_TO_RUN=mollymage"
eval_echo "[[ \"$BOARD_URL\" == \"\" ]]   && BOARD_URL=http://127.0.0.1:8080/codenjoy-contest/board/player/0?code=000000000000"

eval_echo "ROOT=$PWD"

eval_echo "[[ \"$SKIP_TESTS\" == \"\" ]]  && SKIP_TESTS=true"

eval_echo "TOOLS=$ROOT/.tools"
eval_echo "ARCH=tar"

# Set to true if you want to ignore node installation on the system
eval_echo "[[ \"$INSTALL_LOCALLY\" == \"\" ]]   && INSTALL_LOCALLY=true"

eval_echo "[[ \"$INSTALL_LOCALLY\" == "true" ]] && export NODE_HOME="

eval_echo "[[ \"$NODE_HOME\" == \"\" ]]   && NO_NODE=true"
eval_echo "[[ \"$NO_NODE\" == \"true\" ]] && export NODE_HOME=$ROOT/.node"
eval_echo "[[ \"$NO_NODE\" == \"true\" ]] && export PATH=$NODE_HOME/bin:$PATH"

eval_echo "NPM=$NODE_HOME/bin/npm"

color $COLOR4 "PATH=$PATH"
color $COLOR4 "NODE_HOME=$NODE_HOME"
echo

eval_echo "ARCH_URL=https://nodejs.org/dist/v16.13.0/node-v16.13.0-linux-x64.tar.xz"
eval_echo "ARCH_FOLDER=node-v16.13.0-linux-x64"

eval_echo "JAVASCRIPT_CLIENT_HOME=$ROOT"