var Direction = require('./../../direction.js');

var ExcitebikeDirection = module.exports = function() {

    // TODO why we need this?
    var invert = function(dy) {
        return -dy;
    }

    // move hero
    Direction.UP = Direction._init(1, 0, invert(1), 'up');
    Direction.DOWN = Direction._init(2, 0, invert(-1), 'down');
    Direction.STOP = Direction._init(3, 0, 0, '');

    return Direction;
}