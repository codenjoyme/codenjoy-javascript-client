var A2048Board = module.exports = function(board){

    var Games = require('./../../games.js');
    var Direction = Games.require('./direction.js');
    var Point = require('./../../point.js');
    var util = require('util');
    var Stuff = require('./../../stuff.js');
    var Element = Games.require('./elements.js');
    var LengthToXY = require('./../../lxy.js');

    var contains  = function(a, obj) {
        var i = a.length;
        while (i--) {
            if (a[i].equals(obj)) {
                return true;
            }
        }
        return false;
    };

    var sort = function(all) {
        return all.sort(function(pt1, pt2) {
            return (pt1.getY()*1000 + pt1.getX()) -
                (pt2.getY()*1000 + pt2.getX());
        });
    }

    var removeDuplicates = function(all) {
        var result = [];
        for (var index in all) {
            var point = all[index];
            if (!contains(result, point)) {
                result.push(point);
            }
        }
        return sort(result);
    };

    var boardSize = function() {
        return Math.sqrt(board.length);
    };

    var size = boardSize();
    var xyl = new LengthToXY(size);

    var getBarriers = function() {
        var result = [];
        result = result.concat(findAll(Element._x));
        return result;
    }

    var isBarrierAt = function(x, y) {
        if (new Point(x, y).isOutOf(size)) {
            return true;
        }

        return getAt(x, y) == Element._x;
    }

    var isAt = function(x, y, element) {
        if (new Point(x, y).isOutOf(size)) {
            return false;
        }
        return getAt(x, y) == element;
    };

    var getAt = function(x, y) {
        if (new Point(x, y).isOutOf(size)) {
            return Element.BATTLE_WALL;
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

    var toString = function() {
        return util.format("Board:\n%s\n" +
            "Barriers at: %s\n",
            boardAsString(),
            Stuff.printArray(getBarriers())
        );
    };

    var findAll = function(element) {
        var result = [];
        for (var i = 0; i < size*size; i++) {
            var point = xyl.getXY(i);
            if (isAt(point.getX(), point.getY(), element)) {
                result.push(point);
            }
        }
        return sort(result);
    };

    var isAnyOfAt = function(x, y, elements) {
        if (new Point(x, y).isOutOf(size)) {
            return false;
        }
        for (var index in elements) {
            var element = elements[index];
            if (isAt(x, y, element)) {
                return true;
            }
        }
        return false;
    };

    var getNear = function(x, y) {
        var result = [];
        for (var dx = -1; dx <= 1; dx++) {
            for (var dy = -1; dy <= 1; dy++) {
                if (dx == 0 && dy == 0) continue;
                result.push(getAt(x + dx, y + dy));
            }
        }
        return result;
    };

    var isNear = function(x, y, element) {
        return getNear(x, y).includes(element);
    };

    var countNear = function(x, y, element) {
        return getNear(x, y)
            .filter(function(value) { return value === element })
            .length;
    };

    return {
        size : boardSize,
        getBarriers : getBarriers,
        isAt : isAt,
        boardAsString : boardAsString,
        toString : toString,
        findAll : findAll,
        isAnyOfAt : isAnyOfAt,
        getNear : getNear,
        isNear : isNear,
        countNear : countNear,
        isBarrierAt : isBarrierAt,
        getBarriers : getBarriers,
        getAt : getAt
    };
};