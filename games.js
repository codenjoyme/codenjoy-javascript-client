var Games = {

    gameName : '',

    'require': function(module) {
        if (module == 'elements') {
            if (this.gameName == 'bomberman') {
                return Element = BombermanElement;
            } else if (this.gameName == 'tetris') {
                return Element = TetrisElement;
            }
        } else if (module == 'board') {
            if (this.gameName == 'bomberman') {
                return Board = BombermanBoard;
            } else if (this.gameName == 'tetris') {
                return Board = TetrisBoard;
            }
        }
    }
};