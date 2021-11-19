#!/usr/bin/env bash

. 0-settings.sh

color $COLOR1 "Building js client..."
echo

eval_echo_color_output "$NPM -v"

eval_echo "$NPM install"

ask
