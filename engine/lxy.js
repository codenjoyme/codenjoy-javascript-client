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

var LengthToXY = module.exports = function(boardSize) {

    var Point = require('./point.js');

    function inversionY(y) {
        return boardSize - 1 - y;
    }

    function inversionX(x) {
        return x;
    }

    var getXY = function(length) {
        if (length == -1) {
            return null;
        }
        var x = inversionX(length % boardSize);
        var y = inversionY(Math.trunc(length / boardSize));
        return new Point(x, y);
    }

    var getLength = function(x, y) {
        var xx = inversionX(x);
        var yy = inversionY(y);
        return yy*boardSize + xx;
    }

    return {
        getXY,
        getLength
    };
}