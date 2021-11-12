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

var XonixElement = module.exports = {

        // Море, где живут морские враги. Море нужно делать сушей.

    SEA : '.',

        // Ничейная суша, по которой можно передвигаться героям и
        // наземным врагам.

    LAND : 'X',

        // Твой герой.

    HERO : 'O',

        // Захваченная тобой суша.

    HERO_LAND : '#',

        // След, который оставляет герой двигаясь по морю или по сушам
        // противника. Уязвим для морских врагов. После выхода героя на
        // сушу, море (и/или суша другого противника), очерченное
        // следом, превращается в сушу.

    HERO_TRACE : 'o',

        // Герой противника.

    HOSTILE : 'A',

        // Захваченные противниками суша.

    HOSTILE_LAND : '@',

        // След, оставляемые противником во время захвата суши.

    HOSTILE_TRACE : 'a',

        // Морской враг.

    MARINE_ENEMY : 'M',

        // Сухопутный враг.

    LAND_ENEMY : 'L'
}
