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

var BattlecityElement = module.exports = {

        // An empty space where a tank can move.

    NONE : ' ',

        // The undestroyable wall.

    BATTLE_WALL : '☼',

        // A destroyed enemy’s tank. A new appears just in a second.

    BANG : 'Ѡ',

        // Ice, having driven onto which the tank will begin to drift.
        // During a skid, the tank will repeat the old commands for
        // several ticks in a row, ignoring the current commands.

    ICE : '#',

        // The trees hide tanks which can continue to shoot at the same
        // time. The fired shells are also not visible under the trees.
        // Only prizes can be seen from behind the trees.

    TREE : '%',

        // The river does not allow to pass through itself without the
        // PRIZE_WALKING_ON_WATER prize, but the shells fly freely
        // through the water. A tank stuck in the middle of the water,
        // after canceling the PRIZE_WALKING_ON_WATER prize, can move 1
        // cell in the water only every N ticks.

    RIVER : '~',

        // A wall that hasn't been shot yet. It takes 3 shots to
        // completely destroy.

    WALL : '╬',

        // Partially destroyed wall. For complete destruction, 2 shot
        // is required.

    WALL_DESTROYED_DOWN : '╩',

        // Partially destroyed wall. For complete destruction, 2 shot
        // is required.

    WALL_DESTROYED_UP : '╦',

        // Partially destroyed wall. For complete destruction, 2 shot
        // is required.

    WALL_DESTROYED_LEFT : '╠',

        // Partially destroyed wall. For complete destruction, 2 shot
        // is required.

    WALL_DESTROYED_RIGHT : '╣',

        // Partially destroyed wall. For complete destruction, 1 shot
        // is required.

    WALL_DESTROYED_DOWN_TWICE : '╨',

        // Partially destroyed wall. For complete destruction, 1 shot
        // is required.

    WALL_DESTROYED_UP_TWICE : '╥',

        // Partially destroyed wall. For complete destruction, 1 shot
        // is required.

    WALL_DESTROYED_LEFT_TWICE : '╞',

        // Partially destroyed wall. For complete destruction, 1 shot
        // is required.

    WALL_DESTROYED_RIGHT_TWICE : '╡',

        // Partially destroyed wall. For complete destruction, 1 shot
        // is required.

    WALL_DESTROYED_LEFT_RIGHT : '│',

        // Partially destroyed wall. For complete destruction, 1 shot
        // is required.

    WALL_DESTROYED_UP_DOWN : '─',

        // Partially destroyed wall. For complete destruction, 1 shot
        // is required.

    WALL_DESTROYED_UP_LEFT : '┌',

        // Partially destroyed wall. For complete destruction, 1 shot
        // is required.

    WALL_DESTROYED_RIGHT_UP : '┐',

        // Partially destroyed wall. For complete destruction, 1 shot
        // is required.

    WALL_DESTROYED_DOWN_LEFT : '└',

        // Partially destroyed wall. For complete destruction, 1 shot
        // is required.

    WALL_DESTROYED_DOWN_RIGHT : '┘',

        // Partially destroyed wall. For complete destruction, 2 shot
        // is required.

    WALL_DESTROYED : ' ',

        // Completely destroyed wall. Wall will recover over time.

    BULLET : '•',

        // Your tank is pointing up.

    TANK_UP : '▲',

        // Your tank is pointing right.

    TANK_RIGHT : '►',

        // Your tank is pointing down.

    TANK_DOWN : '▼',

        // Your tank is pointing left.

    TANK_LEFT : '◄',

        // Enemy tank is pointing up.

    OTHER_TANK_UP : '˄',

        // Enemy tank is pointing right.

    OTHER_TANK_RIGHT : '˃',

        // Enemy tank is pointing down.

    OTHER_TANK_DOWN : '˅',

        // Enemy tank is pointing left.

    OTHER_TANK_LEFT : '˂',

        // AI-tank is pointing up.

    AI_TANK_UP : '?',

        // AI-tank is pointing right.

    AI_TANK_RIGHT : '»',

        // AI-tank is pointing down.

    AI_TANK_DOWN : '¿',

        // AI-tank is pointing left.

    AI_TANK_LEFT : '«',

        // AI-tank can also be a prize, then it is highlighted by this
        // sprite every few ticks.

    AI_TANK_PRIZE : '◘',

        // The dropped prize after the destruction of the prize tank
        // flickers on the field every even tick of the game with this
        // sprite.

    PRIZE : '!',

        // A prize that gives the hero temporary invulnerability.

    PRIZE_IMMORTALITY : '1',

        // A prize that allows you to temporarily destroy any walls
        // with 1 shot, even indestructible ones (but not the border of
        // the field).

    PRIZE_BREAKING_WALLS : '2',

        // A prize that allows the hero to temporarily walk on water.

    PRIZE_WALKING_ON_WATER : '3',

        // A prize that allows the hero to temporarily see all enemies
        // under the trees.

    PRIZE_VISIBILITY : '4',

        // A prize that allows the hero to temporarily not slide on the
        // ice.

    PRIZE_NO_SLIDING : '5'
}
