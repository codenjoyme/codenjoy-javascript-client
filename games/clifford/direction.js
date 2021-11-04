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

var CliffordDirection = module.exports = function() {

    var Direction = require('./../../engine/direction.js');

    Direction.LEFT             = Direction._init(0, -1,  0, 'LEFT');         // move
    Direction.RIGHT            = Direction._init(1,  1,  0, 'RIGHT');        // move
    Direction.UP               = Direction._init(2,  0, -1, 'UP');           // move
    Direction.DOWN             = Direction._init(3,  0,  1, 'DOWN');         // move
    Direction.CRACK_LEFT       = Direction._init(4,  0,  0, 'ACT,LEFT');     // crack ground at left
    Direction.CRACK_RIGHT      = Direction._init(5,  0,  0, 'ACT,RIGHT');    // crack ground at right
    Direction.STOP             = Direction._init(6,  0,  0, '');             // stay
    Direction.DIE              = Direction._init(7,  0,  0, "ACT(0)");       // suicide
    Direction.SHOOT_LEFT       = Direction._init(8,  0,  0, 'ACT(1),LEFT');  // shoot to the left
    Direction.SHOOT_RIGHT      = Direction._init(9,  0,  0, 'ACT(1),RIGHT'); // shoot to the right
    Direction.OPEN_DOOR_LEFT   = Direction._init(10, 0,  0, 'ACT(2),LEFT');  // open door on left
    Direction.OPEN_DOOR_RIGHT  = Direction._init(11, 0,  0, 'ACT(2),RIGHT'); // open door on right
    Direction.CLOSE_DOOR_LEFT  = Direction._init(12, 0,  0, 'ACT(3),LEFT');  // close door on left
    Direction.CLOSE_DOOR_RIGHT = Direction._init(13, 0,  0, 'ACT(3),RIGHT'); // close door on right

    return Direction;
}