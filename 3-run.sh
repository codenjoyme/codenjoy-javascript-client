#!/usr/bin/env bash

. 0-settings.sh

color $COLOR1 "Installing docker..."
echo

    ask_message $COLOR4 "There is a need to update the system and install docker. Should we install (y/n)?"
    if [[ "$ask_result" == "y" ]]; then
        if [ "$EUID" -ne 0 ]; then
          color $COLOR5 "Please run as root"
          exit
        fi

        # setup docker
        eval_echo "apt-get remove docker docker-engine docker.io containerd runc"
        eval_echo "apt-get -y update"
        eval_echo "curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -"
        eval_echo "apt-key fingerprint 0EBFCD88"

        # for debian alpine
        # eval_echo 'apt-get install -y software-properties-common'
        # eval_echo 'add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(dpkg --status tzdata|grep Provides|cut -f2 -d'-') stable"'

        # for ubuntu
        eval_echo 'add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"'

        eval_echo "apt-get update -y"
        eval_echo "apt-get install docker-ce docker-ce-cli containerd.io -y"
        eval_echo "systemctl status docker --no-pager"
        eval_echo "usermod -aG docker $USER"

        eval_echo_color_output "docker -v"
    else
        color $COLOR4 "Skipped"
    fi

color $COLOR1 "Building client..."
echo

    eval_echo "docker build -t client-server -f Dockerfile ./ --build-arg SERVER_URL=${BOARD_URL} --build-arg GAME_TO_RUN=${GAME_TO_RUN}"

color $COLOR1 "Starting client..."
echo

    eval_echo "docker container rm client-server --force"

    eval_echo "docker run --name client-server -d client-server"

    eval_echo "docker logs --follow client-server"

ask