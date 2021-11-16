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

var MollymageElement = module.exports = {

        // After Molly set the potion, the timer starts (5 ticks).

    POTION_TIMER_5 : '5',

        // This potion will blow up after 4 ticks.

    POTION_TIMER_4 : '4',

        // This after 3...

    POTION_TIMER_3 : '3',

        // Two..

    POTION_TIMER_2 : '2',

        // One.

    POTION_TIMER_1 : '1',

        // Boom! this is what is potion does, everything that is
        // destroyable got destroyed.

    BOOM : '҉',

        // Indestructible wall - it will not fall from potion.

    WALL : '☼',

        // This is a treasure box, it opens with an explosion.

    TREASURE_BOX : '#',

        // This is like a treasure box opens looks like, it will
        // disappear on next move. If it's you did it - you'll get
        // score points. Perhaps a prize will appear.

    OPENING_TREASURE_BOX : 'H',

        // This guys runs over the board randomly and gets in the way
        // all the time. If it will touch Molly - she will die. You'd
        // better kill this piece of ... soul, you'll get score points
        // for it.

    GHOST : '&',

        // This is ghost corpse.

    DEAD_GHOST : 'x',

        // Temporarily increase potion radius blast. Applicable only to
        // new potions.

    POTION_BLAST_RADIUS_INCREASE : '+',

        // Temporarily increase available potions count. Number of
        // extra potions can be set in settings*.

    POTION_COUNT_INCREASE : 'c',

        // Next several potions would be with remote control.
        // Activating by command ACT. Number of RC triggers is limited
        // and can be set in settings*.

    POTION_REMOTE_CONTROL : 'r',

        // Temporarily gives you immunity from potion blasts (own
        // potion and others as well).

    POTION_IMMUNE : 'i',

        // Hero can shoot by poison cloud. Using: ACT(1)+Direction.
        // Temporary.

    POISON_THROWER : 'T',

        // Hero can explode all potions on the field. Using: ACT(2).
        // Temporary.

    POTION_EXPLODER : 'A',

        // A void. This is the only place where you can move your
        // Molly.

    NONE : ' ',

        // This is what your Molly usually looks like.

    HERO : '☺',

        // This is if your Molly is sitting on own potion.

    POTION_HERO : '☻',

        // Oops, your Molly is dead (don't worry, she will appear
        // somewhere in next move). You're getting penalty points for
        // each death.

    DEAD_HERO : 'Ѡ',

        // This is what other heroes looks like.

    OTHER_HERO : '♥',

        // This is if other hero is sitting on own potion.

    OTHER_POTION_HERO : '♠',

        // Other hero corpse (it will disappear shortly, right on the
        // next move). If you've done it you'll get score points.

    OTHER_DEAD_HERO : '♣',

        // This is what enemy heroes looks like.

    ENEMY_HERO : 'ö',

        // This is if enemy hero is sitting on own potion.

    ENEMY_POTION_HERO : 'Ö',

        // Enemy hero corpse (it will disappear shortly, right on the
        // next move). If you've done it you'll get score points.

    ENEMY_DEAD_HERO : 'ø'
}
