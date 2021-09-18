/*-
 * #%L
 * Codenjoy - it's a dojo-like platform from developers to developers.
 * %%
 * Copyright (C) 2018 Codenjoy
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

// TODO test me

var util = require('util');
var WSocket = require('ws');

var log = function(string) {
    console.log(string);
    if (!!printBoardOnTextArea) {
        printLogOnTextArea(string);
    }
};

var printArray = function (array) {
    var result = [];
    for (var index in array) {
        var element = array[index];
        result.push(element.toString());
    }
    return "[" + result + "]";
};

var processBoard = function(boardString) {
    var board = new Board(boardString);
    if (!!printBoardOnTextArea) {
        printBoardOnTextArea(board.boardAsString());
    }

    var logMessage = /*board +*/ "\n";
    var answer = new DirectionSolver(board).get().toString();
    logMessage += "Answer: " + answer + "\n";
    logMessage += "-----------------------------------\n";

    log(logMessage);

    return answer;
};

// you can get this code after registration on the server with your email
var url = "http://codenjoy.com:80/codenjoy-contest/board/player/3edq63tw0bq4w4iem7nb?code=12345678901234567890";

url = url.replace("http", "ws");
url = url.replace("board/player/", "ws?user=");
url = url.replace("?code=", "&code=");

var ws;

function connect() {
    ws = new WSocket(url);
    log('Opening...');

    ws.on('open', function() {
        log('Web socket client opened ' + url);
    });

    ws.on('close', function() {
        log('Web socket client closed');

        setTimeout(function() {
            connect();
        }, 5000);
    });

    ws.on('message', function(message) {
        var pattern = new RegExp(/^board=(.*)$/);
        var parameters = message.match(pattern);
        var boardString = parameters[1];
        var answer = processBoard(boardString);
        ws.send(answer);
    });
}

connect();

var Element = {
    NONE : ' ',                    // Пустое место – по которому может двигаться детектив

    BRICK : '#',                   // Cтена в которой можно прострелить дырочку слева или справа от детектива
                                   // (в зависимости от того, куда он сейчас смотрит)

    PIT_FILL_1 : '1',              // Стена со временем зарастает. Когда процес начинается - мы видим таймер
    PIT_FILL_2 : '2',
    PIT_FILL_3 : '3',
    PIT_FILL_4 : '4',

    STONE : '☼',                   // Неразрушаемая стена - в ней ничего прострелить не получится

    CRACK_PIT : '*',               // В момент выстрела мы видим процесс так

    CLUE_KNIFE : '$',              // Улика нож
    CLUE_GLOVE : '&',              // Улика перчатка
    CLUE_RING : '@',               // Улика кольцо

    // Твой детектив в зависимости от того, чем он сейчас занят отображается следующими символами
    HERO_DIE : 'Ѡ',                // Детектив переживает процесс умирания
    HERO_CRACK_LEFT : 'Я',         // Детектив простреливает слева от себя
    HERO_CRACK_RIGHT : 'R',        // Детектив простреливает справа от себя
    HERO_LADDER : 'Y',             // Детектив находится на лестнице
    HERO_LEFT : '◄',               // Детектив бежит влево
    HERO_RIGHT : '►',              // Детектив бежит вправо
    HERO_FALL_LEFT : ']',          // Детектив падает, смотря влево
    HERO_FALL_RIGHT : '[',         // Детектив падает, смотря вправо
    HERO_PIPE_LEFT : '{',          // Детектив ползёт по трубе влево
    HERO_PIPE_RIGHT : '}',         // Детектив ползёт по трубе вправо

    // Тоже твой детектив, но под маскировкой:
    HERO_MASK_DIE : 'x',         // Детектив-маскировка переживает процесс умирания
    HERO_MASK_CRACK_LEFT : '⊰',  // Детектив-маскировка простреливает слева от себя
    HERO_MASK_CRACK_RIGHT : '⊱', // Детектив-маскировка простреливает справа от себя
    HERO_MASK_LADDER : '⍬',      // Детектив-маскировка находится на лестнице
    HERO_MASK_LEFT : '⊲',        // Детектив-маскировка бежит влево
    HERO_MASK_RIGHT : '⊳',       // Детектив-маскировка бежит вправо
    HERO_MASK_FALL_LEFT : '⊅',   // Детектив-маскировка падает, смотря влево
    HERO_MASK_FALL_RIGHT : '⊄',  // Детектив-маскировка падает, смотря вправо
    HERO_MASK_PIPE_LEFT : '⋜',   // Детектив-маскировка ползёт по трубе влево
    HERO_MASK_PIPE_RIGHT : '⋝',  // Детектив-маскировка ползёт по трубе вправо

    // Детективы других игроков отображаются так
    OTHER_HERO_DIE : 'Z',          // Другой детектив переживает процесс умирания
    OTHER_HERO_CRACK_LEFT : '⌋',   // Другой детектив простреливает слева от себя
    OTHER_HERO_CRACK_RIGHT : '⌊',  // Другой детектив простреливает справа от себя
    OTHER_HERO_LADDER : 'U',       // Другой детектив находится на лестнице
    OTHER_HERO_LEFT : ')',         // Другой детектив бежит влево
    OTHER_HERO_RIGHT : '(',        // Другой детектив бежит вправо
    OTHER_HERO_FALL_LEFT : '⊐',    // Другой детектив падает, смотря влево
    OTHER_HERO_FALL_RIGHT : '⊏',   // Другой детектив падает, смотря вправо
    OTHER_HERO_PIPE_LEFT : 'Э',    // Другой детектив ползёт по трубе влево
    OTHER_HERO_PIPE_RIGHT : 'Є',   // Другой детектив ползёт по трубе вправо

    // А если детективы других игроков под маскировкой, то так
    OTHER_HERO_MASK_DIE : '⋈',         // Другой детектив-маскировка переживает процесс умирания
    OTHER_HERO_MASK_CRACK_LEFT : '⋰',  // Другой детектив-маскировка простреливает слева от себя
    OTHER_HERO_MASK_CRACK_RIGHT : '⋱', // Другой детектив-маскировка простреливает справа от себя
    OTHER_HERO_MASK_LEFT : '⋊',        // Другой детектив-маскировка находится на лестнице
    OTHER_HERO_MASK_RIGHT : '⋉',       // Другой детектив-маскировка бежит влево
    OTHER_HERO_MASK_LADDER : '⋕',      // Другой детектив-маскировка бежит вправо
    OTHER_HERO_MASK_FALL_LEFT : '⋣',   // Другой детектив-маскировка падает, смотря влево
    OTHER_HERO_MASK_FALL_RIGHT : '⋢',  // Другой детектив-маскировка падает, смотря вправо
    OTHER_HERO_MASK_PIPE_LEFT : '⊣',   // Другой детектив-маскировка ползёт по трубе влево
    OTHER_HERO_MASK_PIPE_RIGHT : '⊢',  // Другой детектив-маскировка ползёт по трубе вправо

    // Вражеские детективы других игроков отображаются так
    ENEMY_HERO_DIE : 'Ž',          // Вражеский детектив переживает процесс умирания
    ENEMY_HERO_CRACK_LEFT : '⟧',   // Вражеский детектив простреливает слева от себя
    ENEMY_HERO_CRACK_RIGHT : '⟦',  // Вражеский детектив простреливает справа от себя
    ENEMY_HERO_LADDER : 'Ǔ',       // Вражеский детектив находится на лестнице
    ENEMY_HERO_LEFT : '❫',         // Вражеский детектив бежит влево
    ENEMY_HERO_RIGHT : '❪',        // Вражеский детектив бежит вправо
    ENEMY_HERO_FALL_LEFT : '⋥',    // Вражеский детектив падает, смотря влево
    ENEMY_HERO_FALL_RIGHT : '⋤',   // Вражеский детектив падает, смотря вправо
    ENEMY_HERO_PIPE_LEFT : 'Ǯ',    // Вражеский детектив ползёт по трубе влево
    ENEMY_HERO_PIPE_RIGHT : 'Ě',   // Вражеский детектив ползёт по трубе вправо

    // А если вражеские детективы других игроков под маскировкой, то так
    ENEMY_HERO_MASK_DIE : '⧓',         // Вражеский детектив-маскировка переживает процесс умирания
    ENEMY_HERO_MASK_CRACK_LEFT : '⇢',  // Вражеский детектив-маскировка простреливает слева от себя
    ENEMY_HERO_MASK_CRACK_RIGHT : '⇠', // Вражеский детектив-маскировка простреливает справа от себя
    ENEMY_HERO_MASK_LEFT : '⧒',        // Вражеский детектив-маскировка находится на лестнице
    ENEMY_HERO_MASK_RIGHT : '⧑',       // Вражеский детектив-маскировка бежит влево
    ENEMY_HERO_MASK_LADDER : '≠',      // Вражеский детектив-маскировка бежит вправо
    ENEMY_HERO_MASK_FALL_LEFT : '⌫',   // Вражеский детектив-маскировка падает, смотря влево
    ENEMY_HERO_MASK_FALL_RIGHT : '⌦',  // Вражеский детектив-маскировка падает, смотря вправо
    ENEMY_HERO_MASK_PIPE_LEFT : '❵',   // Вражеский детектив-маскировка ползёт по трубе влево
    ENEMY_HERO_MASK_PIPE_RIGHT : '❴',  // Вражеский детектив-маскировка ползёт по трубе вправо

    // Боты-воры
    ROBBER_LADDER : 'Q',
    ROBBER_LEFT : '«',
    ROBBER_RIGHT : '»',
    ROBBER_PIPE_LEFT : '<',
    ROBBER_PIPE_RIGHT : '>',
    ROBBER_PIT_LEFT : '⍇',
    ROBBER_PIT_RIGHT : '⍈',

    LADDER : 'H',              // Лестница - по ней можно перемещаться по уровню
    PIPE : '~',                // Труба - по ней так же можно перемещаться по уровню, но только горизонтально

    BACKWAY : '⊛',              // Черный ход - позволяет скрыто перемещаться в иное место на карте

    MASK_POTION : 'S'         // Маскировочное зелье - наделяют детектива дополнительными способностями
}

var D = function(index, dx, dy, name) {

    var changeX = function(x) {
        return x + dx;
    };

    var changeY = function(y) {
        return y + dy;
    };

    var inverted = function() {
        switch (this) {
            case Direction.UP : return Direction.DOWN;
            case Direction.DOWN : return Direction.UP;
            case Direction.LEFT : return Direction.RIGHT;
            case Direction.RIGHT : return Direction.LEFT;
            case Direction.CRACK_LEFT : return Direction.CRACK_RIGHT;
            case Direction.CRACK_RIGHT : return Direction.CRACK_LEFT;
            default : return Direction.STOP;
        }
    };

    var toString = function() {
        return name;
    };

    return {
        changeX : changeX,
        changeY : changeY,
        inverted : inverted,
        toString : toString,

        getIndex : function() {
            return index;
        }
    };
};

var Direction = {
    UP          : D(2,  0, -1, 'UP'),         // move up
    DOWN        : D(3,  0,  1, 'DOWN'),       // move down
    LEFT        : D(0, -1,  0, 'LEFT'),
    RIGHT       : D(1,  1,  0, 'RIGHT'),
    CRACK_LEFT  : D(4,  0,  0, 'ACT,LEFT'),   // crack ground and move left
    CRACK_RIGHT : D(5,  0,  0, 'ACT,RIGHT'),  // crack ground and move right
    STOP        : D(6,  0,  0, ''),           // stay
    DIE         : D(8,  0,  0, "ACT(0)")      // suicide
};

Direction.values = function() {
   return [Direction.UP, Direction.DOWN, Direction.LEFT, Direction.RIGHT, Direction.CRACK_LEFT, Direction.CRACK_RIGHT, Direction.STOP, Direction.DIE];
};

Direction.valueOf = function(index) {
    var directions = Direction.values();
    for (var i in directions) {
        var direction = directions[i];
        if (direction.getIndex() == index) {
             return direction;
        }
    }
    return Direction.STOP;
};

var Point = function (x, y) {
    return {
        equals : function (o) {
            return o.getX() == x && o.getY() == y;
        },

        toString : function() {
            return '[' + x + ',' + y + ']';
        },

        isOutOf : function(boardSize) {
            return x >= boardSize || y >= boardSize || x < 0 || y < 0;
        },

        getX : function() {
            return x;
        },

        getY : function() {
            return y;
        }
    }
};

var pt = function(x, y) {
    return new Point(x, y);
};

var LengthToXY = function(boardSize) {
    function inversionY(y) {
        return boardSize - 1 - y;
    }

    function inversionX(x) {
        return x;
    }

    return {
        getXY : function(length) {
            if (length == -1) {
                return null;
            }
            var x = inversionX(length % boardSize);
            var y = inversionY(Math.trunc(length / boardSize));
            return new Point(x, y);
        },

        getLength : function(x, y) {
            var xx = inversionX(x);
            var yy = inversionY(y);
            return yy*boardSize + xx;
        }
    };
};

var Board = function(board) {
    var contains = function(a, obj) {
        var i = a.length;
        while (i--) {
            if (a[i].equals(obj)) {
                return true;
            }
        }
        return false;
    };

    var sort = function(all) {
        return all.sort(function(pt1, pt2) {
            return pt1.getY()*1000 + pt1.getX() - pt2.getY()*1000 + pt2.getX();
        });
    }

    var removeDuplicates = function(all) {
        var result = [];
        for (var index in all) {
            var point = all[index];
            if (!contains(result, point)) {
                result.push(point);
            }
        }
        return sort(result);
    };

    var boardSize = function() {
        return Math.sqrt(board.length);
    };

    var size = boardSize();
    var xyl = new LengthToXY(size);

    var getMe = function() {
        var result = [];
        result = result.concat(findAll(Element.HERO_DIE));
        result = result.concat(findAll(Element.HERO_CRACK_LEFT));
        result = result.concat(findAll(Element.HERO_CRACK_RIGHT));
        result = result.concat(findAll(Element.HERO_FALL_RIGHT));
        result = result.concat(findAll(Element.HERO_FALL_LEFT));
        result = result.concat(findAll(Element.HERO_LADDER));
        result = result.concat(findAll(Element.HERO_LEFT));
        result = result.concat(findAll(Element.HERO_RIGHT));
        result = result.concat(findAll(Element.HERO_PIPE_LEFT));
        result = result.concat(findAll(Element.HERO_PIPE_RIGHT));
        // mask
        result = result.concat(findAll(Element.HERO_MASK_DIE));
        result = result.concat(findAll(Element.HERO_MASK_CRACK_LEFT));
        result = result.concat(findAll(Element.HERO_MASK_CRACK_RIGHT));
        result = result.concat(findAll(Element.HERO_MASK_FALL_RIGHT));
        result = result.concat(findAll(Element.HERO_MASK_FALL_LEFT));
        result = result.concat(findAll(Element.HERO_MASK_LADDER));
        result = result.concat(findAll(Element.HERO_MASK_LEFT));
        result = result.concat(findAll(Element.HERO_MASK_RIGHT));
        result = result.concat(findAll(Element.HERO_MASK_PIPE_LEFT));
        result = result.concat(findAll(Element.HERO_MASK_PIPE_RIGHT));
        return result[0];
    };

    var getOtherHeroes = function() {
        var result = [];
        result = result.concat(findAll(Element.OTHER_HERO_DIE));
        result = result.concat(findAll(Element.OTHER_HERO_CRACK_LEFT));
        result = result.concat(findAll(Element.OTHER_HERO_CRACK_RIGHT));
        result = result.concat(findAll(Element.OTHER_HERO_FALL_RIGHT));
        result = result.concat(findAll(Element.OTHER_HERO_FALL_LEFT));
        result = result.concat(findAll(Element.OTHER_HERO_LADDER));
        result = result.concat(findAll(Element.OTHER_HERO_LEFT));
        result = result.concat(findAll(Element.OTHER_HERO_RIGHT));
        result = result.concat(findAll(Element.OTHER_HERO_PIPE_LEFT));
        result = result.concat(findAll(Element.OTHER_HERO_PIPE_RIGHT));
        // mask
        result = result.concat(findAll(Element.OTHER_HERO_MASK_DIE));
        result = result.concat(findAll(Element.OTHER_HERO_MASK_CRACK_LEFT));
        result = result.concat(findAll(Element.OTHER_HERO_MASK_CRACK_RIGHT));
        result = result.concat(findAll(Element.OTHER_HERO_MASK_FALL_RIGHT));
        result = result.concat(findAll(Element.OTHER_HERO_MASK_FALL_LEFT));
        result = result.concat(findAll(Element.OTHER_HERO_MASK_LADDER));
        result = result.concat(findAll(Element.OTHER_HERO_MASK_LEFT));
        result = result.concat(findAll(Element.OTHER_HERO_MASK_RIGHT));
        result = result.concat(findAll(Element.OTHER_HERO_MASK_PIPE_LEFT));
        result = result.concat(findAll(Element.OTHER_HERO_MASK_PIPE_RIGHT));
        return result;
    };

    var getEnemyHeroes = function() {
        var result = [];
        result = result.concat(findAll(Element.ENEMY_HERO_DIE));
        result = result.concat(findAll(Element.ENEMY_HERO_CRACK_LEFT));
        result = result.concat(findAll(Element.ENEMY_HERO_CRACK_RIGHT));
        result = result.concat(findAll(Element.ENEMY_HERO_FALL_RIGHT));
        result = result.concat(findAll(Element.ENEMY_HERO_FALL_LEFT));
        result = result.concat(findAll(Element.ENEMY_HERO_LADDER));
        result = result.concat(findAll(Element.ENEMY_HERO_LEFT));
        result = result.concat(findAll(Element.ENEMY_HERO_RIGHT));
        result = result.concat(findAll(Element.ENEMY_HERO_PIPE_LEFT));
        result = result.concat(findAll(Element.ENEMY_HERO_PIPE_RIGHT));
        // mask
        result = result.concat(findAll(Element.ENEMY_HERO_MASK_DIE));
        result = result.concat(findAll(Element.ENEMY_HERO_MASK_CRACK_LEFT));
        result = result.concat(findAll(Element.ENEMY_HERO_MASK_CRACK_RIGHT));
        result = result.concat(findAll(Element.ENEMY_HERO_MASK_FALL_RIGHT));
        result = result.concat(findAll(Element.ENEMY_HERO_MASK_FALL_LEFT));
        result = result.concat(findAll(Element.ENEMY_HERO_MASK_LADDER));
        result = result.concat(findAll(Element.ENEMY_HERO_MASK_LEFT));
        result = result.concat(findAll(Element.ENEMY_HERO_MASK_RIGHT));
        result = result.concat(findAll(Element.ENEMY_HERO_MASK_PIPE_LEFT));
        result = result.concat(findAll(Element.ENEMY_HERO_MASK_PIPE_RIGHT));
        return result;
    };

    var getRobbers = function() {
        var result = [];
        result = result.concat(findAll(Element.ROBBER_LADDER));
        result = result.concat(findAll(Element.ROBBER_LEFT));
        result = result.concat(findAll(Element.ROBBER_RIGHT));
        result = result.concat(findAll(Element.ROBBER_PIPE_LEFT));
        result = result.concat(findAll(Element.ROBBER_PIPE_RIGHT));
        result = result.concat(findAll(Element.ROBBER_PIT_LEFT));
        result = result.concat(findAll(Element.ROBBER_PIT_RIGHT));
        return result;
    };

    var getClues = function() {
        var result = [];
        result = result.concat(findAll(Element.CLUE_KNIFE));
        result = result.concat(findAll(Element.CLUE_GLOVE));
        result = result.concat(findAll(Element.CLUE_RING));
        return result;
    };
    
    var getPotions = function() {
        var result = [];
        result = result.concat(findAll(Element.MASK_POTION));
        return result;
    };

    var getWalls = function() {
        var result = [];
        result = result.concat(findAll(Element.BRICK));
        result = result.concat(findAll(Element.STONE));
        return result;
    };

    var getLadders = function() {
        var result = [];
        result = result.concat(findAll(Element.LADDER));
        result = result.concat(findAll(Element.HERO_LADDER));
        result = result.concat(findAll(Element.HERO_MASK_LADDER));
        result = result.concat(findAll(Element.OTHER_HERO_LADDER));
        result = result.concat(findAll(Element.OTHER_HERO_MASK_LADDER));
        result = result.concat(findAll(Element.ENEMY_HERO_LADDER));
        result = result.concat(findAll(Element.ENEMY_HERO_MASK_LADDER));
        return result;
    };

    var getPipes = function() {
        var result = [];
        result = result.concat(findAll(Element.PIPE));
        result = result.concat(findAll(Element.HERO_PIPE_LEFT));
        result = result.concat(findAll(Element.HERO_PIPE_RIGHT));
        result = result.concat(findAll(Element.HERO_MASK_PIPE_LEFT));
        result = result.concat(findAll(Element.HERO_MASK_PIPE_RIGHT));
        result = result.concat(findAll(Element.OTHER_HERO_MASK_PIPE_LEFT));
        result = result.concat(findAll(Element.OTHER_HERO_MASK_PIPE_RIGHT));
        result = result.concat(findAll(Element.ENEMY_HERO_MASK_PIPE_LEFT));
        result = result.concat(findAll(Element.ENEMY_HERO_MASK_PIPE_RIGHT));
        return result;
    };

    var isGameOver = function() {
        return !(board.indexOf(Element.HERO_DIE) == -1 && board.indexOf(Element.HERO_MASK_DIE) == -1);
    };

    var isAt = function(x, y, element) {
        if (pt(x, y).isOutOf(size)) {
            return false;
        }
        return getAt(x, y) == element;
    };

    var getAt = function(x, y) {
        if (pt(x, y).isOutOf(size)) {
            return Element.UNDESTROYABLE_WALL;
        }
        return board.charAt(xyl.getLength(x, y));
    };

    var boardAsString = function() {
        var result = "";
        for (var i = 0; i < size; i++) {
            result += board.substring(i * size, (i + 1) * size);
            result += "\n";
        }
        return result;
    };

    var getBarriers = function() {
        var all = getWalls();
        all = all.concat(getRobbers());
        all = all.concat(getOtherHeroes());
        all = all.concat(getEnemyHeroes());
        all = all.concat(getWalls());
        return removeDuplicates(all);
    };

    var toString = function() {
        return util.format("Board:\n%s\n" +
            "Hero at: %s\n" +
            "Other heroes at: %s\n" +
            "Enemy heroes at: %s\n" +
            "Robbers at: %s\n" +
            "Mask potions at: %s\n",
                boardAsString(),
                getMe(),
                printArray(getOtherHeroes()),
                printArray(getEnemyHeroes()),
                printArray(getRobbers()),
                printArray(getPotions())
            );
    };

    var findAll = function(element) {
        var result = [];
        for (var i = 0; i < size*size; i++) {
            var point = xyl.getXY(i);
            if (isAt(point.getX(), point.getY(), element)) {
                result.push(point);
            }
        }
        return sort(result);
    };

    var isAnyOfAt = function(x, y, elements) {
        if (pt(x, y).isOutOf(size)) {
            return false;
        }
        for (var index in elements) {
            var element = elements[index];
            if (isAt(x, y, element)) {
                return true;
            }
        }
        return false;
    };

    var isNear = function(x, y, element) {
        if (pt(x, y).isOutOf(size)) {
            return false;
        }
        return isAt(x + 1, y, element) || // TODO to remove duplicate
            isAt(x - 1, y, element) ||
            isAt(x, y + 1, element) ||
            isAt(x, y - 1, element);
    };

    var isBarrierAt = function(x, y) {
        if (pt(x, y).isOutOf(size)) {
            return true;
        }
        return contains(getBarriers(), pt(x, y));
    };

    var hasEnemyAt = function(x, y) {
        return isAnyOfAt(x, y, getEnemyHeroes());
    };

    var hasOtherHeroAt = function(x, y) {
        return isAnyOfAt(x, y,getOtherHeroes());
    };

    var hasWallAt = function(x, y) {
        if (pt(x, y).isOutOf(size)) {
            return true;
        }
        return isAnyOfAt(x, y, getWalls());
    };

    var hasLadderAt = function(x, y) {
        return isAnyOfAt(x, y, getLadders());
    };

    var hasClueAt = function(x, y) {
        return isAnyOfAt(x, y, getClues());
    };

    var hasPipeAt = function(x, y) {
        return isAnyOfAt(x, y,getPipes());
    };

    var countNear = function(x, y, element) {
        if (pt(x, y).isOutOf(size)) {
            return 0;
        }
        var count = 0;
        if (isAt(x - 1, y    , element)) count ++; // TODO to remove duplicate
        if (isAt(x + 1, y    , element)) count ++;
        if (isAt(x    , y - 1, element)) count ++;
        if (isAt(x    , y + 1, element)) count ++;
        return count;
    };

    return {
        size : boardSize,
        getMe : getMe,
        getOtherHeroes : getOtherHeroes,
        isGameOver : isGameOver,
        isAt : isAt,
        getAt : getAt,
        boardAsString : boardAsString,
        getBarriers : getBarriers,
        toString : toString,
        findAll : findAll,
        getWalls : getWalls,
        getLadders : getLadders,
        getPipes : getPipes,
        getClues : getClues,
        getPotions : getPotions,
        isAnyOfAt : isAnyOfAt,
        isNear : isNear,
        isBarrierAt : isBarrierAt,
        hasEnemyAt : hasEnemyAt,
        hasOtherHeroAt : hasOtherHeroAt,
        hasWallAt : hasWallAt,
        hasLadderAt : hasLadderAt,
        hasClueAt : hasClueAt,
        hasPipeAt : hasPipeAt,
        countNear : countNear
    };
};

var random = function(n) {
    return Math.floor(Math.random()*n);
};

var direction;

var DirectionSolver = function(board) {
    return {
        /**
         * @return next hero action
         */
        get : function() {
            var me = board.getMe();
            //console.log(me.getX(), me.getY());

            // TODO your code here
            var dir = Direction.values()[random(6)];  // STUB get any random direction except Direction.DIE

            //return Direction.DIE;  // for suicide
            return dir;
        }
    };
};
