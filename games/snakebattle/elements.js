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

var SnakebattleElement = module.exports = {

        // Empty space - space where the snake can move.

    NONE : ' ',

        // Impenetrable wall.

    WALL : '☼',

        // Respawn point from which the snake starts its movement.

    START_FLOOR : '#',

        // .

    OTHER : '?',

        // Apple.

    APPLE : '○',

        // Stone.

    STONE : '●',

        // Flying pill/Angel's wings.

    FLYING_PILL : '©',

        // Fury pill/Devil's mask.

    FURY_PILL : '®',

        // Gold.

    GOLD : '$',

        // Your snake head pointing down.

    HEAD_DOWN : '▼',

        // Your snake head pointing left.

    HEAD_LEFT : '◄',

        // Your snake head pointing right.

    HEAD_RIGHT : '►',

        // Your snake head pointing up.

    HEAD_UP : '▲',

        // Your snake is dead.

    HEAD_DEAD : '☻',

        // Your snake head under influence Fury pill/Devils mask.

    HEAD_EVIL : '♥',

        // Your snake head under influence Flying pill/Angels wings.

    HEAD_FLY : '♠',

        // Your snake head when snake is inactive.

    HEAD_SLEEP : '&',

        // Body of your snake is directed horizontally.

    BODY_HORIZONTAL : '═',

        // Body of your snake is directed vertically.

    BODY_VERTICAL : '║',

        // Turning your snake body from left to down.

    BODY_LEFT_DOWN : '╗',

        // Turning your snake body from left to up.

    BODY_LEFT_UP : '╝',

        // Turning your snake body from right to down.

    BODY_RIGHT_DOWN : '╔',

        // Turning your snake body from left to up.

    BODY_RIGHT_UP : '╚',

        // Your snake tail (end) pointing down.

    TAIL_END_DOWN : '╙',

        // Your snake tail (end) pointing left.

    TAIL_END_LEFT : '╘',

        // Your snake tail (end) pointing up.

    TAIL_END_UP : '╓',

        // Your snake tail (end) pointing right.

    TAIL_END_RIGHT : '╕',

        // Your snake tail (end) when snake is inactive.

    TAIL_INACTIVE : '~',

        // Enemy snake head pointing down.

    ENEMY_HEAD_DOWN : '˅',

        // Enemy snake head pointing left.

    ENEMY_HEAD_LEFT : '<',

        // Enemy snake head pointing right.

    ENEMY_HEAD_RIGHT : '>',

        // Enemy snake head pointing up.

    ENEMY_HEAD_UP : '˄',

        // Enemy snake is dead.

    ENEMY_HEAD_DEAD : '☺',

        // Enemy snake head under influence Fury pill/Devils mask.

    ENEMY_HEAD_EVIL : '♣',

        // Enemy snake head under influence Flying pill/Angels wings.

    ENEMY_HEAD_FLY : '♦',

        // Enemy snake head when snake is inactive.

    ENEMY_HEAD_SLEEP : 'ø',

        // Body of enemy snake is directed horizontally.

    ENEMY_BODY_HORIZONTAL : '─',

        // Body of enemy snake is directed vertically.

    ENEMY_BODY_VERTICAL : '│',

        // Turning enemy snake body from left to down.

    ENEMY_BODY_LEFT_DOWN : '┐',

        // Turning enemy snake body from left to up.

    ENEMY_BODY_LEFT_UP : '┘',

        // Turning enemy snake body from right to down.

    ENEMY_BODY_RIGHT_DOWN : '┌',

        // Turning enemy snake body from left to up.

    ENEMY_BODY_RIGHT_UP : '└',

        // Enemy snake tail (end) pointing down.

    ENEMY_TAIL_END_DOWN : '¤',

        // Enemy snake tail (end) pointing left.

    ENEMY_TAIL_END_LEFT : '×',

        // Enemy snake tail (end) pointing up.

    ENEMY_TAIL_END_UP : 'æ',

        // Enemy snake tail (end) pointing right.

    ENEMY_TAIL_END_RIGHT : 'ö',

        // Enemy snake tail (end) when snake is inactive.

    ENEMY_TAIL_INACTIVE : '*'
}
