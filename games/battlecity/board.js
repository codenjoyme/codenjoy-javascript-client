var BattlecityBoard = module.exports = function(board){

    var Board = require('./../../engine/board.js');
    var Games = require('./../../engine/games.js');
    var Point = require('./../../engine/point.js');
    var Stuff = require('./../../engine/stuff.js');
    var Element = Games.require('./elements.js');

    var board = new Board(board);

    board.getMe = function() {
        var result = [];
        result = result.concat(board.findAll(Element.TANK_UP));
        result = result.concat(board.findAll(Element.TANK_DOWN));
        result = result.concat(board.findAll(Element.TANK_LEFT));
        result = result.concat(board.findAll(Element.TANK_RIGHT));
        if (result.lenght == 0) {
            return null;
        }
        return result[0];
    }

    board.isGameOver = function() {
        return board.getMe() == null;
    }

    board.getEnemies = function() {
        var result = [];
        result = result.concat(board.findAll(Element.AI_TANK_UP));
        result = result.concat(board.findAll(Element.AI_TANK_DOWN));
        result = result.concat(board.findAll(Element.AI_TANK_LEFT));
        result = result.concat(board.findAll(Element.AI_TANK_RIGHT));
        result = result.concat(board.findAll(Element.OTHER_TANK_UP));
        result = result.concat(board.findAll(Element.OTHER_TANK_DOWN));
        result = result.concat(board.findAll(Element.OTHER_TANK_LEFT));
        result = result.concat(board.findAll(Element.OTHER_TANK_RIGHT));
        return result;
    }

    board.getBullets = function() {
        var result = [];
        result = result.concat(board.findAll(Element.BULLET));
        return result;
    }

    board.isBulletAt = function(x, y) {
        return board.isAt(x, y, Element.BULLET);
    }

    board.getBarriers = function() {
        var result = [];
        result = result.concat(board.findAll(Element.BATTLE_WALL));
        result = result.concat(board.findAll(Element.WALL));
        result = result.concat(board.findAll(Element.WALL_DESTROYED_DOWN));
        result = result.concat(board.findAll(Element.WALL_DESTROYED_UP));
        result = result.concat(board.findAll(Element.WALL_DESTROYED_LEFT));
        result = result.concat(board.findAll(Element.WALL_DESTROYED_RIGHT));
        result = result.concat(board.findAll(Element.WALL_DESTROYED_DOWN_TWICE));
        result = result.concat(board.findAll(Element.WALL_DESTROYED_UP_TWICE));
        result = result.concat(board.findAll(Element.WALL_DESTROYED_LEFT_TWICE));
        result = result.concat(board.findAll(Element.WALL_DESTROYED_RIGHT_TWICE));
        result = result.concat(board.findAll(Element.WALL_DESTROYED_LEFT_RIGHT));
        result = result.concat(board.findAll(Element.WALL_DESTROYED_UP_DOWN));
        result = result.concat(board.findAll(Element.WALL_DESTROYED_UP_LEFT));
        result = result.concat(board.findAll(Element.WALL_DESTROYED_RIGHT_UP));
        result = result.concat(board.findAll(Element.WALL_DESTROYED_DOWN_LEFT));
        result = result.concat(board.findAll(Element.WALL_DESTROYED_DOWN_RIGHT));
        return board.sort(result);
    }

    board.isBarrierAt = function(x, y) {
        if (new Point(x, y).isOutOf(board.size())) {
            return true;
        }

        return board.contains(board.getBarriers(), new Point(x, y));
    }

    board.toString = function() {
        return Stuff.format("Board:\n%s\n" +
            "My tank at: %s\n" +
            "Enemies at: %s\n" +
            "Bulets at: %s\n",
            board.boardAsString(),
            board.getMe(),
            board.getEnemies(),
            board.getBullets()
        );
    }

    return board;
}