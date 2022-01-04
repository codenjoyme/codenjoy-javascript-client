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

var Board = module.exports = function(board) {

    var Point = require('./point.js');
    var LengthToXY = require('./lxy.js');

    var boardSize = function() {
        return Math.sqrt(board.length);
    }

    var size = boardSize();
    var xyl = new LengthToXY(size);

    var contains = function(a, obj) {
        var i = a.length;
        while (i--) {
            if (a[i].equals(obj)) {
                return true;
            }
        }
        return false;
    }

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
    }

    var isAt = function(x, y, element) {
        if (new Point(x, y).isOutOf(size)) {
            return false;
        }
        return getAt(x, y) == element;
    }

    // TODO test me
    var isAtMany = function(x, y, elements) {
        if (new Point(x, y).isOutOf(size)) {
            return false;
        }
        var element = getAt(x, y);
        for (var el of elements){
            if (element == el){
                return true;
            }
        }
        return false;
    }

    var getAt = function(x, y) {
        if (new Point(x, y).isOutOf(size)) {
            return null;
        }
        return board.charAt(xyl.getLength(x, y));
    }

    var boardAsString = function() {
        var result = "";
        for (var i = 0; i < size; i++) {
            result += board.substring(i * size, (i + 1) * size);
            result += "\n";
        }
        return result;
    }

    var findAll = function(element) {
        var result = [];
        for (var i = 0; i < size*size; i++) {
            var point = xyl.getXY(i);
            if (isAt(point.getX(), point.getY(), element)) {
                result.push(point);
            }
        }
        return sort(result);
    }

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
    }

    var getNear = function(x, y) {
        var result = [];
        for (var dx = -1; dx <= 1; dx++) {
            for (var dy = -1; dy <= 1; dy++) {
                if (dx == 0 && dy == 0) continue;
                result.push(getAt(x + dx, y + dy));
            }
        }
        return result;
    }

    var isNear = function(x, y, element) {
        return getNear(x, y).includes(element);
    }

    var countNear = function(x, y, element) {
        return getNear(x, y)
            .filter(function(value) { return value === element })
            .length;
    }

    return {
        size : boardSize,
        contains,
        sort,
        removeDuplicates,
        isAt,
        isAtMany,
        getAt,
        boardAsString,
        findAll,
        isAnyOfAt,
        getNear,
        isNear,
        countNear
    };
}