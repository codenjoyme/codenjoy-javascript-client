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

var FootballElement = module.exports = {

        // Пустое место, куда можно перейти игроку.

    NONE : ' ',

        // Внешняя разметка поля, через которую нельзя пройти.

    WALL : '☼',

        // Твой игроку.

    HERO : '☺',

        // Игрок с мячом.

    HERO_W_BALL : '☻',

        // Мяч в движении.

    BALL : '*',

        // Мяч остановился.

    STOPPED_BALL : '∙',

        // Верхние ворота.

    TOP_GOAL : '┴',

        // Нижние ворота.

    BOTTOM_GOAL : '┬',

        // Твои ворота.

    MY_GOAL : '=',

        // Чужие ворота.

    ENEMY_GOAL : '⌂',

        // Гол в ворота.

    HITED_GOAL : 'x',

        // Гол в твои ворота.

    HITED_MY_GOAL : '#',

        // Игрок твоей команды.

    TEAM_MEMBER : '♦',

        // Игрок твоей команды с мячем.

    TEAM_MEMBER_W_BALL : '♥',

        // Игрок команды противников.

    ENEMY : '♣',

        // Игрок команды противников с мячем.

    ENEMY_W_BALL : '♠'
}
