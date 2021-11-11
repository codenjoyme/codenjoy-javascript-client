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

var PongElement = module.exports = {

        // Пустое место на поле.

    NONE : ' ',

        // Вертикальная граница поля.

    VERTICAL_WALL : '|',

        // Горизонтальная граница поля.

    HORIZONTAL_WALL : '-',

        // Мяч.

    BALL : 'o',

        // Игровая панель противника (доска отбивающая мяч).

    PANEL : '#',

        // Твоя игровая панель (доска отбивающая мяч).

    HERO : 'H'
}
