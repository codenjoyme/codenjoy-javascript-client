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

var NamdreabElement = module.exports = {

        // Empty space - space where the hero can move.

    NONE : ' ',

        // Impenetrable rock.

    ROCK : '☼',

        // Respawn point from which the hero starts its movement.

    START_SPOT : '#',

        // Blueberry.

    BLUEBERRY : '○',

        // Acorn.

    ACORN : '●',

        // Death cap. Brings the player into flight mode, which gives
        // him the ability to avoid obstacles.

    DEATH_CAP : '©',

        // Fly agaric. Brings the player into a fury, which gives him
        // an advantage when clashing.

    FLY_AGARIC : '®',

        // Strawberry.

    STRAWBERRY : '$',

        // Your hero head pointing down.

    HEAD_DOWN : '▼',

        // Your hero head pointing left.

    HEAD_LEFT : '◄',

        // Your hero head pointing right.

    HEAD_RIGHT : '►',

        // Your hero head pointing up.

    HEAD_UP : '▲',

        // Your hero is dead.

    HEAD_DEAD : '☻',

        // Your hero head under influence fly agaric.

    HEAD_EVIL : '♥',

        // Your hero head under influence death cap.

    HEAD_FLY : '♠',

        // Your hero head when hero is inactive.

    HEAD_SLEEP : '&',

        // Body of your hero is directed horizontally.

    BODY_HORIZONTAL : '═',

        // Body of your hero is directed vertically.

    BODY_VERTICAL : '║',

        // Turning your hero body from left to down.

    BODY_LEFT_DOWN : '╗',

        // Turning your hero body from left to up.

    BODY_LEFT_UP : '╝',

        // Turning your hero body from right to down.

    BODY_RIGHT_DOWN : '╔',

        // Turning your hero body from left to up.

    BODY_RIGHT_UP : '╚',

        // Your hero tail (end) pointing down.

    TAIL_END_DOWN : '╙',

        // Your hero tail (end) pointing left.

    TAIL_END_LEFT : '╘',

        // Your hero tail (end) pointing up.

    TAIL_END_UP : '╓',

        // Your hero tail (end) pointing right.

    TAIL_END_RIGHT : '╕',

        // Your hero tail (end) when hero is inactive.

    TAIL_INACTIVE : '~',

        // Enemy hero head pointing down.

    ENEMY_HEAD_DOWN : '˅',

        // Enemy hero head pointing left.

    ENEMY_HEAD_LEFT : '<',

        // Enemy hero head pointing right.

    ENEMY_HEAD_RIGHT : '>',

        // Enemy hero head pointing up.

    ENEMY_HEAD_UP : '˄',

        // Enemy hero is dead.

    ENEMY_HEAD_DEAD : '☺',

        // Enemy hero head under influence fly agaric.

    ENEMY_HEAD_EVIL : '♣',

        // Enemy hero head under influence death cap.

    ENEMY_HEAD_FLY : '♦',

        // Enemy hero head when hero is inactive.

    ENEMY_HEAD_SLEEP : 'ø',

        // Body of enemy hero is directed horizontally.

    ENEMY_BODY_HORIZONTAL : '─',

        // Body of enemy hero is directed vertically.

    ENEMY_BODY_VERTICAL : '│',

        // Turning enemy hero body from left to down.

    ENEMY_BODY_LEFT_DOWN : '┐',

        // Turning enemy hero body from left to up.

    ENEMY_BODY_LEFT_UP : '┘',

        // Turning enemy hero body from right to down.

    ENEMY_BODY_RIGHT_DOWN : '┌',

        // Turning enemy hero body from left to up.

    ENEMY_BODY_RIGHT_UP : '└',

        // Enemy hero tail (end) pointing down.

    ENEMY_TAIL_END_DOWN : '¤',

        // Enemy hero tail (end) pointing left.

    ENEMY_TAIL_END_LEFT : '×',

        // Enemy hero tail (end) pointing up.

    ENEMY_TAIL_END_UP : 'æ',

        // Enemy hero tail (end) pointing right.

    ENEMY_TAIL_END_RIGHT : 'ö',

        // Enemy hero tail (end) when hero is inactive.

    ENEMY_TAIL_INACTIVE : '*'
}
