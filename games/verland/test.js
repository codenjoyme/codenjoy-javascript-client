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

var VerlandTest = module.exports = function(){

    var Games = require('./../../engine/games.js');
    var Direction = Games.require('./direction.js');
    var Point = require('./../../engine/point.js');
    var Board = Games.require('./board.js');
    var Element = Games.require('./elements.js');


    assertEquals = function(expected, actual) {
        expected = String(expected)
        actual = String(actual)
        if (expected !== actual) {
            throw new Error('Expected: "' + expected + '" but was: "' + actual + '"');
        }
    }

    var board = new Board(
        "☼☼☼☼☼☼☼☼☼" +
        "☼1 Y   y☼" +
        "☼*2  x  ☼" +
        "☼o 3 ♠ +☼" +
        "☼♥  4   ☼" +
        "☼   Z  ♣☼" +
        "☼z  5678☼" +
        "☼  !  X ☼" +
        "☼☼☼☼☼☼☼☼☼"
    );

    assertEquals("9", board.size());
    assertEquals("[6,1]", board.getHero());

    assertEquals("[3,7],[5,5]", board.getOtherHeroes());
    assertEquals("[4,3],[7,3]", board.getEnemyHeroes());

    assertEquals(
        "[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[0,1],[8,1],[0,2],[8,2],[0,3],[8,3],[0,4]," +
        "[8,4],[0,5],[8,5],[0,6],[8,6],[0,7],[8,7],[0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,8],[7,8],[8,8]",
        board.getWalls()
    );

    assertEquals(true, board.isAt(1, 5, Element.INFECTION));
    assertEquals(false, board.isAt(2, 1, Element.PATHLESS));

    assertEquals(false, board.isAt(1, board.size(), Element.INFECTION));
    assertEquals(true, board.isAt(1, board.size() - 1, Element.PATHLESS));

    assertEquals(Element.PATHLESS, board.getAt(0, 0));
    assertEquals(Element.HERO, board.getAt(1, 4));
    assertEquals(null, board.getAt(-1, -1));
    assertEquals( 1, board.countContagions(1, 7));
    assertEquals(2, board.countContagions(2, 6));
    assertEquals(3, board.countContagions(3, 5));
    assertEquals(4, board.countContagions(4, 4));

    assertEquals("☼☼☼☼☼☼☼☼☼\n" +
        "☼1 Y   y☼\n" +
        "☼*2  x  ☼\n" +
        "☼o 3 ♠ +☼\n" +
        "☼♥  4   ☼\n" +
        "☼   Z  ♣☼\n" +
        "☼z  5678☼\n" +
        "☼  !  X ☼\n" +
        "☼☼☼☼☼☼☼☼☼\n",
        board.boardAsString()
    );

    assertEquals("Board:\n" +
        "☼☼☼☼☼☼☼☼☼\n" +
        "☼1 Y   y☼\n" +
        "☼*2  x  ☼\n" +
        "☼o 3 ♠ +☼\n" +
        "☼♥  4   ☼\n" +
        "☼   Z  ♣☼\n" +
        "☼z  5678☼\n" +
        "☼  !  X ☼\n" +
        "☼☼☼☼☼☼☼☼☼\n" +
        "\n" +
        "Hero at: [6,1]\n" +
        "Other heroes at: [[3,7],[5,5]]\n" +
        "Enemy heroes at: [[4,3],[7,3]]\n" +
        "Other stuff at: [[1,5],[1,6],[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[0,1],[8,1],[0,2],[8,2]," +
        "[0,3],[8,3],[0,4],[8,4],[0,5],[8,5],[0,6],[8,6],[0,7],[8,7],[0,8],[1,8],[2,8]," +
        "[3,8],[4,8],[5,8],[6,8],[7,8],[8,8]]\n", board.toString());
    
}
