/*-
 * #%L
 * Codenjoy - it's a dojo-like platform from developers to developers.
 * %%
 * Copyright (C) 2021 Codenjoy
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

var MinesweeperBoard = module.exports = function(board){

    var Games = require('./../../engine/games.js');
    var Direction = Games.require('./direction.js');
    var Point = require('./../../engine/point.js');
    var util = require('util');
    var Stuff = require('./../../engine/stuff.js');
    var Element = Games.require('./elements.js');
    var LengthToXY = require('./../../engine/lxy.js');

    var contains = function (a, obj) {
        var i = a.length;
        while (i--) {
            if (a[i].equals(obj)) {
                return true;
            }
        }
        return false;
    };

    var isAt = function (x, y, element) {
        if (pt(x, y).isOutOf(size)) {
            return false;
        }
        for(var i = 2; i < arguments.length ; i++)
            if(getAt(x,y) == arguments[i]) return true;
         return false;
    };

    var getAt = function (x, y) {
        if (pt(x, y).isOutOf(size)) {
            return Element.BORDER;
        }
        return board.charAt(xyl.getLength(x, y));
    };


    var isNear = function (x, y, element) {
        if (pt(x, y).isOutOf(size)) {
            return false;
        }
        return isAt(x + 1, y, element) ||
            isAt(x - 1, y, element) ||
            isAt(x, y + 1, element) ||
            isAt(x, y - 1, element);
    };

    var boardSize = function () {
        return Math.sqrt(board.length);
    };

    var size = boardSize();
    var xyl = new LengthToXY(size);


    var isBarrierAt = function (x, y) {
        if (new Point(x, y).isOutOf(size)) {
            return true;
        }

        return isAt(x, y, Element.BORDER);
    };

    var getMe = function () {
        return findAll(Element.BANG, Element.DETECTOR)[0];
    };

    var isGameOver = function () {
        return findAll(Element.BANG).length != 0;
    };

    var findAll = function (element) {
        var result = [];
        for (var i = 0; i < size * size; i++) {
            var point = xyl.getXY(i);
            var elements = [point.getX(), point.getY()];
            elements.push.apply(elements, arguments);
            if (isAt.apply(null, elements)) {
                result.push(point);
            }
        }
        return result;
    };

    var findAllExtended = function () {
        var result = [];
        for (var i = 0; i < size * size; i++) {
            var point = xyl.getXYExtended(i, board.charAt(i));
            result.push(point);
        }
        return result;
    };


    var getBorders = function () {
        return findAll(Element.BORDER);
    };

    var boardAsString = function() {
        var result = "";
        for (var i = 0; i < size; i++) {
            result += board.substring(i * size, (i + 1) * size);
            result += "\n";
        }
        return result;
    };

    return {
        size: boardSize,
        get: findAll,
        getAllExtended: findAllExtended,
        isAt: isAt,
        getAt: getAt,
        getBarriers: getBorders,
        boardAsString: boardAsString,
        getWalls: getBorders,
        isNear: isNear,
        getMe: getMe,
        isGameOver: isGameOver,
        isBarrierAt: isBarrierAt,
        toString: boardAsString
    }
};
