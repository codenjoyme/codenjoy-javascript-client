var TetrisDirection = function() {
    // move figure
    Direction.LEFT = D(1, -1, 0, 'left');
    Direction.RIGHT = D(2, 1, 0, 'right');

    // drop figure
    Direction.DOWN = D(3, 0, -1, 'down');

    // Rotation of the figure clockwise by 90 degree
    Direction.ACT = D(4, 0, 0, 'act');

    // Rotation of the figure clockwise by 180 degree
    Direction.ACT2 = D(5, 0, 0, 'act(2)');

    // Rotation of the figure counterclockwise by 90 degree
    Direction.ACT3 = D(6, 0, 0, 'act(3)');

    // Reset the glass (as in case of overflow of the glass, points will be removed)
    Direction.RESET = D(7, 0, 0, 'act(0,0)');
}