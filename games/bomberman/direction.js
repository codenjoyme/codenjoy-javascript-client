var Direction = require('./../../direction.js');

var BombermanDirection = module.exports = function() {

    // TODO why we need this?
    var invert = function(dy) {
        return -dy;
    }

    // move bomberman
    Direction.LEFT = Direction._init(1, -1, 0, 'left');
    Direction.RIGHT = Direction._init(2, 1, 0, 'right');
    Direction.UP = Direction._init(3, 0, invert(-1), 'up');
    Direction.DOWN = Direction._init(4, 0, invert(1), 'down');

    // drop the bomb
    Direction.ACT = Direction._init(5, 0, 0, 'act');

    return Direction;
}