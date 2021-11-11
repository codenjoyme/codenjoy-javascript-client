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

var PuzzleboxElement = module.exports = {

        // Пустое место – по которому может двигаться герой.

    NONE : ' ',

        // Стена через которую герою пройти нельзя.

    WALL : '☼',

        // Твой герой.

    HERO : '☺',

        // Коробка, которую можно передвинуть.

    BOX : '#',

        // Коробка, которую ты передвигаешь в данный момент.

    CURBOX : '1',

        // Место куда нужно доставить коробку.

    FILEDBOX : '@',

        // Место для коробки в котором уже находится оная.

    TARGET : '0'
}
