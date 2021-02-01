var Games = require('./../../games.js');
var Direction = Games.require('./direction.js');
var Point = require('./../../point.js');
var util = require('util');
var Stuff = require('./../../stuff.js');
var Element = Games.require('./elements.js');
var LengthToXY = require('./../../lxy.js');

var BombermanBoard = module.exports = function(board){

    var contains  = function(a, obj) {
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

    var getBomberman = function() {
        var result = [];
        result = result.concat(findAll(Element.BOMBERMAN));
        result = result.concat(findAll(Element.BOMB_BOMBERMAN));
        result = result.concat(findAll(Element.DEAD_BOMBERMAN));
        return result[0];
    };

    var getOtherBombermans = function() {
        var result = [];
        result = result.concat(findAll(Element.OTHER_BOMBERMAN));
        result = result.concat(findAll(Element.OTHER_BOMB_BOMBERMAN));
        result = result.concat(findAll(Element.OTHER_DEAD_BOMBERMAN));
        return result;
    };

    var isMyBombermanDead = function() {
        return board.indexOf(Element.DEAD_BOMBERMAN) != -1;
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
        var all = getMeatChoppers();
        all = all.concat(getWalls());
        all = all.concat(getBombs());
        all = all.concat(getDestroyWalls());
        all = all.concat(getOtherBombermans());
        all = all.concat(getFutureBlasts());
        return removeDuplicates(all);
    };

    var toString = function() {
        return util.format("%s\n" +
            "Bomberman at: %s\n" +
            "Other bombermans at: %s\n" +
            "Meat choppers at: %s\n" +
            "Destroy walls at: %s\n" +
            "Bombs at: %s\n" +
            "Blasts: %s\n" +
            "Expected blasts at: %s\n" +
            "Perks at: %s",
            boardAsString(),
            getBomberman(),
            Stuff.printArray(getOtherBombermans()),
            Stuff.printArray(getMeatChoppers()),
            Stuff.printArray(getDestroyWalls()),
            Stuff.printArray(getBombs()),
            Stuff.printArray(getBlasts()),
            Stuff.printArray(getFutureBlasts()),
            Stuff.printArray(getPerks())
        );
    };

    var getMeatChoppers = function() {
        return findAll(Element.MEAT_CHOPPER);
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

    var getDestroyWalls = function() {
        return findAll(Element.DESTROYABLE_WALL);
    };

    var getBombs = function() {
        var result = [];
        result = result.concat(findAll(Element.BOMB_TIMER_1));
        result = result.concat(findAll(Element.BOMB_TIMER_2));
        result = result.concat(findAll(Element.BOMB_TIMER_3));
        result = result.concat(findAll(Element.BOMB_TIMER_4));
        result = result.concat(findAll(Element.BOMB_TIMER_5));
        result = result.concat(findAll(Element.BOMB_BOMBERMAN));
        result = result.concat(findAll(Element.OTHER_BOMB_BOMBERMAN));
        return result;
    };

    var getPerks = function() {
        var result = [];
        result = result.concat(findAll(Element.BOMB_BLAST_RADIUS_INCREASE));
        result = result.concat(findAll(Element.BOMB_COUNT_INCREASE));
        result = result.concat(findAll(Element.BOMB_REMOTE_CONTROL));
        result = result.concat(findAll(Element.BOMB_IMMUNE));
        return result;
    }

    var getBlasts = function() {
        return findAll(Element.BOOM);
    };

    var getFutureBlasts = function() {
        var bombs = getBombs();
        var result = [];
        for (var index in bombs) {
            var bomb = bombs[index];
            result.push(bomb);
            result.push(new Point(bomb.getX() - 1, bomb.getY())); // TODO to remove duplicate
            result.push(new Point(bomb.getX() + 1, bomb.getY()));
            result.push(new Point(bomb.getX()    , bomb.getY() - 1));
            result.push(new Point(bomb.getX()    , bomb.getY() + 1));
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
        getBomberman : getBomberman,
        getOtherBombermans : getOtherBombermans,
        isMyBombermanDead : isMyBombermanDead,
        isAt : isAt,
        boardAsString : boardAsString,
        getBarriers : getBarriers,
        toString : toString,
        getMeatChoppers : getMeatChoppers,
        findAll : findAll,
        getWalls : getWalls,
        getDestroyWalls : getDestroyWalls,
        getBombs : getBombs,
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