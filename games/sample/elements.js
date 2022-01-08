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

var SampleElement = module.exports = {

        // Empty place where the hero can go.

    NONE : ' ',

        // Wall you cant walk through.

    WALL : '☼',

        // Your hero.

    HERO : '☺',

        // Your hero died. His body will disappear in the next tick.

    DEAD_HERO : 'X',

        // Heroes of other players.

    OTHER_HERO : '☻',

        // Another player's hero died.

    OTHER_DEAD_HERO : 'Y',

        // Heroes of other players in other team.

    ENEMY_HERO : '♥',

        // Player's Hero from the other team who died.

    ENEMY_DEAD_HERO : 'Z',

        // Gold. It must be picked up.

    GOLD : '$',

        // Bomb planted by the hero. You can blow up on it.

    BOMB : 'x'
}
