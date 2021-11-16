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

var IcancodeTest = module.exports = function(){
    
    var Games = require('./../../engine/games.js');
    var Direction = Games.require('./direction.js');
    var Point = require('./../../engine/point.js');
    var Board = Games.require('./board.js');
    var Element = Games.require('./elements.js');
    
    var toString = function (data) {
        if (data === undefined || data == null) {
            return data;
        }
        return JSON.stringify(data).split('"').join('\'');
    }

    var assertEquals = function (expected, actual) {
        expected = toString(expected);
        actual = toString(actual);
        if (expected !== actual) {
            console.log('Expected:');
            console.log(expected);

            console.log('Actual:');
            console.log(actual);

            throw new Error('Expected: "' + expected + '" but was: "' + actual + '"');
        }
    }   

    var boardString = '{"offset":{"x":0,"y":0},' +
        '"heroPosition":{"x":2,"y":7},' +
        '"layers":["' +
        '╔═══════┐' + // 8
        '║S.$◄..O│' + // 7
        '║....$O.│' + // 6
        '║.$E....│' + // 5
        '║˃..O...│' + // 4
        '║.O...Z.│' + // 3
        '║..˄....│' + // 2
        '║..˅˂▼►▲│' + // 1
        '└───────┘",' + // 0
      // 012345678
       '"---------' + // 8
        '--☺----o-' + // 7
        '-X----x☻-' + // 6
        '-X---B---' + // 5
        '--→B-↓B--' + // 4
        '-♂♂♀✝B---' + // 3
        '--&--↑←--' + // 2
        '---------' + // 1
        '---------",' + // 0
      // 012345678
       '"---------' + // 0
        '------*--' + // 1
        '---------' + // 2
        '---------' + // 3
        '------^--' + // 4
        '---------' + // 5
        '---------' + // 6
        '---------' + // 7
        '---------"' + // 8
        ']}';

    var board = new Board(boardString);

    // --------- board.layerN -----------

    assertEquals('╔═══════┐\n' +
                '║S.$◄..O│\n' +
                '║....$O.│\n' +
                '║.$E....│\n' +
                '║˃..O...│\n' +
                '║.O...Z.│\n' +
                '║..˄....│\n' +
                '║..˅˂▼►▲│\n' +
                '└───────┘\n',
                board.layer1());

    assertEquals('---------\n' +
                 '--☺----o-\n' +
                 '-X----x☻-\n' +
                 '-X---B---\n' +
                 '--→B-↓B--\n' +
                 '-♂♂♀✝B---\n' +
                 '--&--↑←--\n' +
                 '---------\n' +
                 '---------\n',
                 board.layer2());

    assertEquals('---------\n' +
                '------*--\n' +
                '---------\n' +
                '---------\n' +
                '------^--\n' +
                '---------\n' +
                '---------\n' +
                '---------\n' +
                '---------\n',
                board.layer3());

    // --------- getScanner --------------
    // getAt

    assertEquals(Element.GOLD,
        board.getAt(board.LAYER1, 2, 5));

    assertEquals(Element.ROBO_OTHER,
        board.getAt(board.LAYER2, 1, 6));

    assertEquals(Element.ROBO_OTHER,
        board.getAt(board.LAYER2, 1, 6));

    assertEquals(Element.HOLE,
        board.getAt(board.LAYER1, 6, 6));

    assertEquals(Element.ROBO_OTHER_FALLING,
        board.getAt(board.LAYER2, 6, 6));

    assertEquals(Element.BOX,
        board.getAt(board.LAYER2, 6, 4));

    assertEquals(Element.ROBO_OTHER_FLYING,
        board.getAt(board.LAYER3, 6, 4));

    assertEquals(Element.FLOOR,
        board.getAt(board.LAYER1, 2, 2));

    assertEquals(Element.ROBO_OTHER_LASER,
        board.getAt(board.LAYER2, 2, 2));

    assertEquals(Element.FLOOR,
        board.getAt(board.LAYER1, 2, 7));

    assertEquals(Element.ROBO,
        board.getAt(board.LAYER2, 2, 7));

    assertEquals(Element.FLOOR,
        board.getAt(board.LAYER1, 2, 6));

    assertEquals(Element.EMPTY,
        board.getAt(board.LAYER2, 2, 6));

    assertEquals(Element.EMPTY,
        board.getAt(board.LAYER3, 2, 6));

    assertEquals(Element.EXIT,
        board.getAt(board.LAYER1, 3, 5));

    assertEquals(Element.GOLD,
        board.getAt(board.LAYER1, 3, 7));

    assertEquals(Element.FLOOR,
        board.getAt(board.LAYER1, 6, 7));

    assertEquals(Element.EMPTY,
        board.getAt(board.LAYER2, 6, 7));

    assertEquals(Element.ROBO_FLYING,
        board.getAt(board.LAYER3, 6, 7));

    assertEquals(Element.BOX,
        board.getAt(board.LAYER2, 6, 4));

    assertEquals(Element.ROBO_OTHER_FLYING,
        board.getAt(board.LAYER3, 6, 4));

    // isNear

    assertEquals(false,
        board.isNear(board.LAYER2, -1, 7, Element.ROBO_OTHER)); // координаты невалидные

    // мoй другой робот что летает LAYER3
    assertEquals(Element.ROBO_OTHER_FLYING,
            board.getAt(board.LAYER3, 6, 4));
    assertEquals(true,
        board.isNear(board.LAYER3, 5, 4, Element.ROBO_OTHER_FLYING));

    // чужой робот, что летает LAYER3
    assertEquals(Element.ROBO_FLYING,
            board.getAt(board.LAYER3, 6, 7));
    assertEquals(true,
        board.isNear(board.LAYER3, 6, 8, Element.ROBO_FLYING));

    assertEquals(true,
        board.isNear(board.LAYER2, 2, 6, Element.ROBO_OTHER));

    assertEquals(true,
        board.isNear(board.LAYER2, 2, 6, Element.ROBO));

    assertEquals(false,
        board.isNear(board.LAYER2, 2, 6, Element.FEMALE_ZOMBIE));

    assertEquals(false,
        board.isNear(board.LAYER2, 2, 6, [Element.FEMALE_ZOMBIE, Element.HOLE]));

    assertEquals(false,
        board.isNear(board.LAYER2, 5, 7, [Element.ROBO_OTHER, Element.ROBO_FLYING]));

    assertEquals(true,
        board.isNear(board.LAYER3, 5, 7, [Element.ROBO_OTHER, Element.ROBO_FLYING]));

    assertEquals(false,
        board.isNear(board.LAYER2, 5, 4, [Element.ROBO_OTHER_FLYING, Element.ROBO]));

    assertEquals(true,
        board.isNear(board.LAYER3, 5, 4, [Element.ROBO_OTHER_FLYING, Element.ROBO]));

    assertEquals(true,
        board.isNear(board.LAYER2, 2, 6, [Element.ROBO, Element.GOLD]));

    assertEquals(true,
        board.isNear(board.LAYER2, 2, 6, [Element.ROBO_OTHER, Element.HOLE, Element.FEMALE_ZOMBIE]));

    // getMe

    assertEquals({'x': 2, 'y': 7}, board.getMe());

    // TODO what if Hero not on board?
    // TODO what if Hero is flying
    // TODO ...or falling to hole
    // TODO ...or die on laser?

    // isAt

    assertEquals(false,
        board.isAt(board.LAYER2, 2, 7, Element.ROBO_OTHER));
    assertEquals(true,
        board.isAt(board.LAYER2, 2, 7, Element.ROBO));

    assertEquals(false,
        board.isAt(board.LAYER1, 2, 7, Element.ROBO_OTHER));
    assertEquals(false,
        board.isAt(board.LAYER1, 2, 7, Element.ROBO));

    assertEquals(false,
        board.isAt(board.LAYER1, 2, 7, [Element.GOLD, Element.ROBO]));
    assertEquals(true,
        board.isAt(board.LAYER2, 2, 7, [Element.GOLD, Element.ROBO]));

    assertEquals(true,
        board.isAt(board.LAYER2, 2, 7, [Element.ROBO, Element.FLOOR]));

    assertEquals(false,
        board.isAt(board.LAYER2, 2, 7, [Element.ROBO_OTHER, Element.HOLE, Element.FEMALE_ZOMBIE]));

    // мой летает на LAYER3
    assertEquals(true,
        board.isAt(board.LAYER3, 6, 7, [Element.ROBO_FLYING]));

    assertEquals(false,
        board.isAt(board.LAYER2, 6, 7, [Element.ROBO_FLYING]));

    // чужой летает на LAYER3
    assertEquals(true,
        board.isAt(board.LAYER3, 6, 4, [Element.ROBO_OTHER_FLYING]));

    assertEquals(false,
        board.isAt(board.LAYER3, 6, 4, [Element.ROBO_OTHER]));

    // at corners

    assertEquals(true,
        board.isAt(board.LAYER1, 0, 8, Element.ANGLE_IN_LEFT));

    assertEquals(true,
        board.isAt(board.LAYER1, 0, 0, [Element.ROBO_OTHER, Element.ANGLE_BACK_LEFT]));

    assertEquals(false,
        board.isAt(board.LAYER1, 8, 8, Element.GOLD));

    assertEquals(false,
        board.isAt(board.LAYER1, 8, 0, [Element.GOLD, Element.HOLE]));

    // get

    assertEquals([{'x': 2, 'y': 5}, {'x': 3, 'y': 7}, {'x': 5, 'y': 6}],
        board.get(board.LAYER1, Element.GOLD));

    assertEquals([{'x': 1, 'y': 5}, {'x': 1, 'y': 6}],
        board.get(board.LAYER2, Element.ROBO_OTHER));

    assertEquals([{'x': 6, 'y': 4}],
        board.get(board.LAYER3, Element.ROBO_OTHER_FLYING));

    assertEquals([{'x': 6, 'y': 6}],
        board.get(board.LAYER2, Element.ROBO_OTHER_FALLING));

    assertEquals([{'x': 2, 'y': 2}],
        board.get(board.LAYER2, Element.ROBO_OTHER_LASER));

    assertEquals([{'x': 2, 'y': 7}],
        board.get(board.LAYER2, Element.ROBO));

    assertEquals([{'x':6,'y':7}],
        board.get(board.LAYER3, Element.ROBO_FLYING));

    assertEquals([{'x': 7, 'y': 7}],
        board.get(board.LAYER2, Element.ROBO_FALLING));

    assertEquals([{'x': 7, 'y': 6}],
        board.get(board.LAYER2, Element.ROBO_LASER));

    assertEquals([{'x':1,'y':5},{'x':1,'y':6},{'x':2,'y':2},{'x':2,'y':7},{'x':6,'y':6},{'x':7,'y':6},{'x':7,'y':7}],
        board.get(board.LAYER2, [Element.ROBO, Element.ROBO_FLYING, Element.ROBO_FALLING, Element.ROBO_LASER,
                            Element.ROBO_OTHER, Element.ROBO_OTHER_FLYING, Element.ROBO_OTHER_FALLING, Element.ROBO_OTHER_LASER]));

    assertEquals([{'x': 6, 'y': 4}, {'x': 6, 'y': 7}],
        board.get(board.LAYER3, [Element.ROBO, Element.ROBO_FLYING, Element.ROBO_FALLING, Element.ROBO_LASER,
                            Element.ROBO_OTHER, Element.ROBO_OTHER_FLYING, Element.ROBO_OTHER_FALLING, Element.ROBO_OTHER_LASER]));

    assertEquals([{'x': 2, 'y': 5}, {'x': 3, 'y': 7}, {'x': 5, 'y': 6}],
        board.get(board.LAYER1, [Element.GOLD]));

    assertEquals([],
        board.get(board.LAYER1, []));

    assertEquals([{'x':1,'y':7},{'x':2,'y':5},{'x':3,'y':5},{'x':3,'y':7},{'x':5,'y':6}],
        board.get(board.LAYER1, [Element.GOLD, Element.START, Element.EXIT]));

    // isBarrierAt    

    assertEquals(false,
        board.isBarrierAt(2, 6));

    assertEquals(true,
        board.isBarrierAt(0, 8));

    assertEquals(true,
        board.isBarrierAt(0, 8));

    assertEquals(true,
        board.isBarrierAt(3, 4));

    assertEquals(true,
        board.isBarrierAt(4, 7));

    assertEquals(true,
        board.isBarrierAt(-1, 2));

    assertEquals(true,
        board.isBarrierAt(2, -1));

    assertEquals(true,
        board.isBarrierAt(100, 2));

    assertEquals(true,
        board.isBarrierAt(2, 100));

    // countNear    

    assertEquals(1,
        board.countNear(board.LAYER1, 2, 6, Element.GOLD));

    assertEquals(1,
        board.countNear(board.LAYER2, 2, 6, Element.ROBO));

    assertEquals(0,
        board.countNear(board.LAYER2, 5, 7, [Element.ROBO_OTHER]));

    assertEquals(1,
        board.countNear(board.LAYER3, 5, 7, [Element.ROBO_FLYING]));

    assertEquals(1,
        board.countNear(board.LAYER3, 5, 4, [Element.ROBO_OTHER_FLYING, Element.ROBO]));

    assertEquals(1,
        board.countNear(board.LAYER2, 2, 6, Element.ROBO_OTHER));

    assertEquals(4,
        board.countNear(board.LAYER2, 3, 6, Element.EMPTY));

    assertEquals(2,
        board.countNear(board.LAYER1, 1, 7, [Element.WALL_FRONT, Element.WALL_LEFT]));

    // getOtherRobots
   
    assertEquals([{'x': 1, 'y': 5}, {'x': 1, 'y': 6}, {'x': 2, 'y': 2},
                    {'x': 6, 'y': 6}, {'x': 6, 'y': 4}], // TODO не сортируется, должно быть наоборот по Y 4 потом 6
        board.getOtherHeroes());

    // getLaserMachines
    
    assertEquals([{'x':1,'y':4,'direction':'RIGHT'},{'x':3,'y':1,'direction':'DOWN'},
                {'x':3,'y':2,'direction':'UP'},{'x':4,'y':1,'direction':'LEFT'},
                    {'x':4,'y':7,'direction':'LEFT'},{'x':5,'y':1,'direction':'DOWN'},
                    {'x':6,'y':1,'direction':'RIGHT'},{'x':7,'y':1,'direction':'UP'}],
        board.getLaserMachines());

    // getLasers
    
    assertEquals([{'x':2,'y':4,'direction':'RIGHT'},{'x':5,'y':2,'direction':'UP'},
                {'x':5,'y':4,'direction':'DOWN'},{'x':6,'y':2,'direction':'LEFT'}],
        board.getLasers());

    // getWalls
    
    assertEquals([{'x':0,'y':0},{'x':0,'y':1},{'x':0,'y':2},{'x':0,'y':3},{'x':0,'y':4},
                {'x':0,'y':5},{'x':0,'y':6},{'x':0,'y':7},{'x':0,'y':8},{'x':1,'y':0},{'x':1,'y':8},
                {'x':2,'y':0},{'x':2,'y':8},{'x':3,'y':0},{'x':3,'y':8},{'x':4,'y':0},{'x':4,'y':8},
                {'x':5,'y':0},{'x':5,'y':8},{'x':6,'y':0},{'x':6,'y':8},{'x':7,'y':0},{'x':7,'y':8},
                {'x':8,'y':0},{'x':8,'y':1},{'x':8,'y':2},{'x':8,'y':3},{'x':8,'y':4},{'x':8,'y':5},
                {'x':8,'y':6},{'x':8,'y':7},{'x':8,'y':8}],
        board.getWalls());

    // getBoxes
    
    assertEquals([{'x': 3, 'y': 4}, {'x': 5, 'y': 3}, {'x': 5, 'y': 5}, {'x': 6, 'y': 4}],
        board.getBoxes());

    // getGold
  
    assertEquals([{'x': 2, 'y': 5}, {'x': 3, 'y': 7}, {'x': 5, 'y': 6}],
        board.getGold());

    // getStart
    
    assertEquals([{'x': 1, 'y': 7}],
        board.getStarts());

    // getZombieStart
    
    assertEquals([{'x': 6, 'y': 3}],
        board.getZombieStart());

    // getExit
    
    assertEquals([{'x': 3, 'y': 5}],
        board.getExits());

    // getHoles
    
    assertEquals([{'x': 2, 'y': 3}, {'x': 4, 'y': 4}, {'x': 6, 'y': 6}, {'x': 7, 'y': 7}],
        board.getHoles());

    // getBarriers
    
    assertEquals([{'x':0,'y':0},{'x':0,'y':1},{'x':0,'y':2},{'x':0,'y':3},{'x':0,'y':4},
                {'x':0,'y':5},{'x':0,'y':6},{'x':0,'y':7},{'x':0,'y':8},{'x':1,'y':0},{'x':1,'y':4},
                {'x':1,'y':8},{'x':2,'y':0},{'x':2,'y':3},{'x':2,'y':8},{'x':3,'y':0},{'x':3,'y':1},
                {'x':3,'y':2},{'x':3,'y':4},{'x':3,'y':8},{'x':4,'y':0},{'x':4,'y':1},{'x':4,'y':4},
                {'x':4,'y':7},{'x':4,'y':8},{'x':5,'y':0},{'x':5,'y':1},{'x':5,'y':3},{'x':5,'y':5},
                {'x':5,'y':8},{'x':6,'y':0},{'x':6,'y':1},{'x':6,'y':4},{'x':6,'y':6},{'x':6,'y':8},
                {'x':7,'y':0},{'x':7,'y':1},{'x':7,'y':7},{'x':7,'y':8},{'x':8,'y':0},{'x':8,'y':1},
                {'x':8,'y':2},{'x':8,'y':3},{'x':8,'y':4},{'x':8,'y':5},{'x':8,'y':6},{'x':8,'y':7},
                {'x':8,'y':8}],
        board.getBarriers());

    // isMyRobotAlive
    
    assertEquals(false,
        board.isMeAlive());

    // Direction

    assertEquals({'x': 0, 'y': 1}, Direction.UP.change(new Point(0, 0)));
    assertEquals({'x': 0, 'y':-1}, Direction.DOWN.change(new Point(0, 0)));
    assertEquals({'x':-1, 'y': 0}, Direction.LEFT.change(new Point(0, 0)));
    assertEquals({'x': 1, 'y': 0}, Direction.RIGHT.change(new Point(0, 0)));
}