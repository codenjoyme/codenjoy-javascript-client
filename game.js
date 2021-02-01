var Game = {
    'require': function(module) {
        if (module == 'elements') {
            if (gameName == 'bomberman') {
                return Element = BombermanElement;
            } else if (gameName == 'tetris') {
                return Element = TetrisElement;
            }
        } else if (module == 'board') {
            if (gameName == 'bomberman') {
                return Board = BombermanBoard;
            } else if (gameName == 'tetris') {
                return Board = TetrisBoard;
            }
        }
    }
};