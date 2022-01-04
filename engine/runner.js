/*-
 * #%L
 * Codenjoy - it's a dojo-like platform from developers to developers.
 * %%
 * Copyright (C) 2012 - 2022 Codenjoy
 * %%
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public
 * License along with this program.  If not, see
 * <http://www.gnu.org/licenses/gpl-3.0.html>.
 * #L%
 */

var Runner = module.exports = function() {
    // set game name and url
    var GAME_TO_RUN = 'mollymage';
    var SERVER_URL  = 'http://127.0.0.1:8080/codenjoy-contest/board/player/0?code=000000000000';

    var Games = require('./games.js');
    Games.init(GAME_TO_RUN);

    var WSocket = require('ws');
    var Board = Games.require('./board.js');
    var Solver = Games.require('./solver.js');
    var Stuff = require('./stuff.js');

    var processBoard = function(boardString) {
        var board = new Board(boardString);
        if (browser) {
            printBoardOnTextArea(board.boardAsString());
        }

        var logMessage = board + "\n\n";
        var answer = Solver.get(board).toString();
        logMessage += "Answer: " + answer + "\n";
        logMessage += "-----------------------------------\n";

        Stuff.log(logMessage);

        return answer;
    };

    var parseBoard = function(message) {
        var pattern = new RegExp(/^board=(.*)$/);
        var parameters = message.match(pattern);
        return parameters[1];
    }

    var getWSUrl = function(url) {
        return url.replace("http", "ws")
          .replace("board/player/", "ws?user=")
          .replace("?code=", "&code=");
    }

    var getUrl = function() {
        return Stuff.parameter('url', 1, SERVER_URL);
    }

    var connect = function() {
        var url = getWSUrl(getUrl());
        var socket = new WSocket(url, null, { rejectUnauthorized: false });
        Stuff.log('Opening...');

        socket.on('open', function() {
            Stuff.log('Web socket client opened ' + url);
        });

        socket.on('error', function() {
            Stuff.log('Web socket client error');
        });

        socket.on('close', function() {
            Stuff.log('Web socket client closed');

            if (!browser) {
                setTimeout(function(){
                    connect();
                }, 5000);
            }
        });

        socket.on('message', function (message) {
            var board = parseBoard(message);
            var answer = processBoard(board);
            socket.send(answer);
        });

        return socket;
    }

    return {
        connect,
        getUrl
    };
}

var browser = (browser !== undefined);
if (!browser) {
    new Runner().connect();
}
