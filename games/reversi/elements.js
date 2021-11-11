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

var ReversiElement = module.exports = {

        // Пустое место – на которое во время хода можно ставить свою
        // фишку (если будет что перевернуть).

    NONE : ' ',

        // Препятствие на которое ставить фишку нельзя.

    BREAK : '☼',

        // Так ты видишь белые (не свои) фишки, если ты играешь черными
        // и сейчас твой ход.

    WHITE : 'o',

        // Так ты видишь белые (свои) фишки, если ты играешь белыми и
        // сейчас не твой ход.

    WHITE_STOP : '.',

        // Так всеми видятся белые фишки, если сейчас их ход.

    WHITE_TURN : 'O',

        // Так ты видишь черные (не свои) фишки, если ты играешь белыми
        // и сейчас твой ход.

    BLACK : 'x',

        // Так ты видишь черные (свои) фишки, если ты играешь черными и
        // сейчас не твой ход.

    BLACK_STOP : '+',

        // Так всеми видятся черные фишки, если сейчас их ход.

    BLACK_TURN : 'X'
}
