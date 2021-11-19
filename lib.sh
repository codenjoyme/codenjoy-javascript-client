#!/usr/bin/env bash

# red 91
# green 92
# yellow 93
# blue 94
# pink 95
# light blue 96
# purple 97
COLOR1=92
COLOR2=94
COLOR3=96
COLOR4=93

eval_echo_color_output() {
	  command=$1
	  output=$($command)
	  color $COLOR2 "$command"
    color $COLOR4 "$output"
}

color() {
    color=$1
    message=$2
    echo "[${color}m$message[0m"
}

eval_echo() {
    command=$1
    eval_echo_color $COLOR2 "$command"
}

eval_echo_color() {
    color=$1
    command=$2
    color $color "$command"
    echo

    eval $command
}

ask() {
    ask_message $COLOR2 "Press any key to continue"
}

ask_result=""
ask_message() {
    color=$1
    message=$2
    color $color "$message"
    read ask_result
}

sep() {
    color 94 "---------------------------------------------------------------------------------------"
}

install() {
    cd $ROOT


    eval_echo_color $COLOR3 "DEST=.$1"
    eval_echo_color $COLOR3 "URL=$2"
    eval_echo_color $COLOR3 "FOLDER=$3"

    if [[ "$URL" == *.zip ]]; then
      eval_echo_color $COLOR3 "DEST_FILE=$1.zip"
    elif [[ "$URL" == *.tar.xz ]]; then
      eval_echo_color $COLOR3 "DEST_FILE=$1.tar.xz"
    elif [[ "$URL" == *.tar.gz ]]; then
      eval_echo_color $COLOR3 "DEST_FILE=$1.tar.gz"
    elif [[ "$URL" == *.tgz ]]; then
      eval_echo_color $COLOR3 "DEST_FILE=$1.tgz"
    fi

    if test -f "$TOOLS/$DEST_FILE"; then
        eval_echo_color $COLOR3 "rm $TOOLS/$DEST_FILE"
    fi

    eval_echo_color $COLOR3 "curl -o $TOOLS/$DEST_FILE $URL"

    eval_echo_color $COLOR3 "rm -rf $TOOLS/../$DEST"

    if [[ $FOLDER == "" ]]; then
        eval_echo_color $COLOR3 "$ARCH -xf $TOOLS/$DEST_FILE --directory $TOOLS/../$DEST"
    else
        eval_echo_color $COLOR3 "$ARCH -xf $TOOLS/$DEST_FILE --directory $TOOLS/.."
        sleep 1
        eval_echo_color $COLOR3 "mv $TOOLS/../$FOLDER $DEST"
    fi

    cd $ROOT
}
