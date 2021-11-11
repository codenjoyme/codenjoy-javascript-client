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

var SudokuElement = module.exports = {

        // Пустое место – циферку в котором предстоит отгадать.

    NONE : ' ',

        // Граница, проигнорируй ее - она не учитывается в координатах.

    BORDER : '☼',

        // Если число не отображается на поле.

    HIDDEN : '*',

        // Цифра 1.

    ONE : '1',

        // Цифра 2.

    TWO : '2',

        // Цифра 3.

    THREE : '3',

        // Цифра 4.

    FOUR : '4',

        // Цифра 5.

    FIVE : '5',

        // Цифра 6.

    SIX : '6',

        // Цифра 7.

    SEVEN : '7',

        // Цифра 8.

    EIGHT : '8',

        // Цифра 9.

    NINE : '9'
}
