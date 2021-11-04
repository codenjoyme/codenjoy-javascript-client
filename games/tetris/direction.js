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

var TetrisDirection = module.exports = function() {

    var Direction = require('./../../engine/direction.js');

    // move figure
    Direction.LEFT = Direction._init(1, -1, 0, 'left');
    Direction.RIGHT = Direction._init(2, 1, 0, 'right');

    // drop figure
    Direction.DOWN = Direction._init(3, 0, -1, 'down');

    // Rotation of the figure clockwise by 90 degree
    Direction.ACT = Direction._init(4, 0, 0, 'act');

    // Rotation of the figure clockwise by 180 degree
    Direction.ACT2 = Direction._init(5, 0, 0, 'act(2)');

    // Rotation of the figure counterclockwise by 90 degree
    Direction.ACT3 = Direction._init(6, 0, 0, 'act(3)');

    // Reset the glass (as in case of overflow of the glass, points will be removed)
    Direction.RESET = Direction._init(7, 0, 0, 'act(0,0)');

    return Direction;
}