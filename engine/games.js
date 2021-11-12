/*-
 * #%L
 * Codenjoy - it's a dojo-like platform from developers to developers.
 * %%
 * Copyright (C) 2021 Codenjoy
 * %%
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public
 * License along with this program.  If not, see
 * <http://www.gnu.org/licenses/gpl-3.0.html>.
 * #L%
 */

var Stuff = require('./stuff.js');

var Games = module.exports = {

    games: {
        mollyMage: 'mollymage',
        clifford: 'clifford',
        tetris: 'tetris',
        '2048': 'a2048',
        battleCity: 'battlecity',
        excitebike: 'excitebike',
        iCanCode: 'icancode',
        minesweeper: 'minesweeper',
        sample: 'sample',
        snake: 'snake',
        snakeBattle: 'snakebattle',
    },

    gameName : '',

    init : function() {
        this.gameName = Stuff.parameter('game', 0);
    },

    initForTest: function (game) {
        this.gameName = game;
    },

    'require': function(name) {
        name = Stuff.clean(name);

        if (name === 'elements') {
            // case node
            var module = require('../games/' + this.gameName + '/elements.js');
            if (typeof module == 'undefined') {
                // case browser stub
                if (this.gameName === this.games.mollyMage) {
                    module = MollyMageElement;
                } else if (this.gameName === this.games.clifford) {
                    module = CliffordElement;
                } else if (this.gameName === this.games.tetris) {
                    module = TetrisElement;
                } else if (this.gameName === this.games["2048"]) {
                    module = A2048Element;
                } else if (this.gameName === this.games.battleCity) {
                    module = BattleCityElement;
                } else if (this.gameName === this.games.excitebike) {
                    module = ExcitebikeElement;
                } else if (this.gameName === this.games.iCanCode) {
                    module = ICanCodeElement;
                } else if (this.gameName === this.games.minesweeper) {
                    module = MinesweeperElement;
                } else if (this.gameName === this.games.sample) {
                    module = SampleElement;
                } else if (this.gameName === this.games.snake) {
                    module = SnakeElement;
                } else if (this.gameName === this.games.snakeBattle) {
                    module = SnakeBattleElement;
                }
            }
            // element module can be a function that returns an object or object
            return (typeof module == 'function') ? module() : module;
        } else if (name === 'board') {
            // case node
            var module = require('../games/' + this.gameName + '/board.js');
            if (typeof module == 'undefined') {
                // case browser stub
                if (this.gameName === this.games.mollyMage) {
                    module = MollyMageBoard;
                } else if (this.gameName === this.games.clifford) {
                    module = CliffordBoard;
                } else if (this.gameName === this.games.tetris) {
                    module = TetrisBoard;
                } else if (this.gameName === this.games["2048"]) {
                    module = A2048Board;
                } else if (this.gameName === this.games.battleCity) {
                    module = BattleCityBoard;
                } else if (this.gameName === this.games.excitebike) {
                    module = ExcitebikeBoard;
                } else if (this.gameName === this.games.iCanCode) {
                    module = ICanCodeBoard;
                } else if (this.gameName === this.games.minesweeper) {
                    module = MinesweeperBoard;
                } else if (this.gameName === this.games.sample) {
                    module = SampleBoard;
                } else if (this.gameName === this.games.snake) {
                    module = SnakeBoard;
                } else if (this.gameName === this.games.snakeBattle) {
                    module = SnakeBattleBoard;
                }
            }
            // board module is a function that can parse string board
            return module;
        } else if (name === 'direction') {
            // case node
            var module = require('../games/' + this.gameName + '/direction.js');
            if (typeof module == 'undefined') {
                // case browser stub
                if (this.gameName === this.games.mollyMage) {
                    module = MollyMageDirection;
                } else if (this.gameName === this.games.clifford) {
                    module = CliffordDirection;
                } else if (this.gameName === this.games.tetris) {
                    module = TetrisDirection;
                } else if (this.gameName === this.games["2048"]) {
                    module = A2048Direction;
                } else if (this.gameName === this.games.battleCity) {
                    module = BattleCityDirection;
                } else if (this.gameName === this.games.excitebike) {
                    module = ExcitebikeDirection;
                } else if (this.gameName === this.games.iCanCode) {
                    module = ICanCodeDirection;
                } else if (this.gameName === this.games.minesweeper) {
                    module = MinesweeperDirection;
                } else if (this.gameName === this.games.sample) {
                    module = SampleDirection;
                } else if (this.gameName === this.games.snake) {
                    module = SnakeDirection;
                } else if (this.gameName === this.games.snakeBattle) {
                    module = SnakeBattleDirection;
                }
            }
            // direction module can be a function that returns an object or object
            return (typeof module == 'function') ? module() : module;
        } else if (name === 'test') {
            // case node
            var module = require('../games/' + this.gameName + '/test.js');
            if (typeof module == 'undefined') {
                // case browser stub
                if (this.gameName === this.games.mollyMage) {
                    module = MollyMageTest;
                } else if (this.gameName === this.games.clifford) {
                    module = CliffordTest;
                } else if (this.gameName === this.games.tetris) {
                    module = TetrisTest;
                } else if (this.gameName === this.games["2048"]) {
                    module = A2048Test;
                } else if (this.gameName === this.games.battleCity) {
                    module = BattleCityTest;
                } else if (this.gameName === this.games.excitebike) {
                    module = ExcitebikeTest;
                } else if (this.gameName === this.games.iCanCode) {
                    module = ICanCodeTest;
                } else if (this.gameName === this.games.minesweeper) {
                    module = MinesweeperTest;
                } else if (this.gameName === this.games.sample) {
                    module = SampleTest;
                } else if (this.gameName === this.games.snake) {
                    module = SnakeTest;
                } else if (this.gameName === this.games.snakeBattle) {
                    module = SnakeBattleTest;
                }
            }
            // test module is a function that will run in tests/test.js
            return module;
        } else if (name === 'solver') {
            // case node
            var module = require('../games/' + this.gameName + '/solver.js');
            if (typeof module == 'undefined') {
                // case browser stub
                if (this.gameName === this.games.mollyMage) {
                    module = MollyMageSolver;
                } else if (this.gameName === this.games.clifford) {
                    module = CliffordSolver;
                } else if (this.gameName === this.games.tetris) {
                    module = TetrisSolver;
                } else if (this.gameName === this.games["2048"]) {
                    module = A2048Solver;
                } else if (this.gameName === this.games.battleCity) {
                    module = BattleCitySolver;
                } else if (this.gameName === this.games.excitebike) {
                    module = ExcitebikeSolver;
                } else if (this.gameName === this.games.iCanCode) {
                    module = ICanCodeSolver;
                } else if (this.gameName === this.games.minesweeper) {
                    module = MinesweeperSolver;
                } else if (this.gameName === this.games.sample) {
                    module = SampleSolver;
                } else if (this.gameName === this.games.snake) {
                    module = SnakeSolver;
                } else if (this.gameName === this.games.snakeBattle) {
                    module = SnakeBattleSolver;
                }
            }
            // solver module is a function that will return next hero action
            return module;
        }
    }
};