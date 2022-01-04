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

var Point = module.exports = function(x, y, direction, element) {

    var pt = function(x, y) {
        return new Point(x, y);
    }

    var equals = function(o) {
        return o.getX() == x && o.getY() == y;
    }

    var toString = function() {
        return '[' + x + ',' + y + (!!direction ? (',' + direction) : '') + ']';
    }

    var isOutOf = function(boardSize) {
        return x >= boardSize || y >= boardSize || x < 0 || y < 0;
    }

    var getX = function() {
        return x;
    }

    var getY = function() {
        return y;
    }

    var getElement= function(){
        return element
    }

    var moveTo = function(direction) {
        return pt(direction.changeX(x), direction.changeY(y));
    }

    var move= function(dx, dy) {
        x += dx;
        y += dy;
    }

    var shiftLeft = function(delta = 1) {
        return new Point(x - delta, y);
    }

    var shiftRight = function(delta = 1) {
        return new Point(x + delta, y);
    }

    var shiftTop = function(delta = 1) {
        return new Point(x, y + delta);
    }

    var shiftBottom = function(delta = 1) {
        return new Point(x, y - delta);
    }
    
    return {
        x,
        y,
        direction,
        element,
        equals,
        toString,
        isOutOf,
        getX,
        getY,
        getElement,
        moveTo,
        move,
        shiftLeft,
        shiftRight,
        shiftTop,
        shiftBottom,
    };
}