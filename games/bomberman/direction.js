var BombermanDirection = function() {
    // move bomberman
    Direction.LEFT = D(1, -1, 0, 'left');
    Direction.RIGHT = D(2, 1, 0, 'right');
    Direction.UP = D(3, 0, 1, 'up');
    Direction.DOWN = D(4, 0, -1, 'down');

    // drop the bomb
    Direction.ACT = D(5, 0, 0, 'act');
}