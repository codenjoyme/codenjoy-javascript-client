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

var IcancodeDirection = module.exports = function() {

    var Direction = require('./../../engine/direction.js');

    Direction.UP = Direction._init(3, 0, 1, 'UP');
    Direction.DOWN = Direction._init(4, 0, -1, 'DOWN');
    Direction.LEFT = Direction._init(1, -1, 0, 'LEFT');
    Direction.RIGHT = Direction._init(2, 1, 0, 'RIGHT');

    Direction.JUMP = Direction._init(5, 0, 0, 'ACT(1)');
    Direction.PULL_BOX = Direction._init(6, 0, 0, 'ACT(2)');
    Direction.FIRE = Direction._init(7, 0, 0, 'ACT(3)');
    Direction.DIE  = Direction._init(8, 0, 0, 'ACT(0)');

    Direction.get = function(direction) {
        if (typeof direction.getIndex == 'function') {
            return direction;
        }

        direction = String(direction);
        direction = direction.toUpperCase();
        for (var name in Direction) {
            var d = Direction[name];
            if (typeof d == 'function') {
                continue;
            }
            if (direction == d.name()) {
                return Direction[name];
            }
        }
        return null;
    }

    /**
     * Says to Hero do nothing
     */
    Direction.doNothing = function() {
        return Direction.STOP.toString();
    }

    /**
     * Reset current level
     */
    Direction.die = function() {
        return Direction.DIE.toString();
    }

    /**
     * Says to Hero jump to direction
     */
    Direction.jump = function(direction) {
        return Direction.JUMP.toString() + "," + direction.toString();
    }

    /**
     * Says to Hero pull box on this direction
     */
    Direction.pull = function(direction) {
        return Direction.PULL_BOX.toString() + "," + direction.toString();
    }

    /**
     * Says to Hero fire on this direction
     */
    Direction.fire = function(direction) {
        return Direction.FIRE.toString() + "," + direction.toString();
    }

    /**
     * Says to Hero jump in place
     */
    Direction.jump = function() {
        return Direction.JUMP.toString();
    }

    /**
     * Says to Hero go to direction
     */
    Direction.go = function(direction) {
        return Direction.valueOf(direction.toString()).toString();
    }

    /**
     * Says to Hero goes to start point
     */
    Direction.reset = function() {
        return Direction.DIE.toString();
    }

    return Direction;
}