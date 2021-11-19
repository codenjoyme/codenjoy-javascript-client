#!/usr/bin/env bash

. 0-settings.sh

color $COLOR1 "Starting js tests..."
echo

eval_echo "$NPM test"

ask