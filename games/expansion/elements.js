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

var ExpansionElement = module.exports = {

        // Empty space (at layer 2) where player can go.

    EMPTY : '-',

        // Empty space (at layer 1) where player can go.

    FLOOR : '.',

        // Wall.

    ANGLE_IN_LEFT : '╔',

        // Wall.

    WALL_FRONT : '═',

        // Wall.

    ANGLE_IN_RIGHT : '┐',

        // Wall.

    WALL_RIGHT : '│',

        // Wall.

    ANGLE_BACK_RIGHT : '┘',

        // Wall.

    WALL_BACK : '─',

        // Wall.

    ANGLE_BACK_LEFT : '└',

        // Wall.

    WALL_LEFT : '║',

        // Wall.

    WALL_BACK_ANGLE_LEFT : '┌',

        // Wall.

    WALL_BACK_ANGLE_RIGHT : '╗',

        // Wall.

    ANGLE_OUT_RIGHT : '╝',

        // Wall.

    ANGLE_OUT_LEFT : '╚',

        // Wall.

    SPACE : ' ',

        // Forces of player 1.

    FORCE1 : '♥',

        // Forces of player 2.

    FORCE2 : '♦',

        // Forces of player 3.

    FORCE3 : '♣',

        // Forces of player 4.

    FORCE4 : '♠',

        // Exit.

    EXIT : 'E',

        // Hole.

    HOLE : 'O',

        // Unpassable break.

    BREAK : 'B',

        // Gold.

    GOLD : '$',

        // Base of player 1.

    BASE1 : '1',

        // Base of player 2.

    BASE2 : '2',

        // Base of player 3.

    BASE3 : '3',

        // Base of player 4.

    BASE4 : '4',

        // Fog of war system layer.

    FOG : 'F',

        // Background system layer.

    BACKGROUND : 'G'
}
