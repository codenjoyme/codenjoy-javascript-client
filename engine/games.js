/*-
 * #%L
 * Codenjoy - it's a dojo-like platform from developers to developers.
 * %%
 * Copyright (C) 2012 - 2022 Codenjoy
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
        rawelbbub: 'rawelbbub',
        excitebike: 'excitebike',
        icancode: 'icancode',
        sample: 'sample',
        knibert: 'knibert',
        namdreab: 'namdreab',
        verland: 'verland',
    },

    gameName : '',

    init : function(game) {
        this.gameName = Stuff.parameter('game', 0, game);
    },

    'require': function(name) {
        name = Stuff.clean(name);

        if (name === 'elements') {
            // case node
            var module = require('../games/' + this.gameName + '/elements.js');
            if (typeof module == 'undefined') {
                // case browser stub
                if (this.gameName === this.games.mollyMage) {
                    module = MollymageElement;
                } else if (this.gameName === this.games.clifford) {
                    module = CliffordElement;
                } else if (this.gameName === this.games.tetris) {
                    module = TetrisElement;
                } else if (this.gameName === this.games["2048"]) {
                    module = A2048Element;
                } else if (this.gameName === this.games.rawelbbub) {
                    module = RawelbbubElement;
                } else if (this.gameName === this.games.excitebike) {
                    module = ExcitebikeElement;
                } else if (this.gameName === this.games.icancode) {
                    module = IcancodeElement;
                } else if (this.gameName === this.games.sample) {
                    module = SampleElement;
                } else if (this.gameName === this.games.knibert) {
                    module = KnibertElement;
                } else if (this.gameName === this.games.namdreab) {
                    module = NamdreabElement;
                } else if (this.gameName === this.games.verland) {
                    module = VerlandElement;
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
                    module = MollymageBoard;
                } else if (this.gameName === this.games.clifford) {
                    module = CliffordBoard;
                } else if (this.gameName === this.games.tetris) {
                    module = TetrisBoard;
                } else if (this.gameName === this.games["2048"]) {
                    module = A2048Board;
                } else if (this.gameName === this.games.rawelbbub) {
                    module = RawelbbubBoard;
                } else if (this.gameName === this.games.excitebike) {
                    module = ExcitebikeBoard;
                } else if (this.gameName === this.games.icancode) {
                    module = IcancodeBoard;
                } else if (this.gameName === this.games.sample) {
                    module = SampleBoard;
                } else if (this.gameName === this.games.knibert) {
                    module = KnibertBoard;
                } else if (this.gameName === this.games.namdreab) {
                    module = NamdreabBoard;
                } else if (this.gameName === this.games.verland) {
                    module = VerlandBoard;
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
                    module = MollymageDirection;
                } else if (this.gameName === this.games.clifford) {
                    module = CliffordDirection;
                } else if (this.gameName === this.games.tetris) {
                    module = TetrisDirection;
                } else if (this.gameName === this.games["2048"]) {
                    module = A2048Direction;
                } else if (this.gameName === this.games.rawelbbub) {
                    module = RawelbbubDirection;
                } else if (this.gameName === this.games.excitebike) {
                    module = ExcitebikeDirection;
                } else if (this.gameName === this.games.icancode) {
                    module = IcancodeDirection;
                } else if (this.gameName === this.games.sample) {
                    module = SampleDirection;
                } else if (this.gameName === this.games.knibert) {
                    module = KnibertDirection;
                } else if (this.gameName === this.games.namdreab) {
                    module = NamdreabDirection;
                } else if (this.gameName === this.games.verland) {
                    module = VerlandDirection;
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
                    module = MollymageTest;
                } else if (this.gameName === this.games.clifford) {
                    module = CliffordTest;
                } else if (this.gameName === this.games.tetris) {
                    module = TetrisTest;
                } else if (this.gameName === this.games["2048"]) {
                    module = A2048Test;
                } else if (this.gameName === this.games.rawelbbub) {
                    module = RawelbbubTest;
                } else if (this.gameName === this.games.excitebike) {
                    module = ExcitebikeTest;
                } else if (this.gameName === this.games.icancode) {
                    module = IcancodeTest;
                } else if (this.gameName === this.games.sample) {
                    module = SampleTest;
                } else if (this.gameName === this.games.knibert) {
                    module = KnibertTest;
                } else if (this.gameName === this.games.namdreab) {
                    module = NamdreabTest;
                } else if (this.gameName === this.games.verland) {
                    module = VerlandTest;
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
                    module = MollymageSolver;
                } else if (this.gameName === this.games.clifford) {
                    module = CliffordSolver;
                } else if (this.gameName === this.games.tetris) {
                    module = TetrisSolver;
                } else if (this.gameName === this.games["2048"]) {
                    module = A2048Solver;
                } else if (this.gameName === this.games.rawelbbub) {
                    module = RawelbbubSolver;
                } else if (this.gameName === this.games.excitebike) {
                    module = ExcitebikeSolver;
                } else if (this.gameName === this.games.icancode) {
                    module = IcancodeSolver;
                } else if (this.gameName === this.games.sample) {
                    module = SampleSolver;
                } else if (this.gameName === this.games.knibert) {
                    module = KnibertSolver;
                } else if (this.gameName === this.games.namdreab) {
                    module = NamdreabSolver;
                } else if (this.gameName === this.games.verland) {
                    module = VerlandSolver;
                }
            }
            // solver module is a function that will return next hero action
            return module;
        }
    }
};