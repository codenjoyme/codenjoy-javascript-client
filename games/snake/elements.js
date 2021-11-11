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

var SnakeElement = module.exports = {

        // Stone.

    BAD_APPLE : '☻',

        // Having eaten it, you shorten it in length. If it is not long
        // enough, you die.

    GOOD_APPLE : '☺',

        // An obstacle that cannot be passed. It is also the border of
        // the field.

    BREAK : '☼',

        // An empty place in the field where the snake can go.

    NONE : ' ',

        // Snake head is pointing down.

    HEAD_DOWN : '▼',

        // Snake head is pointing left.

    HEAD_LEFT : '◄',

        // Snake head is pointing right.

    HEAD_RIGHT : '►',

        // Snake head is pointing up.

    HEAD_UP : '▲',

        // Horizontal part of the body.

    TAIL_HORIZONTAL : '═',

        // Vertical part of the body.

    TAIL_VERTICAL : '║',

        // Turning the snake body from left to down.

    TAIL_LEFT_DOWN : '╗',

        // Turning the snake body from left to up.

    TAIL_LEFT_UP : '╝',

        // Turning the snake body from right to down.

    TAIL_RIGHT_DOWN : '╔',

        // Turning the snake body from right to up.

    TAIL_RIGHT_UP : '╚',

        // Down tail.

    TAIL_END_DOWN : '╙',

        // Left tail.

    TAIL_END_LEFT : '╘',

        // Up tail.

    TAIL_END_UP : '╓',

        // Right tail.

    TAIL_END_RIGHT : '╕'
}
