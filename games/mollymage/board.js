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

var MollymageBoard = module.exports = function(board){

    var Board = require('./../../engine/board.js');
    var Games = require('./../../engine/games.js');
    var Point = require('./../../engine/point.js');
    var Stuff = require('./../../engine/stuff.js');
    var Element = Games.require('./elements.js');

    var board = new Board(board);

    board.getHero = function() {
        var result = [];
        result = result.concat(board.findAll(Element.HERO));
        result = result.concat(board.findAll(Element.HERO_POTION));
        result = result.concat(board.findAll(Element.HERO_DEAD));
        return result[0];
    };

    board.getOtherHeroes = function() {
        var result = [];
        result = result.concat(board.findAll(Element.OTHER_HERO));
        result = result.concat(board.findAll(Element.OTHER_HERO_POTION));
        result = result.concat(board.findAll(Element.OTHER_HERO_DEAD));
        return result;
    };

    board.getEnemyHeroes = function() {
        var result = [];
        result = result.concat(board.findAll(Element.ENEMY_HERO));
        result = result.concat(board.findAll(Element.ENEMY_HERO_POTION));
        result = result.concat(board.findAll(Element.ENEMY_HERO_DEAD));
        return result;
    };

    board.isGameOver = function() {
        var result = [];
        result = result.concat(board.findAll(Element.HERO_DEAD));
        return result.length > 0;
    };

    board.getBarriers = function() {
        var all = board.getGhosts();
        all = all.concat(board.getWalls());
        all = all.concat(board.getPotions());
        all = all.concat(board.getTreasureBoxes());
        all = all.concat(board.getOtherHeroes());
        all = all.concat(board.getEnemyHeroes());
        all = all.concat(board.getFutureBlasts());
        return board.removeDuplicates(all);
    };

    board.getGhosts = function() {
        return board.findAll(Element.GHOST);
    };

    board.getWalls = function() {
        return board.findAll(Element.WALL);
    };

    board.getTreasureBoxes = function() {
        return board.findAll(Element.TREASURE_BOX);
    };

    board.getPotions = function() {
        var result = [];
        result = result.concat(board.findAll(Element.POTION_TIMER_1));
        result = result.concat(board.findAll(Element.POTION_TIMER_2));
        result = result.concat(board.findAll(Element.POTION_TIMER_3));
        result = result.concat(board.findAll(Element.POTION_TIMER_4));
        result = result.concat(board.findAll(Element.POTION_TIMER_5));
        result = result.concat(board.findAll(Element.HERO_POTION));
        result = result.concat(board.findAll(Element.OTHER_HERO_POTION));
        result = result.concat(board.findAll(Element.ENEMY_HERO_POTION));
        return result;
    };

    board.getPerks = function() {
        var result = [];
        result = result.concat(board.findAll(Element.POTION_BLAST_RADIUS_INCREASE));
        result = result.concat(board.findAll(Element.POTION_COUNT_INCREASE));
        result = result.concat(board.findAll(Element.POTION_REMOTE_CONTROL));
        result = result.concat(board.findAll(Element.POTION_IMMUNE));
        result = result.concat(board.findAll(Element.POISON_THROWER));
        result = result.concat(board.findAll(Element.POTION_EXPLODER));
        return result;
    };

    board.getBlasts = function() {
        return board.findAll(Element.BLAST);
    };

    board.getFutureBlasts = function() {
        var potions = board.getPotions();
        var result = [];
        for (var index in potions) {
            var potion = potions[index];
            result.push(potion);
            result.push(new Point(potion.getX() - 1, potion.getY())); // TODO to remove duplicate
            result.push(new Point(potion.getX() + 1, potion.getY()));
            result.push(new Point(potion.getX()    , potion.getY() - 1));
            result.push(new Point(potion.getX()    , potion.getY() + 1));
        }
        var result2 = [];
        for (var index in result) {
            var blast = result[index];
            if (blast.isOutOf(board.size) || board.contains(board.getWalls(), blast)) {
                continue;
            }
            result2.push(blast);
        }
        return board.removeDuplicates(result2);
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
          "Enemy heroes at: %s\n" +
          "Ghosts at: %s\n" +
          "Treasure boxes at: %s\n" +
          "Potions at: %s\n" +
          "Blasts: %s\n" +
          "Expected blasts at: %s\n" +
          "Perks at: %s",
          board.boardAsString(),
          board.getHero(),
          board.getOtherHeroes(),
          board.getEnemyHeroes(),
          board.getGhosts(),
          board.getTreasureBoxes(),
          board.getPotions(),
          board.getBlasts(),
          board.getFutureBlasts(),
          board.getPerks()
        );
    };

    return board;
};