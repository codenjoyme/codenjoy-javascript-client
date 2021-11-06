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

var CliffordElement = module.exports = {

    NONE : ' ',                    // пустое место – по которому может двигаться детектив

    BRICK : '#',                   // стена в которой можно прострелить дырочку слева или справа от детектива
                                   // (в зависимости от того, куда он сейчас смотрит)

    PIT_FILL_1 : '1',              // стена со временем зарастает. Когда процес начинается - мы видим таймер
    PIT_FILL_2 : '2',
    PIT_FILL_3 : '3',
    PIT_FILL_4 : '4',

    STONE : '☼',                   // неразрушаемая стена - в ней ничего прострелить не получится

    CRACK_PIT : '*',               // в момент выстрела мы видим процесс так

    // улики
    CLUE_KNIFE : '$',              // нож
    CLUE_GLOVE : '&',              // перчатка
    CLUE_RING : '@',               // кольцо

    // твой детектив
    HERO_DIE : 'Ѡ',                // переживает процесс умирания
    HERO_LADDER : 'Y',             // находится на лестнице
    HERO_LEFT : '◄',               // бежит влево
    HERO_RIGHT : '►',              // бежит вправо
    HERO_FALL : ']',               // падает
    HERO_PIPE : '{',               // ползёт по трубе
    HERO_PIT : '⍃',                // в яме

    // твой детектив под маскировкой
    HERO_MASK_DIE : 'x',           // переживает процесс умирания
    HERO_MASK_LADDER : '⍬',        // находится на лестнице
    HERO_MASK_LEFT : '⊲',          // бежит влево
    HERO_MASK_RIGHT : '⊳',         // бежит вправо
    HERO_MASK_FALL : '⊅',          // падает
    HERO_MASK_PIPE : '⋜',          // ползёт по трубе
    HERO_MASK_PIT : 'ᐊ',           // в яме

    // детективы других игроков
    OTHER_HERO_DIE : 'Z',          // переживает процесс умирания
    OTHER_HERO_LADDER : 'U',       // находится на лестнице
    OTHER_HERO_LEFT : ')',         // бежит влево
    OTHER_HERO_RIGHT : '(',        // бежит вправо
    OTHER_HERO_FALL : '⊐',         // падает
    OTHER_HERO_PIPE : 'Э',         // ползёт по трубе
    OTHER_HERO_PIT : 'ᗉ',          // в яме

    // детективы других игроков под маскировкой
    OTHER_HERO_MASK_DIE : '⋈',         // переживает процесс умирания
    OTHER_HERO_MASK_LADDER : '⋕',        // находится на лестнице
    OTHER_HERO_MASK_LEFT : '⋊',       // бежит влево
    OTHER_HERO_MASK_RIGHT : '⋉',       // бежит вправо
    OTHER_HERO_MASK_FALL : '⋣',        // падает
    OTHER_HERO_MASK_PIPE : '⊣',        // ползёт по трубе
    OTHER_HERO_MASK_PIT : 'ᗏ',          // в яме

    // вражеские детективы других игроков
    ENEMY_HERO_DIE : 'Ž',          // переживает процесс умирания
    ENEMY_HERO_LADDER : 'Ǔ',       // находится на лестнице
    ENEMY_HERO_LEFT : '❫',         // бежит влево
    ENEMY_HERO_RIGHT : '❪',        // бежит вправо
    ENEMY_HERO_FALL : '⋥',         // падает
    ENEMY_HERO_PIPE : 'Ǯ',         // ползёт по трубе
    ENEMY_HERO_PIT : '⇇',          // в яме

    // вражеские детективы других игроков под маскировкой
    ENEMY_HERO_MASK_DIE : '⧓',         // переживает процесс умирания
    ENEMY_HERO_MASK_LADDER: '≠',        // находится на лестнице
    ENEMY_HERO_MASK_LEFT : '⧒',       // бежит влево
    ENEMY_HERO_MASK_RIGHT : '⧑',      // бежит вправо
    ENEMY_HERO_MASK_FALL : '⌫',        // падает
    ENEMY_HERO_MASK_PIPE : '❵',        // ползёт по трубе
    ENEMY_HERO_MASK_PIT : '⬱',         // в яме

    // боты-воры
    ROBBER_LADDER : 'Q',        // находится на лестнице
    ROBBER_LEFT : '«',          // бежит влево
    ROBBER_RIGHT : '»',         // бежит вправо
    ROBBER_FALL : '‹',          // падает
    ROBBER_PIPE : '<',          // ползёт по трубе
    ROBBER_PIT : '⍇',           // в яме

    // ворота/ключи
    OPENED_DOOR_GOLD : '⍙',     // золотые, открытые
    OPENED_DOOR_SILVER : '⍚',   // серебряные, открытые
    OPENED_DOOR_BRONZE : '⍜',   // бронзовые, открытые

    CLOSED_DOOR_GOLD : '⍍',     // золотые, закрытые
    CLOSED_DOOR_SILVER : '⌺',   // серебряные, закрытые
    CLOSED_DOOR_BRONZE : '⌼',   // бронзовые, закрытые

    KEY_GOLD : '✦',             // золотой ключ
    KEY_SILVER : '✼',           // серебряный ключ
    KEY_BRONZE : '⍟',           // бронзовый ключ

    BULLET : '•',               // пуля
    LADDER : 'H',               // Лестница - по ней можно перемещаться по уровню
    PIPE : '~',                 // Труба - по ней так же можно перемещаться по уровню, но только горизонтально
    BACKWAY : '⊛',              // Черный ход - позволяет скрыто перемещаться в иное место на карте
    MASK_POTION : 'S'           // Маскировочное зелье - наделяют детектива дополнительными способностями
}