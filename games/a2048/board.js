var A2048Board = module.exports = function(board){

    var Board = require('./../../engine/board.js');
    var Games = require('./../../engine/games.js');
    var Point = require('./../../engine/point.js');
    var Stuff = require('./../../engine/stuff.js');
    var Element = Games.require('./elements.js');

    var board = new Board(board);

    board.getBarriers = function() {
        var result = [];
        result = result.concat(board.findAll(Element._x));
        return result;
    }

    board.isBarrierAt = function(x, y) {
        if (new Point(x, y).isOutOf(board.size())) {
            return true;
        }
        return board.isAt(x, y, Element._x);
    }

    board.toString = function() {
        return Stuff.format("Board:\n%s\n" +
            "Barriers at: %s\n",
            board.boardAsString(),
            board.getBarriers()
        );
    }

    return board;
};