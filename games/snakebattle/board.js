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

var SnakebattleBoard = module.exports = function(board){

    var Games = require('./../../engine/games.js');
    var Direction = Games.require('./direction.js');
    var Point = require('./../../engine/point.js');
    var util = require('util');
    var Stuff = require('./../../engine/stuff.js');
    var Element = Games.require('./elements.js');
    var LengthToXY = require('./../../engine/lxy.js');

    var contains = function (a, obj) {
        var i = a.length;
        while (i--) {
            if (a[i].equals(obj)) {
                return true;
            }
        }
        return false;
    };

    var removeDuplicates = function (all) {
        var result = [];
        for (var index in all) {
            var point = all[index];
            if (!contains(result, point)) {
                result.push(point);
            }
        }
        return result;
    };

    var boardSize = function () {
        return Math.sqrt(board.length);
    };

    var size = boardSize();
    var xyl = new LengthToXY(size);

    // TODO:BATTLE исправить метод на аналогичный для snakebattle
    var getHero = function () {
        var result = [];
        result = result.concat(findAll(Element.HERO));
        result = result.concat(findAll(Element.POTION_HERO));
        result = result.concat(findAll(Element.DEAD_HERO));
        return result[0];
    };

    // TODO:BATTLE исправить метод на аналогичный для snakebattle
    var getOtherHeroes = function () {
        var result = [];
        result = result.concat(findAll(Element.OTHER_HERO));
        result = result.concat(findAll(Element.OTHER_POTION_HERO));
        result = result.concat(findAll(Element.OTHER_DEAD_HERO));
        return result;
    };

    // TODO:BATTLE исправить метод на аналогичный для snakebattle
    var isGameOver = function () {
        return board.indexOf(Element.DEAD_HERO) != -1;
    };

    var isAt = function (x, y, element) {
        if (new Point(x, y).isOutOf(size)) {
            return false;
        }
        return getAt(x, y) == element;
    };

    var getAt = function (x, y) {
        if (new Point(x, y).isOutOf(size)) {
            return Element.WALL;
        }
        return board.charAt(xyl.getLength(x, y));
    };

    var boardAsString = function () {
        var result = "";
        for (var i = 0; i < size; i++) {
            result += board.substring(i * size, (i + 1) * size);
            result += "\n";
        }
        return result;
    };

    // TODO:BATTLE исправить метод на аналогичный для snakebattle
    var getBarriers = function () {
        var all = getGhosts();
        all = all.concat(getWalls());
        all = all.concat(getPotions());
        all = all.concat(getTreasureBoxes());
        all = all.concat(getOtherHeroes());
        all = all.concat(getFutureBlasts());
        return removeDuplicates(all);
    };

    // TODO:BATTLE исправить метод на аналогичный для snakebattle
    var toString = function () {
        return util.format("%s\n" +
            "Hero at: %s\n" +
            "Other heroes at: %s\n" +
            "Ghosts at: %s\n" +
            "Treasure Boxes at: %s\n" +
            "Potions at: %s\n" +
            "Blasts: %s\n" +
            "Expected blasts at: %s",
            boardAsString(),
            getHero(),
            Stuff.printArray(getOtherHeroes()),
            Stuff.printArray(getGhosts()),
            Stuff.printArray(getTreasureBoxes()),
            Stuff.printArray(getPotions()),
            Stuff.printArray(getBlasts()),
            Stuff.printArray(getFutureBlasts()));
    };

    // TODO:BATTLE исправить метод на аналогичный для snakebattle
    var getGhosts = function () {
        return findAll(Element.GHOST);
    };

    var findAll = function (element) {
        var result = [];
        for (var i = 0; i < size * size; i++) {
            var point = xyl.getXY(i);
            if (isAt(point.getX(), point.getY(), element)) {
                result.push(point);
            }
        }
        return result;
    };

    // TODO:BATTLE исправить метод на аналогичный для snakebattle
    var getWalls = function () {
        return findAll(Element.WALL);
    };

    // TODO:BATTLE исправить метод на аналогичный для snakebattle
    var getTreasureBoxes = function () {
        return findAll(Element.TREASURE_BOX);
    };

    // TODO:BATTLE исправить метод на аналогичный для snakebattle
    var getPotions = function () {
        var result = [];
        result = result.concat(findAll(Element.POTION_TIMER_1));
        result = result.concat(findAll(Element.POTION_TIMER_2));
        result = result.concat(findAll(Element.POTION_TIMER_3));
        result = result.concat(findAll(Element.POTION_TIMER_4));
        result = result.concat(findAll(Element.POTION_TIMER_5));
        result = result.concat(findAll(Element.POTION_HERO));
        result = result.concat(findAll(Element.OTHER_POTION_HERO));
        return result;
    };

    // TODO:BATTLE исправить метод на аналогичный для snakebattle
    var getBlasts = function () {
        return findAll(Element.BOOM);
    };

    // TODO:BATTLE исправить метод на аналогичный для snakebattle
    var getFutureBlasts = function () {
        var potions = getPotions();
        var result = [];
        for (var index in potions) {
            var potion = potions[index];
            result.push(potion);
            result.push(new Point(potion.getX() - 1, potion.getY())); // TODO to remove duplicate
            result.push(new Point(potion.getX() + 1, potion.getY()));
            result.push(new Point(potion.getX(), potion.getY() - 1));
            result.push(new Point(potion.getX(), potion.getY() + 1));
        }
        var result2 = [];
        for (var index in result) {
            var blast = result[index];
            if (blast.isOutOf(size) || contains(getWalls(), blast)) {
                continue;
            }
            result2.push(blast);
        }
        return removeDuplicates(result2);
    };

    var isAnyOfAt = function (x, y, elements) {
        for (var index in elements) {
            var element = elements[index];
            if (isAt(x, y, element)) {
                return true;
            }
        }
        return false;
    };

    var isNear = function (x, y, element) {
        if (new Point(x, y).isOutOf(size)) {
            return false;
        }
        return isAt(x + 1, y, element) || // TODO to remove duplicate
            isAt(x - 1, y, element) ||
            isAt(x, y + 1, element) ||
            isAt(x, y - 1, element);
    };

    var isBarrierAt = function (x, y) {
        if (new Point(x, y).isOutOf(size)) {
            return true;
        }

        return contains(getBarriers(), new Point(x, y));
    };

    var countNear = function (x, y, element) {
        if (new Point(x, y).isOutOf(size)) {
            return 0;
        }
        var count = 0;
        if (isAt(x - 1, y, element)) count++; // TODO to remove duplicate
        if (isAt(x + 1, y, element)) count++;
        if (isAt(x, y - 1, element)) count++;
        if (isAt(x, y + 1, element)) count++;
        return count;
    };

    // TODO:BATTLE исправить метод на аналогичный для snakebattle
    return {
        size: boardSize,
        getHero: getHero,
        getOtherHeroes: getOtherHeroes,
        isGameOver: isGameOver,
        isAt: isAt,
        boardAsString: boardAsString,
        getBarriers: getBarriers,
        toString: toString,
        getGhosts: getGhosts,
        findAll: findAll,
        getWalls: getWalls,
        getTreasureBoxes: getTreasureBoxes,
        getPotions: getPotions,
        getBlasts: getBlasts,
        getFutureBlasts: getFutureBlasts,
        isAnyOfAt: isAnyOfAt,
        isNear: isNear,
        isBarrierAt: isBarrierAt,
        countNear: countNear,
        getAt: getAt
    };
};