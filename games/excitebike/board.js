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

var ExcitebikeBoard = module.exports = function(board){

    var Board = require('./../../engine/board.js');
    var Games = require('./../../engine/games.js');
    var Point = require('./../../engine/point.js');
    var Stuff = require('./../../engine/stuff.js');
    var Element = Games.require('./elements.js');

    var board = new Board(board);

    // Отступ от нижней границы в поинтах(10 полос на дороге по вертикали + 2 полосы ограждений)
    var MAX_Y_SIZE = 12;

    board.getMe = function() {
        var result = [];
        result = result.concat(board.findAll(Element.BIKE));
        result = result.concat(board.findAll(Element.BIKE_AT_ACCELERATOR));
        result = result.concat(board.findAll(Element.BIKE_AT_INHIBITOR));
        result = result.concat(board.findAll(Element.BIKE_AT_KILLED_BIKE));
        result = result.concat(board.findAll(Element.BIKE_AT_LINE_CHANGER_DOWN));
        result = result.concat(board.findAll(Element.BIKE_AT_LINE_CHANGER_UP));
        result = result.concat(board.findAll(Element.BIKE_AT_SPRINGBOARD_LEFT));
        result = result.concat(board.findAll(Element.BIKE_AT_SPRINGBOARD_LEFT_DOWN));
        result = result.concat(board.findAll(Element.BIKE_AT_SPRINGBOARD_RIGHT));
        result = result.concat(board.findAll(Element.BIKE_AT_SPRINGBOARD_RIGHT_DOWN));
        result = result.concat(board.findAll(Element.BIKE_FALLEN));
        result = result.concat(board.findAll(Element.BIKE_FALLEN_AT_ACCELERATOR));
        result = result.concat(board.findAll(Element.BIKE_FALLEN_AT_FENCE));
        result = result.concat(board.findAll(Element.BIKE_FALLEN_AT_INHIBITOR));
        result = result.concat(board.findAll(Element.BIKE_FALLEN_AT_LINE_CHANGER_DOWN));
        result = result.concat(board.findAll(Element.BIKE_FALLEN_AT_LINE_CHANGER_UP));
        result = result.concat(board.findAll(Element.BIKE_FALLEN_AT_OBSTACLE));
        result = result.concat(board.findAll(Element.BIKE_IN_FLIGHT_FROM_SPRINGBOARD));
        return result[0];
    }

    board.getOtherHeroes = function() {
        var result = [];
        result = result.concat(board.findAll(Element.OTHER_BIKE));
        result = result.concat(board.findAll(Element.OTHER_BIKE_AT_ACCELERATOR));
        result = result.concat(board.findAll(Element.OTHER_BIKE_AT_INHIBITOR));
        result = result.concat(board.findAll(Element.OTHER_BIKE_AT_KILLED_BIKE));
        result = result.concat(board.findAll(Element.OTHER_BIKE_AT_LINE_CHANGER_DOWN));
        result = result.concat(board.findAll(Element.OTHER_BIKE_AT_LINE_CHANGER_UP));
        result = result.concat(board.findAll(Element.OTHER_BIKE_AT_SPRINGBOARD_LEFT));
        result = result.concat(board.findAll(Element.OTHER_BIKE_AT_SPRINGBOARD_LEFT_DOWN));
        result = result.concat(board.findAll(Element.OTHER_BIKE_AT_SPRINGBOARD_RIGHT));
        result = result.concat(board.findAll(Element.OTHER_BIKE_AT_SPRINGBOARD_RIGHT_DOWN));
        result = result.concat(board.findAll(Element.OTHER_BIKE_FALLEN));
        result = result.concat(board.findAll(Element.OTHER_BIKE_FALLEN_AT_ACCELERATOR));
        result = result.concat(board.findAll(Element.OTHER_BIKE_FALLEN_AT_FENCE));
        result = result.concat(board.findAll(Element.OTHER_BIKE_FALLEN_AT_INHIBITOR));
        result = result.concat(board.findAll(Element.OTHER_BIKE_FALLEN_AT_LINE_CHANGER_DOWN));
        result = result.concat(board.findAll(Element.OTHER_BIKE_FALLEN_AT_LINE_CHANGER_UP));
        result = result.concat(board.findAll(Element.OTHER_BIKE_FALLEN_AT_OBSTACLE));
        result = result.concat(board.findAll(Element.OTHER_BIKE_IN_FLIGHT_FROM_SPRINGBOARD));
        return result;
    }

    board.getAccelerators = function() {
        var result = [];
        result = result.concat(board.findAll(Element.ACCELERATOR));
        return result;
    }

    board.getFences = function() {
        var result = [];
        result = result.concat(board.findAll(Element.FENCE));
        return result;
    }

    board.getInhibitors = function() {
        var result = [];
        result = result.concat(board.findAll(Element.INHIBITOR));
        return result;
    }

    board.getLineUpChangers = function() {
        var result = [];
        result = result.concat(board.findAll(Element.LINE_CHANGER_UP));
        return result;
    }

    board.getLineDownChangers = function() {
        var result = [];
        result = result.concat(board.findAll(Element.LINE_CHANGER_DOWN));
        return result;
    }

    board.getObstacles = function() {
        var result = [];
        result = result.concat(board.findAll(Element.OBSTACLE));
        return result;
    }

    board.getSpringboardDarkElements = function() {
        var result = [];
        result = result.concat(board.findAll(Element.SPRINGBOARD_LEFT));
        return result;
    }

    board.getSpringboardLightElements = function() {
        var result = [];
        result = result.concat(board.findAll(Element.SPRINGBOARD_RIGHT));
        return result;
    }

    board.getSpringboardLeftDownElements = function() {
        var result = [];
        result = result.concat(board.findAll(Element.SPRINGBOARD_LEFT_DOWN));
        return result;
    }

    board.getSpringboardRightDownElements = function() {
        var result = [];
        result = result.concat(board.findAll(Element.SPRINGBOARD_RIGHT_DOWN));
        return result;
    }

    board.getSpringboardLeftUpElements = function() {
        var result = [];
        result = result.concat(board.findAll(Element.SPRINGBOARD_LEFT_UP));
        return result;
    }

    board.getSpringboardRightUpElements = function() {
        var result = [];
        result = result.concat(board.findAll(Element.SPRINGBOARD_RIGHT_UP));
        return result;
    }

    board.getSpringboardTopElements = function() {
        var result = [];
        result = result.concat(board.findAll(Element.SPRINGBOARD_TOP));
        return result;
    }

    board.isGameOver = function() {
        return board.indexOf(Element.BIKE_FALLEN) != -1
            || board.indexOf(Element.BIKE_FALLEN_AT_ACCELERATOR) != -1
            || board.indexOf(Element.BIKE_FALLEN_AT_FENCE) != -1
            || board.indexOf(Element.BIKE_FALLEN_AT_INHIBITOR) != -1
            || board.indexOf(Element.BIKE_FALLEN_AT_LINE_CHANGER_DOWN) != -1
            || board.indexOf(Element.BIKE_FALLEN_AT_LINE_CHANGER_UP) != -1
            || board.indexOf(Element.BIKE_FALLEN_AT_OBSTACLE) != -1;
    }

    var isAt = function(x, y, element) {
        if (new Point(x, y).isOutOf(size)) {
            return false;
        }
        return getAt(x, y) == element;
    }

    board.checkNearMeManyMoves = function(directions, elements) {
        var point = board.getMe();
        if (point == null) {
            return false;
        }
        for(var direction of directions){
            point = direction.change(point)
        }
        return board.isAtMany(point.getX(), point.getY(), elements);
    }

    board.checkNearMe = function(direction, elements) {
        var me = board.getMe();
        if (me == null) {
            return false;
        }
        var atDirection = direction.change(me);
        return board.isAtMany(atDirection.getX(), atDirection.getY(), elements);
    }

    board.isOutOfField = function(x, y){
        return x < 0 || x > board.size || y < 0 || y > MAX_Y_SIZE;
    }

    board.isOutOfFieldRelativeToMe = function(direction) {
        var me = board.getMe();
        if (me == null) {
            return false;
        }
        var atDirection = direction.change(me);
        return board.isOutOfField(atDirection.getX(), atDirection.getY());
    }

    board._getAt = board.getAt;
    board.getAt = function(x, y) {
        var result = board._getAt(x, y);
        if (result == null) {
            result = Element.FENCE;
        }
        return result;
    }

    board.getBarriers = function() {
        var all = board.getFences();
        all = all.concat(board.getOtherHeroes());
        all = all.concat(board.getObstacles());
        return board.removeDuplicates(all);
    }

    board.isBarrierAt = function(x, y) {
        if (new Point(x, y).isOutOf(board.size)) {
            return true;
        }

        return board.contains(board.getBarriers(), new Point(x, y));
    }

    board.hasOtherBikeAt = function(x, y) {
        return board.isAnyOfAt(x, y,
            [Element.OTHER_BIKE, 
                Element.OTHER_BIKE_AT_ACCELERATOR, 
                Element.OTHER_BIKE_AT_INHIBITOR, 
                Element.OTHER_BIKE_AT_KILLED_BIKE, 
                Element.OTHER_BIKE_AT_LINE_CHANGER_DOWN, 
                Element.OTHER_BIKE_AT_LINE_CHANGER_UP, 
                Element.OTHER_BIKE_AT_SPRINGBOARD_LEFT, 
                Element.OTHER_BIKE_AT_SPRINGBOARD_LEFT_DOWN, 
                Element.OTHER_BIKE_AT_SPRINGBOARD_RIGHT, 
                Element.OTHER_BIKE_AT_SPRINGBOARD_RIGHT_DOWN,
                Element.OTHER_BIKE_FALLEN,
                Element.OTHER_BIKE_FALLEN_AT_ACCELERATOR,
                Element.OTHER_BIKE_FALLEN_AT_FENCE,
                Element.OTHER_BIKE_FALLEN_AT_INHIBITOR,
                Element.OTHER_BIKE_FALLEN_AT_LINE_CHANGER_DOWN,
                Element.OTHER_BIKE_FALLEN_AT_LINE_CHANGER_UP,
                Element.OTHER_BIKE_FALLEN_AT_OBSTACLE,
                Element.OTHER_BIKE_IN_FLIGHT_FROM_SPRINGBOARD]);
    }

    board.hasFenceAt = function(x, y) {
        if (new Point(x, y).isOutOf(board.size)) {
            return true;
        }
        return board.isAt(x, y, Element.FENCE);
    }

    board.hasInhibitorAt = function(x, y) {
        return board.isAt(x, y, Element.INHIBITOR);
    }

    board.hasAcceleratorAt = function(x, y) {
        return board.isAt(x, y, Element.ACCELERATOR);
    }

    board.hasObstacleAt = function(x, y) {
        return board.isAt(x, y, Element.OBSTACLE);
    }

    board.hasUpLineChangerAt = function(x, y) {
        return board.isAt(x, y, Element.LINE_CHANGER_UP);
    }

    board.hasDownLineChangerAt = function(x, y) {
        return board.isAt(x, y, Element.LINE_CHANGER_DOWN);
    }

    board.hasSpringboardDarkElementAt = function(x, y) {
        return board.isAt(x, y, Element.SPRINGBOARD_RIGHT);
    }

    board.hasSpringboardLightElementAt = function(x, y) {
        return board.isAt(x, y, Element.SPRINGBOARD_LEFT);
    }

    board.hasSpringboardLeftDownElementAt = function(x, y) {
        return board.isAt(x, y, Element.SPRINGBOARD_LEFT_DOWN);
    }

    board.hasSpringboardRightDownElementAt = function(x, y) {
        return board.isAt(x, y, Element.SPRINGBOARD_RIGHT_DOWN);
    }

    board.hasSpringboardTopElementAt = function(x, y) {
        return board.isAt(x, y, Element.SPRINGBOARD_TOP);
    }

    board.toString = function() {
        return Stuff.format("Board:\n%s\n" +
            "Me at: %s\n" +
            "Enemy bikes at: %s\n" +
            "Accelerators at: %s\n" +
            "Fences at: %s\n" +
            "Inhibitors at: %s\n" +
            "Line Up Changers at: %s\n" +
            "Line Down Changers at: %s\n" +
            "Obstacles at: %s\n" +
            "Springboard Dark Elements at: %s\n" +
            "Springboard Light Elements at: %s\n" +
            "Springboard Left Down Elements at: %s\n" +
            "Springboard Right Down Elements at: %s\n" +
            "Springboard Left Up Elements at: %s\n" +
            "Springboard Right Up Elements at: %s\n" +
            "Springboard Top Elements at: %s\n",
            board.boardAsString(),
            board.getMe(),
            board.getOtherHeroes(),
            board.getAccelerators(),
            board.getFences(),
            board.getInhibitors(),
            board.getLineUpChangers(),
            board.getLineDownChangers(),
            board.getObstacles(),
            board.getSpringboardDarkElements(),
            board.getSpringboardLightElements(),
            board.getSpringboardLeftDownElements(),
            board.getSpringboardRightDownElements(),
            board.getSpringboardLeftUpElements(),
            board.getSpringboardRightUpElements(),
            board.getSpringboardTopElements()
        );
    }

    return board;
}
