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

var SampleBoard = module.exports = function(board){

    var Board = require('./../../engine/board.js');
    var Games = require('./../../engine/games.js');
    var Point = require('./../../engine/point.js');
    var Stuff = require('./../../engine/stuff.js');
    var Element = Games.require('./elements.js');

    var board = new Board(board);

    board.getHero = function() {
        var result = [];
        result = result.concat(board.findAll(Element.HERO));
        result = result.concat(board.findAll(Element.DEAD_HERO));
        return result[0];
    };

    board.getOtherHeroes = function() {
        var result = [];
        result = result.concat(board.findAll(Element.OTHER_HERO));
        result = result.concat(board.findAll(Element.OTHER_DEAD_HERO));
        return result;
    };

    board.isGameOver = function() {
        var result = [];
        result = result.concat(board.findAll(Element.DEAD_HERO));
        return result.length > 0;
    };

    board.getBarriers = function() {
        var all = board.getWalls();
        all = all.concat(board.getBombs());
        all = all.concat(board.getOtherHeroes());
        return board.removeDuplicates(all);
    };

    board.getWalls = function() {
        return board.findAll(Element.WALL);
    };

    board.getBombs = function() {
        return board.findAll(Element.BOMB);
    };

    board.getGold = function() {
        return board.findAll(Element.GOLD);
    };

    board.isBarrierAt = function(x, y) {
        if (new Point(x, y).isOutOf(board.size)) {
            return true;
        }

        return board.contains(board.getBarriers(), new Point(x, y));
    };

    board.toString = function() {
        return Stuff.format("%s\n" +
            "Hero at: %s\n" +
            "Other heroes at: %s\n" +
            "Bombs at: %s\n" +
            "Gold at: %s",
            board.boardAsString(),
            board.getHero(),
            board.getOtherHeroes(),
            board.getBombs(),
            board.getGold()
        );
    };

    return board;
};