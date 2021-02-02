var SnakeBattleDirection = module.exports = function() {

    var Direction = require('./../../direction.js');

    // move numbers
    Direction.LEFT = Direction._init(1, -1, 0, 'left');
    Direction.RIGHT = Direction._init(2, 1, 0, 'right');
    Direction.UP = Direction._init(3, 0, 1, 'up');
    Direction.DOWN = Direction._init(4, 0, -1, 'down');

    return Direction;
}