var MollyMageBoard = module.exports = function(board){

    var Games = require('./../../games.js');
    var Direction = Games.require('./direction.js');
    var Point = require('./../../point.js');
    var util = require('util');
    var Stuff = require('./../../stuff.js');
    var Element = Games.require('./elements.js');
    var LengthToXY = require('./../../lxy.js');

    var contains = function(a, obj) {
        var i = a.length;
        while (i--) {
            if (a[i].equals(obj)) {
                return true;
            }
        }
        return false;
    };

    var removeDuplicates = function(all) {
        var result = [];
        for (var index in all) {
            var point = all[index];
            if (!contains(result, point)) {
                result.push(point);
            }
        }
        return result;
    };

    var boardSize = function() {
        return Math.sqrt(board.length);
    };

    var size = boardSize();
    var xyl = new LengthToXY(size);

    var getHero = function() {
        var result = [];
        result = result.concat(findAll(Element.HERO));
        result = result.concat(findAll(Element.POTION_HERO));
        result = result.concat(findAll(Element.DEAD_HERO));
        return result[0];
    };

    var getOtherHeroes = function() {
        var result = [];
        result = result.concat(findAll(Element.OTHER_HERO));
        result = result.concat(findAll(Element.OTHER_POTION_HERO));
        result = result.concat(findAll(Element.OTHER_DEAD_HERO));
        return result;
    };

    var isMyHeronDead = function() {
        return board.indexOf(Element.DEAD_HERO) != -1;
    };

    var isAt = function(x, y, element) {
        if (new Point(x, y).isOutOf(size)) {
            return false;
        }
        return getAt(x, y) == element;
    };

    var getAt = function(x, y) {
        if (new Point(x, y).isOutOf(size)) {
            return Element.WALL;
        }
        return board.charAt(xyl.getLength(x, y));
    };

    var boardAsString = function() {
        var result = "";
        for (var i = 0; i < size; i++) {
            result += board.substring(i * size, (i + 1) * size);
            result += "\n";
        }
        return result;
    };

    var getBarriers = function() {
        var all = getGhosts();
        all = all.concat(getWalls());
        all = all.concat(getPotions());
        all = all.concat(getTreasureBoxes());
        all = all.concat(getOtherHeroes());
        all = all.concat(getFutureBlasts());
        return removeDuplicates(all);
    };

    var toString = function() {
        return util.format("%s\n" +
            "Hero at: %s\n" +
            "Other heroes at: %s\n" +
            "Ghosts at: %s\n" +
            "Treasure boxes at: %s\n" +
            "Potions at: %s\n" +
            "Blasts: %s\n" +
            "Expected blasts at: %s\n" +
            "Perks at: %s",
            boardAsString(),
            getHero(),
            Stuff.printArray(getOtherHeroes()),
            Stuff.printArray(getGhosts()),
            Stuff.printArray(getTreasureBoxes()),
            Stuff.printArray(getPotions()),
            Stuff.printArray(getBlasts()),
            Stuff.printArray(getFutureBlasts()),
            Stuff.printArray(getPerks())
        );
    };

    var getGhosts = function() {
        return findAll(Element.GHOST);
    };

    var findAll = function(element) {
        var result = [];
        for (var i = 0; i < size*size; i++) {
            var point = xyl.getXY(i);
            if (isAt(point.getX(), point.getY(), element)) {
                result.push(point);
            }
        }
        return result;
    };

    var getWalls = function() {
        return findAll(Element.WALL);
    };

    var getTreasureBoxes = function() {
        return findAll(Element.TREASURE_BOX);
    };

    var getPotions = function() {
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

    var getPerks = function() {
        var result = [];
        result = result.concat(findAll(Element.POTION_BLAST_RADIUS_INCREASE));
        result = result.concat(findAll(Element.POTION_COUNT_INCREASE));
        result = result.concat(findAll(Element.POTION_REMOTE_CONTROL));
        result = result.concat(findAll(Element.POTION_IMMUNE));
        return result;
    }

    var getBlasts = function() {
        return findAll(Element.BOOM);
    };

    var getFutureBlasts = function() {
        var potions = getPotions();
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
            if (blast.isOutOf(size) || contains(getWalls(), blast)) {
                continue;
            }
            result2.push(blast);
        }
        return removeDuplicates(result2);
    };

    var isAnyOfAt = function(x, y, elements) {
        for (var index in elements) {
            var element = elements[index];
            if (isAt(x, y,element)) {
                return true;
            }
        }
        return false;
    };

    var isNear = function(x, y, element) {
        if (new Point(x, y).isOutOf(size)) {
            return false;
        }
        return isAt(x + 1, y, element) || // TODO to remove duplicate
            isAt(x - 1, y, element) ||
            isAt(x, y + 1, element) ||
            isAt(x, y - 1, element);
    };

    var isBarrierAt = function(x, y) {
        return contains(getBarriers(), new Point(x, y));
    };

    var countNear = function(x, y, element) {
        if (new Point(x, y).isOutOf(size)) {
            return 0;
        }
        var count = 0;
        if (isAt(x - 1, y    , element)) count ++; // TODO to remove duplicate
        if (isAt(x + 1, y    , element)) count ++;
        if (isAt(x    , y - 1, element)) count ++;
        if (isAt(x    , y + 1, element)) count ++;
        return count;
    };

    return {
        size : boardSize,
        getHero : getHero,
        getOtherHeroes : getOtherHeroes,
        isMyHeroDead : isMyHeroDead,
        isAt : isAt,
        boardAsString : boardAsString,
        getBarriers : getBarriers,
        toString : toString,
        getGhosts : getGhosts,
        findAll : findAll,
        getWalls : getWalls,
        getTreasureBoxes : getTreasureBoxes,
        getPotions : getPotions,
        getBlasts : getBlasts,
        getFutureBlasts : getFutureBlasts,
        isAnyOfAt : isAnyOfAt,
        isNear : isNear,
        isBarrierAt : isBarrierAt,
        countNear : countNear,
        getAt : getAt,
        getPerks: getPerks
    };
};