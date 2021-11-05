var SampleBoard = module.exports = function(board){

    var Games = require('./../../engine/games.js');
    var Direction = Games.require('./engine/direction.js');
    var Point = require('./../../engine/point.js');
    var util = require('util');
    var Stuff = require('./../../engine/stuff.js');
    var Element = Games.require('./elements.js');
    var LengthToXY = require('./../../engine/lxy.js');

    var contains = function(a, obj) {
        var i = a.length;
        while (i--) {
            if (a[i].equals(obj)) {
                return true;
            }
        }
        return false;
    };

    var boardSize = function() {
        return Math.sqrt(board.length);
    };

    var size = boardSize();
    var xyl = new LengthToXY(size);

    var boardAsString = function() {
        var result = "";
        for (var i = 0; i < size; i++) {
            result += board.substring(i * size, (i + 1) * size);
            result += "\n";
        }
        return result;
    };


    var toString = function() {
        return util.format("%s\n" +
            boardAsString()
        );
    };

    var isBarrierAt = function(x, y) {
        return contains(getBarriers(), new Point(x, y));
    };


    return {
        size : boardSize,
        boardAsString : boardAsString,
        toString : toString,
        isBarrierAt : isBarrierAt
    };
};