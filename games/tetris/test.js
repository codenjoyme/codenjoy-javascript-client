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

var TetrisTest = module.exports = function(){

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

    try {
        new Point();
    } catch (e) {
        assertEquals('X and Y are required and should be a number', e);
    }

    var pt = new Point(0, 0);
    assertEquals('function', typeof pt.equals);
    assertEquals('function', typeof pt.getX);
    assertEquals('function', typeof pt.getY);
    assertEquals('function', typeof pt.toString);
    assertEquals('function', typeof pt.isOutOf);

    assertEquals(true, pt.equals(pt));
    assertEquals(true, pt.equals(new Point(0, 0)));
    assertEquals(false, pt.equals(new Point(0, 1)));
    assertEquals(false, pt.equals(new Point(1, 0)));

    assertEquals(111, new Point(111, 0).getX()); 
    assertEquals(222, new Point(0, 222).getY());
    assertEquals('[111,222]', new Point(111, 222).toString());

    var size = 5;
    assertEquals(false, new Point(0, 0).isOutOf(size));
    assertEquals(false, new Point(2, 2).isOutOf(size));
    assertEquals(false, new Point(0, 4).isOutOf(size));
    assertEquals(false, new Point(4, 0).isOutOf(size));
    assertEquals(false, new Point(4, 4).isOutOf(size));
    
    assertEquals(true, new Point(-1, 0).isOutOf(size));
    assertEquals(true, new Point(0, -1).isOutOf(size));
    assertEquals(true, new Point(-1, -1).isOutOf(size));
    assertEquals(true, new Point(5, 0).isOutOf(size));
    assertEquals(true, new Point(0, 5).isOutOf(size));
    assertEquals(true, new Point(5, 5).isOutOf(size));
    assertEquals(true, new Point(12, 12).isOutOf(size));

    var boardString = '..................' +
                      '..................' +
                      '..................' +
                      '..................' +
                      '..................' +
                      '..................' +
                      '..................' +
                      '..................' +
                      '..................' +
                      '..................' +
                      '..................' +
                      '..................' +
                      '..................' +
                      '..................' +
                      '.ZZ...............' +
                      '..ZZ.........Z....' +
                      'OOI......OO.ZZSST.' +
                      'OOI.IIII.OO.ZSSTTT';
    const boardObj = {
        currentFigureType: "O",
        futureFigures: ["O", "O", "O", "O"],
        layers: [boardString],
        currentFigurePoint: new Point(0, 0),
        levelProgress: { total: 0, current: 1, lastPassed: 0 }
      };
    board = new Board(JSON.stringify(boardObj));
    
    assertEquals(true, board.isAt(new Point(0, 0), Element.YELLOW));
    assertEquals(true, board.isAt(new Point(12, 1), Element.RED));
    assertEquals(false, board.isAt(new Point(0, 0), Element.RED));
    assertEquals(Element.RED, board.getAt(new Point(2, 3)));
    assertEquals(Element.NONE, board.getAt(new Point(3, 0)));
    assertEquals(undefined, board.getAt(new Point(-1, -1)));
    assertEquals(undefined, board.getAt(new Point(18, 18)));

    assertEquals('[0,1],[1,1],[9,1],[10,1],[0,0],[1,0],[9,0],[10,0]',
        board.findAll(Element.YELLOW));
    assertEquals('', board.findAll(Element.CYAN));

    assertEquals(true, board.isAnyOfAt(new Point(17, 0),
        [Element.RED, Element.PURPLE, Element.BLUE]));
    assertEquals(false, board.isAnyOfAt(new Point(5, 5),
        [Element.RED, Element.YELLOW]));

    assertEquals(true, board.isNear(new Point(13, 2), Element.RED));
    assertEquals(true, board.isNear(new Point(1, 3), Element.RED));
    assertEquals(false, board.isNear(new Point(0, 3), Element.BLUE));

    assertEquals('Z,S,Z,S', board.getNear(new Point(13, 1)));
    assertEquals('Z', board.getNear(new Point(13, 2)));
    assertEquals('I', board.getNear(new Point(7, 0)));
    assertEquals('', board.getNear(new Point(6, 3)));

    assertEquals(2, board.countNear(new Point(17, 1), Element.PURPLE));
    assertEquals(2, board.countNear(new Point(15, 1), Element.PURPLE));
    assertEquals(0, board.countNear(new Point(13, 1), Element.PURPLE));

    assertEquals(0, board.countNear(new Point(2, 7)));
    assertEquals(0, board.countNear(new Point(0, 1)));

    assertEquals('[0,17],[1,17],[2,17],[3,17],[4,17],[5,17],[6,17],' +
        '[7,17],[8,17],[9,17],[10,17],[11,17],[12,17],[13,17],[14,17],' +
        '[15,17],[16,17],[17,17],[0,16],[1,16],[2,16],[3,16],[4,16],' +
        '[5,16],[6,16],[7,16],[8,16],[9,16],[10,16],[11,16],[12,16],' +
        '[13,16],[14,16],[15,16],[16,16],[17,16],[0,15],[1,15],[2,15],' +
        '[3,15],[4,15],[5,15],[6,15],[7,15],[8,15],[9,15],[10,15],' +
        '[11,15],[12,15],[13,15],[14,15],[15,15],[16,15],[17,15],[0,14],' +
        '[1,14],[2,14],[3,14],[4,14],[5,14],[6,14],[7,14],[8,14],[9,14],' +
        '[10,14],[11,14],[12,14],[13,14],[14,14],[15,14],[16,14],[17,14],' +
        '[0,13],[1,13],[2,13],[3,13],[4,13],[5,13],[6,13],[7,13],[8,13],' +
        '[9,13],[10,13],[11,13],[12,13],[13,13],[14,13],[15,13],[16,13],' +
        '[17,13],[0,12],[1,12],[2,12],[3,12],[4,12],[5,12],[6,12],[7,12],' +
        '[8,12],[9,12],[10,12],[11,12],[12,12],[13,12],[14,12],[15,12],' +
        '[16,12],[17,12],[0,11],[1,11],[2,11],[3,11],[4,11],[5,11],[6,11],' +
        '[7,11],[8,11],[9,11],[10,11],[11,11],[12,11],[13,11],[14,11],' +
        '[15,11],[16,11],[17,11],[0,10],[1,10],[2,10],[3,10],[4,10],[5,10],' +
        '[6,10],[7,10],[8,10],[9,10],[10,10],[11,10],[12,10],[13,10],' +
        '[14,10],[15,10],[16,10],[17,10],[0,9],[1,9],[2,9],[3,9],[4,9],' +
        '[5,9],[6,9],[7,9],[8,9],[9,9],[10,9],[11,9],[12,9],[13,9],[14,9],' +
        '[15,9],[16,9],[17,9],[0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,8],' +
        '[7,8],[8,8],[9,8],[10,8],[11,8],[12,8],[13,8],[14,8],[15,8],[16,8],' +
        '[17,8],[0,7],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[7,7],[8,7],' +
        '[9,7],[10,7],[11,7],[12,7],[13,7],[14,7],[15,7],[16,7],[17,7],' +
        '[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[7,6],[8,6],[9,6],' +
        '[10,6],[11,6],[12,6],[13,6],[14,6],[15,6],[16,6],[17,6],[0,5],' +
        '[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],' +
        '[11,5],[12,5],[13,5],[14,5],[15,5],[16,5],[17,5],[0,4],[1,4],' +
        '[2,4],[3,4],[4,4],[5,4],[6,4],[7,4],[8,4],[9,4],[10,4],[11,4],' +
        '[12,4],[13,4],[14,4],[15,4],[16,4],[17,4],[0,3],[3,3],[4,3],[5,3],' +
        '[6,3],[7,3],[8,3],[9,3],[10,3],[11,3],[12,3],[13,3],[14,3],[15,3],' +
        '[16,3],[17,3],[0,2],[1,2],[4,2],[5,2],[6,2],[7,2],[8,2],[9,2],' +
        '[10,2],[11,2],[12,2],[14,2],[15,2],[16,2],[17,2],[3,1],[4,1],[5,1],' +
        '[6,1],[7,1],[8,1],[11,1],[17,1],[3,0],[8,0],[11,0]',
        board.findAllFreeSpace());

    try {
        board.getDistanceToNextElementByDirection(
            new Point(0,0), 'topp', Element.RED);
    } catch (e) {
        assertEquals('Error: Direction can be one of [top, bottom, left, right]', e);
    }
    assertEquals(15, board.getDistanceToNextElementByDirection(
        new Point(2, 1), 'right', Element.BLUE));

    assertEquals(2, board.getDistanceToNextElementByDirection(
        new Point(2, 1), 'left', Element.BLUE));

    assertEquals(16, board.getDistanceToNextElementByDirection(
        new Point(2, 1), 'up', Element.BLUE))

    assertEquals(1, board.getDistanceToNextElementByDirection(
        new Point(2, 1), 'down', Element.BLUE))

    assertEquals(5, board.getDistanceToNextElementByDirection(
        new Point(12, 2), 'right', Element.BLUE));

    assertEquals(12, board.getDistanceToNextElementByDirection(
        new Point(12, 2), 'left', Element.BLUE));

    assertEquals(15, board.getDistanceToNextElementByDirection(
        new Point(12, 2), 'up', Element.BLUE))

    assertEquals(2, board.getDistanceToNextElementByDirection(
        new Point(12, 2), 'down', Element.BLUE))

    assertEquals(2, board.getDistanceToNextElementByDirection(
        new Point(0, 0), 'right', Element.BLUE));

    assertEquals(0, board.getDistanceToNextElementByDirection(
        new Point(0, 0), 'left', Element.BLUE));

    assertEquals(17, board.getDistanceToNextElementByDirection(
        new Point(0, 0), 'up', Element.BLUE))

    assertEquals(0, board.getDistanceToNextElementByDirection(
        new Point(0, 0), 'down', Element.BLUE))
}