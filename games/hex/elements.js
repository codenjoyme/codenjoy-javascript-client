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

var HexElement = module.exports = {

        // Пустое поле на карте. Сюда можно перемещать свои войска.

    NONE : ' ',

        // Непроходимое препятствие. Обычно граница поля, но может
        // появиться в месте, куда два героя одновременно отправят вои
        // войска.

    WALL : '☼',

        // Твои войска.

    MY_HERO : '☺',

        // Войска противника 1.

    HERO1 : '☻',

        // Войска противника 2.

    HERO2 : '♥',

        // Войска противника 3.

    HERO3 : '♦',

        // Войска противника 4.

    HERO4 : '♣',

        // Войска противника 5.

    HERO5 : '♠',

        // Войска противника 6.

    HERO6 : '•',

        // Войска противника 7.

    HERO7 : '◘',

        // Войска противника 8.

    HERO8 : '○',

        // Войска противника 9.

    HERO9 : '◙',

        // Войска противника 10.

    HERO10 : '♂',

        // Войска противника 11.

    HERO11 : '♀'
}
