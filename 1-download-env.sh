#!/usr/bin/env bash

. 0-settings.sh

color $COLOR1 "Installing js..."
echo

eval_echo "[[ \"$SKIP_NODE_INSTALL\" == \"true\" ]] && skip"
eval_echo "[[ \"$INSTALL_LOCALLY\" == \"false\" ]] && skip"
eval_echo "[[ \"$INSTALL_LOCALLY\" == \"\" ]] && skip"

if test -f "$TOOLS\..\node_modules"; then
    eval_echo_color $COLOR3 "rm -rf $TOOLS\..\node_modules"
fi

eval_echo "install 'node' '$ARCH_URL' '$ARCH_FOLDER'"
eval_echo_color_output "$NPM -v"

ask

skip() {
    color $COLOR3 "Installation skipped"
    color $COLOR3 "INSTALL_LOCALLY=$INSTALL_LOCALLY"
    color $COLOR3 "SKIP_NODE_INSTALL=$SKIP_NODE_INSTALL"
    ask
    exit
}