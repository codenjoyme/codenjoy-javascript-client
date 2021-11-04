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

var SnakeTest = module.exports = function(){

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
      /*14*/'☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼' +
      /*13*/'☼        ☻    ☼' +
      /*12*/'☼            ☺☼' +
      /*11*/'☼   ╔══►      ☼' +
      /*10*/'☼   ╚═╗       ☼' +
      /*9*/ '☼   ╔╗║       ☼' +
      /*8*/ '☼ ╔═╝╚╝       ☼' +
      /*7*/ '☼ ╚═╕         ☼' +
      /*6*/ '☼             ☼' +
      /*5*/ '☼             ☼' +
      /*4*/ '☼             ☼' +
      /*3*/ '☼             ☼' +
      /*2*/ '☼             ☼' +
      /*1*/ '☼             ☼' +
      /*0*/ '☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼');
           /*012345678901234*/

    assertEquals("15", board.size());

    assertEquals("[9,13]", board.getStone());

    assertEquals("[13,12]", board.getApple());

    assertEquals("[0,0],[1,0],[2,0],[3,0],[4,0],[5,0]," +
        "[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0]," +
        "[13,0],[14,0],[0,1],[14,1],[0,2],[14,2],[0,3]," +
        "[14,3],[0,4],[14,4],[0,5],[14,5],[0,6],[14,6]," +
        "[0,7],[14,7],[0,8],[14,8],[0,9],[14,9],[0,10]," +
        "[14,10],[0,11],[14,11],[0,12],[14,12],[0,13]," +
        "[9,13]," + // stone
        "[14,13],[0,14],[1,14],[2,14],[3,14],[4,14]," +
        "[5,14],[6,14],[7,14],[8,14],[9,14],[10,14]," +
        "[11,14],[12,14],[13,14],[14,14]", board.getBarriers());

    assertEquals("[0,0],[1,0],[2,0],[3,0],[4,0],[5,0]," +
        "[6,0],[7,0],[8,0],[9,0],[10,0],[11,0],[12,0]," +
        "[13,0],[14,0],[0,1],[14,1],[0,2],[14,2],[0,3]," +
        "[14,3],[0,4],[14,4],[0,5],[14,5],[0,6],[14,6]," +
        "[0,7],[14,7],[0,8],[14,8],[0,9],[14,9],[0,10]," +
        "[14,10],[0,11],[14,11],[0,12],[14,12],[0,13]," +
        "[14,13],[0,14],[1,14],[2,14],[3,14],[4,14]," +
        "[5,14],[6,14],[7,14],[8,14],[9,14],[10,14]," +
        "[11,14],[12,14],[13,14],[14,14]", board.getWalls());

    assertEquals("[2,7],[3,7],[4,7],[2,8],[3,8],[4,8]," +
        "[5,8],[6,8],[4,9],[5,9],[6,9],[4,10],[5,10]," +
        "[6,10],[4,11],[5,11],[6,11],[7,11]", board.getMyBody());

    assertEquals("[7,11]", board.getMyHead());

    assertEquals(true, board.isAt(9, 13, Element.BAD_APPLE));
    assertEquals(false, board.isAt(9, 13, Element.GOOD_APPLE));
    assertEquals(true, board.isAt(6, 8, Element.TAIL_LEFT_UP));
    assertEquals(false, board.isAt(3, -1, Element.TAIL_LEFT_UP));

    assertEquals(false, board.isAt(3, board.size(), Element.BREAK));
    assertEquals(true, board.isAt(3, board.size() - 1, Element.BREAK));

    assertEquals(Element.BAD_APPLE, board.getAt(9, 13));
    assertEquals(Element.TAIL_LEFT_UP, board.getAt(6, 8));
    assertEquals(Element.BREAK, board.getAt(3, -1));

    assertEquals("☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼\n" +
        "☼        ☻    ☼\n" +
        "☼            ☺☼\n" +
        "☼   ╔══►      ☼\n" +
        "☼   ╚═╗       ☼\n" +
        "☼   ╔╗║       ☼\n" +
        "☼ ╔═╝╚╝       ☼\n" +
        "☼ ╚═╕         ☼\n" +
        "☼             ☼\n" +
        "☼             ☼\n" +
        "☼             ☼\n" +
        "☼             ☼\n" +
        "☼             ☼\n" +
        "☼             ☼\n" +
        "☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼\n", board.boardAsString());

    assertEquals("Board:\n" +
        "☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼\n" +
        "☼        ☻    ☼\n" +
        "☼            ☺☼\n" +
        "☼   ╔══►      ☼\n" +
        "☼   ╚═╗       ☼\n" +
        "☼   ╔╗║       ☼\n" +
        "☼ ╔═╝╚╝       ☼\n" +
        "☼ ╚═╕         ☼\n" +
        "☼             ☼\n" +
        "☼             ☼\n" +
        "☼             ☼\n" +
        "☼             ☼\n" +
        "☼             ☼\n" +
        "☼             ☼\n" +
        "☼☼☼☼☼☼☼☼☼☼☼☼☼☼☼\n" +
        "\n" +
        "My head at: [7,11]\n" +
        "My body at: [[2,7],[3,7],[4,7],[2,8],[3,8],[4,8]," +
            "[5,8],[6,8],[4,9],[5,9],[6,9],[4,10],[5,10]," +
            "[6,10],[4,11],[5,11],[6,11],[7,11]]\n" +
        "Apple at: [[13,12]]\n" +
        "Stone at: [[9,13]]\n", board.toString());

    assertEquals("[4,8],[6,8]",
        board.findAll(Element.TAIL_LEFT_UP));

    assertEquals("[3,7],[3,8],[5,10],[5,11],[6,11]",
        board.findAll(Element.TAIL_HORIZONTAL));

    assertEquals("[9,13]",
        board.findAll(Element.BAD_APPLE));

    assertEquals("[13,12]",
        board.findAll(Element.GOOD_APPLE));

    assertEquals("[7,11]",
        board.findAll(Element.HEAD_RIGHT));

    assertEquals("",
        board.findAll(Element.HEAD_DOWN));

    assertEquals(true,
        board.isAnyOfAt(9, 13,
            [Element.HEAD_DOWN,
            Element.HEAD_UP,
            Element.HEAD_RIGHT,
            Element.HEAD_LEFT,
            Element.BAD_APPLE]));

    assertEquals(true,
        board.isAnyOfAt(9, 13,
            [Element.BAD_APPLE]));

    assertEquals(true,
        board.isAnyOfAt(9, 13,
            Element.BAD_APPLE));

    assertEquals(false,
        board.isAnyOfAt(9, 13,
            [Element.HEAD_DOWN,
            Element.HEAD_UP,
            Element.HEAD_RIGHT,
            Element.HEAD_LEFT]));

    assertEquals(false,
        board.isAnyOfAt(9, 13,
            [Element.HEAD_DOWN]));

    assertEquals(false,
        board.isAnyOfAt(9, 13,
            Element.HEAD_DOWN));

    assertEquals(false,
        board.isAnyOfAt(3, -1,
            Element.HEAD_DOWN));

    assertEquals(true,
        board.isNear(9, 12,
            Element.BAD_APPLE));

    assertEquals(true,
        board.isNear(9, 14,
            Element.BAD_APPLE));

    assertEquals(true,
        board.isNear(8, 13,
            Element.BAD_APPLE));

    assertEquals(true,
        board.isNear(10, 13,
            Element.BAD_APPLE));

    assertEquals(false,
        board.isNear(8, 12,
            Element.BAD_APPLE));

    assertEquals(false,
        board.isNear(3, -1,
            Element.BAD_APPLE));

    assertEquals(true,
        board.isBarrierAt(9, 13));

    assertEquals(true,
        board.isBarrierAt(0, 0));

    assertEquals(true,
        board.isBarrierAt(3, -1));

    assertEquals(false,
        board.isBarrierAt(3, 3));

    assertEquals(1,
        board.countNear(9, 12, Element.BAD_APPLE));

    assertEquals(2,
        board.countNear(0, 0, Element.BREAK));

    assertEquals(0,
        board.countNear(3, -1, Element.GOOD_APPLE));

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

