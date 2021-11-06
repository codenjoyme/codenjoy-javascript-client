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

        // Empty space - where the hero can move.

    NONE : ' ',

        // A wall where you can shoot a hole.

    BRICK : '#',

        // The wall is restored over time. When the process begins, we
        // see a timer.

    PIT_FILL_1 : '1',

        // The wall is restored over time. When the process begins, we
        // see a timer.

    PIT_FILL_2 : '2',

        // The wall is restored over time. When the process begins, we
        // see a timer.

    PIT_FILL_3 : '3',

        // The wall is restored over time. When the process begins, we
        // see a timer.

    PIT_FILL_4 : '4',

        // Indestructible wall - It cannot be destroyed with a shot.

    STONE : '☼',

        // At the moment of the shot, we see the wall like this.

    CRACK_PIT : '*',

        // Clue knife. Collect a series of clues to get the maximum
        // points.

    CLUE_KNIFE : '$',

        // Clue glove. Collect a series of clues to get the maximum
        // points.

    CLUE_GLOVE : '&',

        // Clue ring. Collect a series of clues to get the maximum
        // points.

    CLUE_RING : '@',

        // Your hero is dead. In the next tick, it will disappear and
        // appear in a new location.

    HERO_DIE : 'Ѡ',

        // Your hero is climbing the ladder.

    HERO_LADDER : 'Y',

        // Your hero runs to the left.

    HERO_LEFT : '◄',

        // Your hero runs to the right.

    HERO_RIGHT : '►',

        // Your hero is falling.

    HERO_FALL : ']',

        // Your hero is crawling along the pipe.

    HERO_PIPE : '{',

        // Your hero in the pit.

    HERO_PIT : '⍃',

        // Your shadow-hero is dead. In the next tick, it will
        // disappear and appear in a new location.

    HERO_MASK_DIE : 'x',

        // Your shadow-hero is climbing the ladder.

    HERO_MASK_LADDER : '⍬',

        // Your shadow-hero runs to the left.

    HERO_MASK_LEFT : '⊲',

        // Your shadow-hero runs to the right.

    HERO_MASK_RIGHT : '⊳',

        // Your shadow-hero is falling.

    HERO_MASK_FALL : '⊅',

        // Your shadow-hero is crawling along the pipe.

    HERO_MASK_PIPE : '⋜',

        // Your shadow-hero in the pit.

    HERO_MASK_PIT : 'ᐊ',

        // Other hero is dead. In the next tick, it will disappear and
        // appear in a new location.

    OTHER_HERO_DIE : 'Z',

        // Other hero is climbing the ladder.

    OTHER_HERO_LADDER : 'U',

        // Other hero runs to the left.

    OTHER_HERO_LEFT : ')',

        // Other hero runs to the right.

    OTHER_HERO_RIGHT : '(',

        // Other hero is falling.

    OTHER_HERO_FALL : '⊐',

        // Other hero is crawling along the pipe.

    OTHER_HERO_PIPE : 'Э',

        // Other hero in the pit.

    OTHER_HERO_PIT : 'ᗉ',

        // Other shadow-hero is dead. In the next tick, it will
        // disappear and appear in a new location.

    OTHER_HERO_MASK_DIE : '⋈',

        // Other shadow-hero is climbing the ladder.

    OTHER_HERO_MASK_LADDER : '⋕',

        // Other shadow-hero runs to the left.

    OTHER_HERO_MASK_LEFT : '⋊',

        // Other shadow-hero runs to the right.

    OTHER_HERO_MASK_RIGHT : '⋉',

        // Other shadow-hero is falling.

    OTHER_HERO_MASK_FALL : '⋣',

        // Other shadow-hero is crawling along the pipe.

    OTHER_HERO_MASK_PIPE : '⊣',

        // Other shadow-hero in the pit.

    OTHER_HERO_MASK_PIT : 'ᗏ',

        // Enemy hero is dead. In the next tick, it will disappear and
        // appear in a new location.

    ENEMY_HERO_DIE : 'Ž',

        // Enemy hero is climbing the ladder.

    ENEMY_HERO_LADDER : 'Ǔ',

        // Enemy hero runs to the left.

    ENEMY_HERO_LEFT : '❫',

        // Enemy hero runs to the right.

    ENEMY_HERO_RIGHT : '❪',

        // Enemy hero is falling.

    ENEMY_HERO_FALL : '⋥',

        // Enemy hero is crawling along the pipe.

    ENEMY_HERO_PIPE : 'Ǯ',

        // Enemy hero in the pit.

    ENEMY_HERO_PIT : '⇇',

        // Enemy shadow-hero is dead. In the next tick, it will
        // disappear and appear in a new location.

    ENEMY_HERO_MASK_DIE : '⧓',

        // Enemy shadow-hero is climbing the ladder.

    ENEMY_HERO_MASK_LADDER : '≠',

        // Enemy shadow-hero runs to the left.

    ENEMY_HERO_MASK_LEFT : '⧒',

        // Enemy shadow-hero runs to the right.

    ENEMY_HERO_MASK_RIGHT : '⧑',

        // Enemy shadow-hero is falling.

    ENEMY_HERO_MASK_FALL : '⌫',

        // Enemy shadow-hero is crawling along the pipe.

    ENEMY_HERO_MASK_PIPE : '❵',

        // Enemy shadow-hero in the pit.

    ENEMY_HERO_MASK_PIT : '⬱',

        // Robber is climbing the ladder.

    ROBBER_LADDER : 'Q',

        // Robber runs to the left. Robber picks up the nearest prey
        // and hunts for it until it overtakes it.

    ROBBER_LEFT : '«',

        // Robber runs to the right. Robber picks up the nearest prey
        // and hunts for it until it overtakes it.

    ROBBER_RIGHT : '»',

        // Robber is falling.

    ROBBER_FALL : '‹',

        // Robber is crawling along the pipe.

    ROBBER_PIPE : '<',

        // Robber in the pit.

    ROBBER_PIT : '⍇',

        // Opened golden gates. Can only be locked with a golden key.

    OPENED_DOOR_GOLD : '⍙',

        // Opened silver gates. Can only be locked with a silver key.

    OPENED_DOOR_SILVER : '⍚',

        // Opened bronze gates. Can only be locked with a bronze key.

    OPENED_DOOR_BRONZE : '⍜',

        // Closed golden gates. Can only be opened with a golden key.

    CLOSED_DOOR_GOLD : '⍍',

        // Closed silver gates. Can only be opened with a silver key.

    CLOSED_DOOR_SILVER : '⌺',

        // Closed bronze gates. Can only be opened with a bronze key.

    CLOSED_DOOR_BRONZE : '⌼',

        // Bronze key. Helps open/close golden gates. The key can only
        // be used once.

    KEY_GOLD : '✦',

        // Silver key. Helps open/close silver gates. The key can only
        // be used once.

    KEY_SILVER : '✼',

        // Bronze key. Helps open/close bronze gates. The key can only
        // be used once.

    KEY_BRONZE : '⍟',

        // Bullet. After the shot by the hero, the bullet flies until
        // it meets an obstacle. The bullet kills the hero. It
        // ricochets from the indestructible wall (no more than 1
        // time). The bullet destroys the destructible wall.

    BULLET : '•',

        // Ladder - the hero can move along the level along it.

    LADDER : 'H',

        // Pipe - the hero can also move along the level along it, but
        // only horizontally.

    PIPE : '~',

        // Back door - allows the hero to secretly move to another
        // random place on the map.

    BACKWAY : '⊛',

        // Disguise potion - endow the hero with additional abilities.
        // The hero goes into shadow mode.

    MASK_POTION : 'S'
}
