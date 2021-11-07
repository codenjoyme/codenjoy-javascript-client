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

var SampleTest = module.exports = function(){

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
      /*8*/'☼☼☼☼☼☼☼☼☼' +
      /*7*/'☼ x☺  Y ☼' +
      /*6*/'☼  x    ☼' +
      /*5*/'☼ $  ☻  ☼' +
      /*4*/'☼      x☼' +
      /*3*/'☼ ☻     ☼' +
      /*2*/'☼       ☼' +
      /*1*/'☼ $ ☻ x ☼' +
      /*0*/'☼☼☼☼☼☼☼☼☼');
          /*012345678*/

    assertEquals("9", board.size());

    assertEquals("[3,7]", board.getHero());

    assertEquals(true, board.isBarrierAt(4, 1));
    assertEquals(true, board.isBarrierAt(-1, 2));
    assertEquals(false, board.isBarrierAt(3, 2));

    assertEquals(false, board.isGameOver());

    assertEquals(true, board.isAt(0, 0, Element.WALL));
    assertEquals(false, board.isAt(3, 2, Element.WALL));
    assertEquals(true, board.isAt(2, 3, Element.OTHER_HERO));
    assertEquals(true, board.isAt(6, 7, Element.OTHER_DEAD_HERO));
    assertEquals(false, board.isAt(6, 7, Element.DEAD_HERO));

    assertEquals(false, board.isAt(3, board.size(), Element.WALL));
    assertEquals(true, board.isAt(3, board.size() - 1, Element.WALL));

    assertEquals(Element.GOLD, board.getAt(2, 1));
    assertEquals(Element.BOMB, board.getAt(3, 6));
    assertEquals(null, board.getAt(3, -1));

    assertEquals(
        "☼☼☼☼☼☼☼☼☼\n" +
        "☼ x☺  Y ☼\n" +
        "☼  x    ☼\n" +
        "☼ $  ☻  ☼\n" +
        "☼      x☼\n" +
        "☼ ☻     ☼\n" +
        "☼       ☼\n" +
        "☼ $ ☻ x ☼\n" +
        "☼☼☼☼☼☼☼☼☼\n", board.boardAsString());

    assertEquals(
        "☼☼☼☼☼☼☼☼☼\n" +
        "☼ x☺  Y ☼\n" +
        "☼  x    ☼\n" +
        "☼ $  ☻  ☼\n" +
        "☼      x☼\n" +
        "☼ ☻     ☼\n" +
        "☼       ☼\n" +
        "☼ $ ☻ x ☼\n" +
        "☼☼☼☼☼☼☼☼☼\n" +
        "\n" +
        "Hero at: [3,7]\n" +
        "Other heroes at: [[4,1],[2,3],[5,5],[6,7]]\n" +
        "Bombs at: [[6,1],[7,4],[3,6],[2,7]]\n" +
        "Gold at: [[2,1],[2,5]]", board.toString());

    assertEquals("[4,1],[2,3],[5,5],[6,7]",
        board.getOtherHeroes());

    assertEquals("[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0]," +
        "[7,0],[8,0],[0,1],[4,1],[6,1],[8,1],[0,2],[8,2],[0,3]," +
        "[2,3],[8,3],[0,4],[7,4],[8,4],[0,5],[5,5],[8,5],[0,6]," +
        "[3,6],[8,6],[0,7],[2,7],[6,7],[8,7],[0,8],[1,8],[2,8]," +
        "[3,8],[4,8],[5,8],[6,8],[7,8],[8,8]",
        board.getBarriers());

    assertEquals("[2,1],[2,5]",
        board.getGold());

    assertEquals("[6,1],[7,4],[3,6],[2,7]",
        board.getBombs());

    assertEquals("☼,,,☼,,☼,,",
        board.getNear(1, 9));

    assertEquals(" ,x,☼,x,☼, , ,☼",
        board.getNear(3, 7));

    assertEquals("[4,1],[2,3],[5,5]",
        board.findAll(Element.OTHER_HERO));

    assertEquals("[6,1],[7,4],[3,6],[2,7]",
        board.findAll(Element.BOMB));

    assertEquals("[3,7]",
        board.findAll(Element.HERO));

    assertEquals("",
        board.findAll(Element.DEAD_HERO));

    assertEquals("[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0]," +
        "[0,1],[8,1],[0,2],[8,2],[0,3],[8,3],[0,4],[8,4],[0,5],[8,5],[0,6]," +
        "[8,6],[0,7],[8,7],[0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,8],[7,8]," +
        "[8,8]",
        board.findAll(Element.WALL));

    assertEquals("[1,1],[3,1],[5,1],[7,1],[1,2],[2,2],[3,2],[4,2],[5,2]," +
        "[6,2],[7,2],[1,3],[3,3],[4,3],[5,3],[6,3],[7,3],[1,4],[2,4],[3,4]," +
        "[4,4],[5,4],[6,4],[1,5],[3,5],[4,5],[6,5],[7,5],[1,6],[2,6],[4,6]," +
        "[5,6],[6,6],[7,6],[1,7],[4,7],[5,7],[7,7]",
        board.findAll(Element.NONE));

    assertEquals("[6,7]",
        board.findAll(Element.OTHER_DEAD_HERO));

    assertEquals("",
        board.findAll(Element.DEAD_HERO));

    assertEquals(true,
        board.isAnyOfAt(6, 7,
            [Element.HERO,
            Element.OTHER_DEAD_HERO,
            Element.DEAD_HERO]));

    assertEquals(true,
        board.isAnyOfAt(3, 7,
            [Element.HERO]));

    assertEquals(true,
        board.isAnyOfAt(0, 0,
            Element.WALL));

    assertEquals(false,
        board.isAnyOfAt(1, 1,
            [Element.WALL,
            Element.HERO]));

    assertEquals(false,
        board.isAnyOfAt(1, 1,
            [Element.WALL]));

    assertEquals(false,
        board.isAnyOfAt(1, 1,
            Element.HERO));

    assertEquals(false,
        board.isAnyOfAt(3, -1,
            Element.HERO));

    assertEquals(true,
        board.isNear(0, 8,
            Element.WALL));

    assertEquals(true,
        board.isNear(3, 7,
            Element.BOMB));

    assertEquals(true,
        board.isNear(3, 8,
            Element.HERO));

    assertEquals(true,
        board.isNear(1, 8,
            Element.WALL));

    assertEquals(false,
        board.isNear(3, 7,   // сам герой
            Element.HERO));

    assertEquals(false,
        board.isNear(1, 10,
            Element.WALL));

    assertEquals(true,
        board.isNear(2, 8,
            Element.WALL));

    assertEquals(true,
        board.isNear(2, 9,
            Element.WALL));

    assertEquals(false,
        board.isNear(2, 10,
            Element.WALL));

    assertEquals(false,
        board.isNear(1, -9,
            Element.WALL));

    assertEquals(true,
        board.isNear(-1, 9,
            Element.WALL));

    assertEquals(false,
        board.isNear(-1, 10,
            Element.WALL));

    assertEquals(false,
        board.isBarrierAt(9, 13));

    assertEquals(true,
        board.isBarrierAt(0, 0));

    assertEquals(true,
        board.isBarrierAt(3, -1));

    assertEquals(false,
        board.isBarrierAt(3, 3));

    assertEquals(2, board.countNear(0, 0, Element.WALL));
    assertEquals(3, board.countNear(2, 1, Element.WALL));
    assertEquals(0, board.countNear(5, 5, Element.WALL));
    assertEquals(3, board.countNear(7, 6, Element.WALL));

    assertEquals("[5,4]",
        Direction.DOWN.change(new Point(5, 5)));

    assertEquals("[5,6]",
        Direction.UP.change(new Point(5, 5)));

    assertEquals("[4,5]",
        Direction.LEFT.change(new Point(5, 5)));

    assertEquals("[6,5]",
        Direction.RIGHT.change(new Point(5, 5)));

    assertEquals("[5,4]",
        new Point(5, 5).moveTo(Direction.DOWN));

    assertEquals("[5,6]",
        new Point(5, 5).moveTo(Direction.UP));

    assertEquals("[4,5]",
        new Point(5, 5).moveTo(Direction.LEFT));

    assertEquals("[6,5]",
        new Point(5, 5).moveTo(Direction.RIGHT));
}
