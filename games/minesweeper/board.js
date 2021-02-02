var MinesweeperBoard = module.exports = function(board){

    var Games = require('./../../games.js');
    var Direction = Games.require('./direction.js');
    var Point = require('./../../point.js');
    var util = require('util');
    var Stuff = require('./../../stuff.js');
    var Element = Games.require('./elements.js');
    var LengthToXY = require('./../../lxy.js');

    var contains = function (a, obj) {
        var i = a.length;
        while (i--) {
            if (a[i].equals(obj)) {
                return true;
            }
        }
        return false;
    };

    var isAt = function (x, y, element) {
        if (pt(x, y).isOutOf(size)) {
            return false;
        }
        for(var i = 2; i < arguments.length ; i++)
            if(getAt(x,y) == arguments[i]) return true;
         return false;
    };

    var getAt = function (x, y) {
        if (pt(x, y).isOutOf(size)) {
            return Element.BORDER;
        }
        return board.charAt(xyl.getLength(x, y));
    };


    var isNear = function (x, y, element) {
        if (pt(x, y).isOutOf(size)) {
            return false;
        }
        return isAt(x + 1, y, element) ||
            isAt(x - 1, y, element) ||
            isAt(x, y + 1, element) ||
            isAt(x, y - 1, element);
    };

    var boardSize = function () {
        return Math.sqrt(board.length);
    };

    var size = boardSize();
    var xyl = new LengthToXY(size);


    var isBarrierAt = function (x, y) {
        return isAt(x, y, Element.BORDER);
    };

    var getMe = function () {
        return findAll(Element.BANG, Element.DETECTOR)[0];
    };

    var isGameOver = function () {
        return findAll(Element.BANG).length != 0;
    };

    var findAll = function (element) {
        var result = [];
        for (var i = 0; i < size * size; i++) {
            var point = xyl.getXY(i);
            var elements = [point.getX(), point.getY()];
            elements.push.apply(elements, arguments);
            if (isAt.apply(null, elements)) {
                result.push(point);
            }
        }
        return result;
    };

    var findAllExtended = function () {
        var result = [];
        for (var i = 0; i < size * size; i++) {
            var point = xyl.getXYExtended(i, board.charAt(i));
            result.push(point);
        }
        return result;
    };


    var getBorders = function () {
        return findAll(Element.BORDER);
    };

    var boardAsString = function() {
        var result = "";
        for (var i = 0; i < size; i++) {
            result += board.substring(i * size, (i + 1) * size);
            result += "\n";
        }
        return result;
    };

    return {
        size: boardSize,
        get: findAll,
        getAllExtended: findAllExtended,
        isAt: isAt,
        getAt: getAt,
        getBarriers: getBorders,
        boardAsString: boardAsString,
        getWalls: getBorders,
        isNear: isNear,
        getMe: getMe,
        isGameOver: isGameOver,
        isBarrierAt: isBarrierAt,
        toString: boardAsString
    }
};
