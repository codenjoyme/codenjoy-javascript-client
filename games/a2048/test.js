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

var A2048Test = module.exports = function(){
    
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
      /*4*/ '22 AB' +
      /*3*/ '  x  ' +
      /*2*/ ' xxx ' +
      /*1*/ '4 x  ' +
      /*0*/ '   8 ');
           /*01234*/

    assertEquals("5", board.size());

    assertEquals(true, board.isBarrierAt(2, 2));
    assertEquals(true, board.isBarrierAt(-1, 2));
    assertEquals(false, board.isBarrierAt(3, 0));

    assertEquals(true, board.isAt(2, 2, Element._x));
    assertEquals(false, board.isAt(3, 0, Element._x));
    assertEquals(true, board.isAt(3, 0, Element._8));
    assertEquals(true, board.isAt(4, 0, Element.NONE));

    assertEquals(false, board.isAt(-1, 2, Element._x));
    assertEquals(false, board.isAt(3, board.size(), Element._x));
    assertEquals(false, board.isAt(3, board.size() - 1, Element._x));

    assertEquals(Element._x, board.getAt(2, 2));
    assertEquals(Element._8, board.getAt(3, 0));
    assertEquals(Element.NONE, board.getAt(4, 0));

    assertEquals(
        "22 AB\n" +
        "  x  \n" +
        " xxx \n" +
        "4 x  \n" +
        "   8 \n", board.boardAsString());

    assertEquals("Board:\n" +
        "22 AB\n" +
        "  x  \n" +
        " xxx \n" +
        "4 x  \n" +
        "   8 \n" +
        "\n" +
        "Barriers at: [[2,1],[1,2],[2,2],[3,2],[2,3]]\n", board.toString());

    assertEquals("[2,1],[1,2],[2,2],[3,2],[2,3]",
        board.getBarriers());

    assertEquals(" ,x, ,x,x, ,x, ",
        board.getNear(2, 2));

    assertEquals(",8, ,, ,,,",
        board.getNear(4, 0));

    assertEquals(" ,2,,x,, ,A,",
        board.getNear(2, 4));

    assertEquals("[2,1],[1,2],[2,2],[3,2],[2,3]",
        board.findAll(Element._x));

    assertEquals("[0,4],[1,4]",
        board.findAll(Element._2));

    assertEquals("[0,1]",
        board.findAll(Element._4));

    assertEquals("[3,0]",
        board.findAll(Element._8));

    assertEquals("[3,4]",
        board.findAll(Element._16));

    assertEquals("[4,4]",
        board.findAll(Element._32));

    assertEquals("[0,0],[1,0],[2,0],[4,0],[1,1],[3,1],[4,1]," +
        "[0,2],[4,2],[0,3],[1,3],[3,3],[4,3],[2,4]",
        board.findAll(Element.NONE));

    assertEquals("",
        board.findAll(Element._64));


    assertEquals(true,
        board.isAnyOfAt(2, 2,
            [Element._x,
            Element._2,
            Element._4]));

    assertEquals(true,
        board.isAnyOfAt(2, 2,
            [Element._x]));

    assertEquals(true,
        board.isAnyOfAt(2, 2,
            Element._x));

    assertEquals(false,
        board.isAnyOfAt(2, 2,
            [Element._2,
            Element._4]));

    assertEquals(false,
        board.isAnyOfAt(2, 2,
            [Element._2]));

    assertEquals(false,
        board.isAnyOfAt(1, 2,
            Element._2));

    assertEquals(false,
        board.isAnyOfAt(3, -1,
            Element._2));

    assertEquals(false,
        board.isBarrierAt(0, 0));

    assertEquals(true,
        board.isBarrierAt(2, 2));

    assertEquals(true,
        board.isBarrierAt(3, -1));

    assertEquals(false,
        board.isBarrierAt(4, 4));

    assertEquals(0, board.countNear(0, 0, Element._x));
    assertEquals(3, board.countNear(2, 1, Element._x));
    assertEquals(4, board.countNear(2, 2, Element._x));
    assertEquals(3, board.countNear(2, 3, Element._x));
    assertEquals(3, board.countNear(3, 3, Element._x));

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

    // another case

    board = new Board(
        /*4*/ '     ' +
        /*3*/ '     ' +
        /*2*/ '  x  ' +
        /*1*/ '     ' +
        /*0*/ '     ');
             /*01234*/

    assertEquals(true,
        board.isNear(1, 1,
            Element._x));

    assertEquals(true,
        board.isNear(1, 2,
            Element._x));

    assertEquals(true,
        board.isNear(1, 3,
            Element._x));

    assertEquals(true,
        board.isNear(2, 1,
            Element._x));

    assertEquals(false,
        board.isNear(2, 2,   // само препятствие
            Element._x));

    assertEquals(true,
        board.isNear(2, 3,
            Element._x));

    assertEquals(true,
        board.isNear(3, 1,
            Element._x));

    assertEquals(true,
        board.isNear(3, 2,
            Element._x));

    assertEquals(true,
        board.isNear(3, 3,
            Element._x));

    assertEquals(false,
        board.isNear(1, -9,
            Element._x));

    assertEquals(false,
        board.isNear(-1, 9,
            Element._x));
}