var Stuff = require('./stuff.js');

var Games = module.exports = {

    gameName : '',

    init : function(game) {
        this.gameName = Stuff.parameter('game', 0, game);
    },

    'require': function(name) {
        name = Stuff.clean(name);

        if (name == 'elements') {
            // case node
            var module = require('../games/' + this.gameName + '/elements.js');
            if (typeof module == 'undefined') {
                // case browser stub
                if (this.gameName == 'mollymage') {
                    module = MollyMageElement;
                } else if (this.gameName == 'clifford') {
                    module = CliffordElement;
                } else if (this.gameName == 'tetris') {
                    module = TetrisElement;
                } else if (this.gameName == 'a2048') {
                    module = A2048Element;
                } else if (this.gameName == 'battlecity') {
                    module = BattlecityElement;
                } else if (this.gameName == 'excitebike') {
                    module = ExcitebikeElement;
                } else if (this.gameName == 'icancode') {
                    module = ICanCodeElement;
                } else if (this.gameName == 'minesweeper') {
                    module = MinesweeperElement;
                } else if (this.gameName == 'snake') {
                    module = SnakeElement;
                } else if (this.gameName == 'snakebattle') {
                    module = SnakeBattleElement;
                }
            }
            // element module can be a function that returns an object or object
            return (typeof module == 'function') ? module() : module;
        } else if (name == 'board') {
            // case node
            var module = require('../games/' + this.gameName + '/board.js');
            if (typeof module == 'undefined') {
                // case browser stub
                if (this.gameName == 'mollymage') {
                    module = MollyMageBoard;
                } else if (this.gameName == 'clifford') {
                    module = CliffordBoard;
                } else if (this.gameName == 'tetris') {
                    module = TetrisBoard;
                } else if (this.gameName == 'a2048') {
                    module = A2048Board;
                } else if (this.gameName == 'battlecity') {
                    module = BattlecityBoard;
                } else if (this.gameName == 'excitebike') {
                    module = ExcitebikeBoard;
                } else if (this.gameName == 'icancode') {
                    module = ICanCodeBoard;
                } else if (this.gameName == 'minesweeper') {
                    module = MinesweeperBoard;
                } else if (this.gameName == 'snake') {
                    module = SnakeBoard;
                } else if (this.gameName == 'snakebattle') {
                    module = SnakeBattleBoard;
                }
            }
            // board module is a function that can parse string board
            return module;
        } else if (name == 'direction') {
            // case node
            var module = require('../games/' + this.gameName + '/direction.js');
            if (typeof module == 'undefined') {
                // case browser stub
                if (this.gameName == 'mollymage') {
                    module = MollyMageDirection;
                } else if (this.gameName == 'clifford') {
                    module = CliffordDirection;
                } else if (this.gameName == 'tetris') {
                    module = TetrisDirection;
                } else if (this.gameName == 'a2048') {
                    module = A2048Direction;
                } else if (this.gameName == 'battlecity') {
                    module = BattlecityDirection;
                } else if (this.gameName == 'excitebike') {
                    module = ExcitebikeDirection;
                } else if (this.gameName == 'icancode') {
                    module = ICanCodeDirection;
                } else if (this.gameName == 'minesweeper') {
                    module = MinesweeperDirection;
                } else if (this.gameName == 'snake') {
                    module = SnakeDirection;
                } else if (this.gameName == 'snakebattle') {
                    module = SnakeBattleDirection;
                }
            }
            // direction module can be a function that returns an object or object
            return (typeof module == 'function') ? module() : module;
        } else if (name == 'test') {
            // case node
            var module = require('../games/' + this.gameName + '/test.js');
            if (typeof module == 'undefined') {
                // case browser stub
                if (this.gameName == 'mollymage') {
                    module = MollyMageTest;
                } else if (this.gameName == 'clifford') {
                    module = CliffordTest;
                } else if (this.gameName == 'tetris') {
                    module = TetrisTest;
                } else if (this.gameName == 'a2048') {
                    module = A2048Test;
                } else if (this.gameName == 'battlecity') {
                    module = BattlecityTest;
                } else if (this.gameName == 'excitebike') {
                    module = ExcitebikeTest;
                } else if (this.gameName == 'icancode') {
                    module = ICanCodeTest;
                } else if (this.gameName == 'minesweeper') {
                    module = MinesweeperTest;
                } else if (this.gameName == 'snake') {
                    module = SnakeTest;
                } else if (this.gameName == 'snakebattle') {
                    module = SnakeBattleTest;
                }
            }
            // test module is a function that will run in tests/test.js
            return module;
        }
    }
};