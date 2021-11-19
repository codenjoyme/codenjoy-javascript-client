#!/usr/bin/env bash

. 0-settings.sh

color $COLOR1 "Starting js client..."
echo

eval_echo "$NPM start $GAME_TO_RUN $BOARD_URL"

ask
