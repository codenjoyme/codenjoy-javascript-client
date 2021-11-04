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

var SnakeBoard = module.exports = function(board){

    var Games = require('./../../engine/games.js');
    var Direction = Games.require('./direction.js');
    var Point = require('./../../engine/point.js');
    var util = require('util');
    var Stuff = require('./../../engine/stuff.js');
    var Element = Games.require('./elements.js');
    var LengthToXY = require('./../../engine/lxy.js');

    var contains  = function(a, obj) {
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
            return (pt1.getY()*1000 + pt1.getX()) -
                (pt2.getY()*1000 + pt2.getX());
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

    var getMyBody = function() {
        var result = [];
        result = result.concat(findAll(Element.HEAD_DOWN));
        result = result.concat(findAll(Element.HEAD_LEFT));
        result = result.concat(findAll(Element.HEAD_RIGHT));
        result = result.concat(findAll(Element.HEAD_UP));
        result = result.concat(findAll(Element.TAIL_END_DOWN));
        result = result.concat(findAll(Element.TAIL_END_LEFT));
        result = result.concat(findAll(Element.TAIL_END_UP));
        result = result.concat(findAll(Element.TAIL_END_RIGHT));
        result = result.concat(findAll(Element.TAIL_HORIZONTAL));
        result = result.concat(findAll(Element.TAIL_VERTICAL));
        result = result.concat(findAll(Element.TAIL_LEFT_DOWN));
        result = result.concat(findAll(Element.TAIL_LEFT_UP));
        result = result.concat(findAll(Element.TAIL_RIGHT_DOWN));
        result = result.concat(findAll(Element.TAIL_RIGHT_UP));
        return sort(result);
    };

    var getMyHead = function() {
        var result = [];
        result = result.concat(findAll(Element.HEAD_DOWN));
        result = result.concat(findAll(Element.HEAD_LEFT));
        result = result.concat(findAll(Element.HEAD_RIGHT));
        result = result.concat(findAll(Element.HEAD_UP));
        return (result.length > 0) ? result[0] : null;
    };

    var getApple = function() {
        return findAll(Element.GOOD_APPLE);
    };

    var getStone = function() {
        return findAll(Element.BAD_APPLE);
    };

    var getWalls = function() {
        return findAll(Element.BREAK);
    };

    var isAt = function(x, y, element) {
        if (new Point(x, y).isOutOf(size)) {
            return false;
        }
        return getAt(x, y) == element;
    };

    var getAt = function(x, y) {
        if (new Point(x, y).isOutOf(size)) {
            return Element.BREAK;
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
        all = all.concat(getWalls());
        all = all.concat(getStone());
        return removeDuplicates(all);
    };

    var toString = function() {
        return util.format("Board:\n%s\n" +
            "My head at: %s\n" +
            "My body at: %s\n" +
            "Apple at: %s\n" +
            "Stone at: %s\n",
            boardAsString(),
            getMyHead(),
            Stuff.printArray(getMyBody()),
            Stuff.printArray(getApple()),
            Stuff.printArray(getStone())
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
        if (new Point(x, y).isOutOf(size)) {
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
        if (new Point(x, y).isOutOf(size)) {
            return false;
        }
        return isAt(x + 1, y, element) || // TODO to remove duplicate
            isAt(x - 1, y, element) ||
            isAt(x, y + 1, element) ||
            isAt(x, y - 1, element);
    };

    var isBarrierAt = function(x, y) {
        if (new Point(x, y).isOutOf(size)) {
            return true;
        }

        return contains(getBarriers(), new Point(x, y));
    };

    var countNear = function(x, y, element) {
        if (new Point(x, y).isOutOf(size)) {
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
        getMyBody : getMyBody,
        getMyHead : getMyHead,
        isAt : isAt,
        boardAsString : boardAsString,
        getBarriers : getBarriers,
        toString : toString,
        findAll : findAll,
        getWalls : getWalls,
        getApple : getApple,
        getStone : getStone,
        isAnyOfAt : isAnyOfAt,
        isNear : isNear,
        isBarrierAt : isBarrierAt,
        countNear : countNear,
        getAt : getAt
    };
};