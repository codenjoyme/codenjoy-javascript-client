var TetrisDirection = module.exports = function() {

    var Direction = require('./../../direction.js');

    // move figure
    Direction.LEFT = Direction._init(1, -1, 0, 'left');
    Direction.RIGHT = Direction._init(2, 1, 0, 'right');

    // drop figure
    Direction.DOWN = Direction._init(3, 0, -1, 'down');

    // Rotation of the figure clockwise by 90 degree
    Direction.ACT = Direction._init(4, 0, 0, 'act');

    // Rotation of the figure clockwise by 180 degree
    Direction.ACT2 = Direction._init(5, 0, 0, 'act(2)');

    // Rotation of the figure counterclockwise by 90 degree
    Direction.ACT3 = Direction._init(6, 0, 0, 'act(3)');

    // Reset the glass (as in case of overflow of the glass, points will be removed)
    Direction.RESET = Direction._init(7, 0, 0, 'act(0,0)');

    return Direction;
}