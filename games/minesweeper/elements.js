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

var MinesweeperElement = module.exports = {

        // Сапер взорвался на бомбе.

    BANG : 'Ѡ',

        // На секунду после смерти героя поле открывается и можно
        // увидеть где были бомбы.

    HERE_IS_BOMB : '☻',

        // ...а так же какие бомбы удалось нейтрализовать.

    DESTROYED_BOMB : 'x',

        // Сапер.

    DETECTOR : '☺',

        // Флажок сапера, указывающий что тут вероятно бомба. Если он
        // был выставлен на мину - она тут нейтрализуется и цифры
        // вокруг обновятся. Если нет - штраф.

    FLAG : '‼',

        // Туман - место где еще не бывал сапер. Там может быть бомба.

    HIDDEN : '*',

        // Граница поля или препятствие для перемещения.

    BORDER : '☼',

        // Вокруг этой клеточки нет бомб.

    NONE : ' ',

        // Вокруг этой клеточки одна бомба.

    ONE_MINE : '1',

        // Вокруг этой клеточки две бомбы.

    TWO_MINES : '2',

        // Вокруг этой клеточки три бомбы.

    THREE_MINES : '3',

        // Вокруг этой клеточки четыре бомбы.

    FOUR_MINES : '4',

        // Вокруг этой клеточки пять бомб.

    FIVE_MINES : '5',

        // Вокруг этой клеточки шесть бомб.

    SIX_MINES : '6',

        // Вокруг этой клеточки семь бомб.

    SEVEN_MINES : '7',

        // Вокруг этой клеточки восемь бомб.

    EIGHT_MINES : '8'
}
