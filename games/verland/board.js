/*-
 * #%L
 * Codenjoy - it's a dojo-like platform from developers to developers.
 * %%
 * Copyright (C) 2012 - 2022 Codenjoy
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

var VerlandBoard = module.exports = function(board){

    var Board = require('./../../engine/board.js');
    var Games = require('./../../engine/games.js');
    var Point = require('./../../engine/point.js');
    var Stuff = require('./../../engine/stuff.js');
    var Element = Games.require('./elements.js');

    var board = new Board(board);

    board.getHero = function() {
        var result = [];
        result = result.concat(board.findAll(Element.HERO_DEAD));
        result = result.concat(board.findAll(Element.HERO));
        return result[0];
    }

    board.getOtherHeroes = function() {
        var result = [];
        result = result.concat(board.findAll(Element.OTHER_HERO_DEAD));
        result = result.concat(board.findAll(Element.OTHER_HERO));
        return result;
    }

    board.getEnemyHeroes = function() {
        var result = [];
        result = result.concat(board.findAll(Element.ENEMY_HERO_DEAD));
        result = result.concat(board.findAll(Element.ENEMY_HERO));
        return result;
    }

    board.getWalls = function() {
        var result = [];
        result = result.concat(board.findAll(Element.PATHLESS));
        return result;
    }

    board.getOtherStuff = function() {
        var result = [];
        result = result.concat(board.findAll(Element.INFECTION));
        result = result.concat(board.findAll(Element.HIDDEN));
        result = result.concat(board.findAll(Element.PATHLESS));
        return result;
    }

    board.isGameOver = function() {
        var result = [];
        result = result.concat(board.findAll(Element.HERO_DEAD));
        return result.length > 0;
    }

    board.isWin = function() {
        var result = [];
        result = result.concat(board.findAll(Element.HERO_HEALING));
        return !board.isGameOver() && result.length > 0;
    }

    board.countContagions = function(x,y) {
        var infectionMarkers = [
            Element.CLEAR,
            Element.CONTAGION_ONE,
            Element.CONTAGION_TWO,
            Element.CONTAGION_THREE,
            Element.CONTAGION_FOUR,
            Element.CONTAGION_FIVE,
            Element.CONTAGION_SIX,
            Element.CONTAGION_SEVEN,
            Element.CONTAGION_EIGHT,
        ];

        return board.isAtMany(x,y, infectionMarkers) ? board.getAt(x,y) : 0;

    }
    board.toString = function() {
        return Stuff.format("Board:\n%s\n" +
            "Hero at: %s\n" +
            "Other heroes at: %s\n" +
            "Enemy heroes at: %s\n" +
            "Other stuff at: %s\n",
            board.boardAsString(),
            board.getHero(),
            board.getOtherHeroes(),
            board.getEnemyHeroes(),
            board.getOtherStuff()
        );
    }

    return board;
}