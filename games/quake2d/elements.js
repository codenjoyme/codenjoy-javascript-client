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

var Quake2dElement = module.exports = {

        // Пустое место – по которому может двигаться герой.

    NONE : ' ',

        // Стена, через которую нельзя пройти.

    WALL : '☼',

        // Твой герой

    HERO : '☺',

        // Герои других игроков.

    OTHER_HERO : '☻',

        // Твой герой погиб.

    DEAD_HERO : 'X',

        // Герои других игроков под модификаторами.

    SUPER_OTHER_HERO : 'Š',

        // Пуля, ее надо стралять ).

    BULLET : '*',

        // Модификатор. Дополнительная защита.

    SUPER_DEFENCE : '#',

        // Модификатор. Дополнительная защита.

    HEALTH_PACKAGE : '+',

        // Модификатор. Дополнительная атака.

    SUPER_WEAPON : '~',

        // Робот.

    ROBOT : '!'
}
