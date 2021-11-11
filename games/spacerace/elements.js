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

var SpaceraceElement = module.exports = {

        // Пустое место, куда можно перейти герою.

    NONE : ' ',

        // Взрыв героя, астероида или мины (мина взрывается сильнее).

    EXPLOSION : 'x',

        // Стенка, через которую нельзя пройти.

    WALL : '☼',

        // Твой герой.

    HERO : '☺',

        // Герои других игроков.

    OTHER_HERO : '☻',

        // Твой герой погиб. Пропадет в следующем тике.

    DEAD_HERO : '+',

        // Золото - за ним стоит поохотиться.

    GOLD : '$',

        // Мины - их надо избегать, а лучше уничтожать. Взрывная волна
        // от мины размером +1 клеточка с каждой стороны.

    BOMB : '♣',

        // Астероиды - их надо избегать, а лучше уничтожать.

    STONE : '0',

        // Магазин патронов.

    BULLET_PACK : '7',

        // Пуля.

    BULLET : '*'
}
