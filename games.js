var Stuff = require('./stuff.js');

var Games = module.exports = {

    gameName : '',

    init : function(name) {
        this.gameName = name;
    },

    'require': function(name) {
        name = Stuff.clean(name);

        if (name == 'elements') {
            // case node
            var module = require('./games/' + this.gameName + '/elements.js');
            if (typeof module != 'undefined') {
                return Element = module;
            }

            // case browser stub
            if (this.gameName == 'bomberman') {
                return Element = BombermanElement;
            } else if (this.gameName == 'tetris') {
                return Element = TetrisElement;
            }
        } else if (name == 'board') {
            // case node
            var module = require('./games/' + this.gameName + '/board.js');
            if (typeof module != 'undefined') {
                return Board = module;
            }

            // case browser stub
            if (this.gameName == 'bomberman') {
                return Board = BombermanBoard;
            } else if (this.gameName == 'tetris') {
                return Board = TetrisBoard;
            }
        } else if (name == 'direction') {
            // case node
            var module = require('./games/' + this.gameName + '/direction.js');
            if (typeof module != 'undefined') {
                return module();
            }

            // case browser stub
            if (this.gameName == 'bomberman') {
                BombermanDirection();
            } else if (this.gameName == 'tetris') {
                TetrisDirection();
            }
            return Direction;
        }
    }
};