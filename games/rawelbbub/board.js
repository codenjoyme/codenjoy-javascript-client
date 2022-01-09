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

var RawelbbubBoard = module.exports = function(board){

    var Board = require('./../../engine/board.js');
    var Games = require('./../../engine/games.js');
    var Point = require('./../../engine/point.js');
    var Stuff = require('./../../engine/stuff.js');
    var Element = Games.require('./elements.js');

    var board = new Board(board);

    board.getHero = function() {
        var result = [];
        result = result.concat(board.findAll(Element.HERO_UP));
        result = result.concat(board.findAll(Element.HERO_DOWN));
        result = result.concat(board.findAll(Element.HERO_LEFT));
        result = result.concat(board.findAll(Element.HERO_RIGHT));
        if (result.lenght == 0) {
            return null;
        }
        return result[0];
    }

    board.isGameOver = function() {
        return board.getHero() == null;
    }

    board.getEnemies = function() {
        var result = [];
        result = result.concat(board.findAll(Element.AI_UP));
        result = result.concat(board.findAll(Element.AI_DOWN));
        result = result.concat(board.findAll(Element.AI_LEFT));
        result = result.concat(board.findAll(Element.AI_RIGHT));
        
        result = result.concat(board.findAll(Element.AI_PRIZE_UP));
        result = result.concat(board.findAll(Element.AI_PRIZE_DOWN));
        result = result.concat(board.findAll(Element.AI_PRIZE_LEFT));
        result = result.concat(board.findAll(Element.AI_PRIZE_RIGHT));
        
        result = result.concat(board.findAll(Element.OTHER_HERO_UP));
        result = result.concat(board.findAll(Element.OTHER_HERO_DOWN));
        result = result.concat(board.findAll(Element.OTHER_HERO_LEFT));
        result = result.concat(board.findAll(Element.OTHER_HERO_RIGHT));

        result = result.concat(board.findAll(Element.ENEMY_HERO_UP));
        result = result.concat(board.findAll(Element.ENEMY_HERO_DOWN));
        result = result.concat(board.findAll(Element.ENEMY_HERO_LEFT));
        result = result.concat(board.findAll(Element.ENEMY_HERO_RIGHT));
        return result;
    }

    board.getTorpedoes = function() {
        var result = [];
        result = result.concat(board.findAll(Element.TORPEDO_UP));
        result = result.concat(board.findAll(Element.TORPEDO_DOWN));
        result = result.concat(board.findAll(Element.TORPEDO_LEFT));
        result = result.concat(board.findAll(Element.TORPEDO_RIGHT));
        return result;
    }

    board.getBarriers = function() {
        var result = [];
        result = result.concat(board.findAll(Element.REEFS));
        result = result.concat(board.findAll(Element.ICEBERG_HUGE));
        result = result.concat(board.findAll(Element.ICEBERG_MEDIUM_LEFT));
        result = result.concat(board.findAll(Element.ICEBERG_MEDIUM_RIGHT));
        result = result.concat(board.findAll(Element.ICEBERG_MEDIUM_UP));
        result = result.concat(board.findAll(Element.ICEBERG_MEDIUM_DOWN));
        result = result.concat(board.findAll(Element.ICEBERG_SMALL_LEFT_LEFT));
        result = result.concat(board.findAll(Element.ICEBERG_SMALL_RIGHT_RIGHT));
        result = result.concat(board.findAll(Element.ICEBERG_SMALL_UP_UP));
        result = result.concat(board.findAll(Element.ICEBERG_SMALL_DOWN_DOWN));
        result = result.concat(board.findAll(Element.ICEBERG_SMALL_LEFT_RIGHT));
        result = result.concat(board.findAll(Element.ICEBERG_SMALL_UP_DOWN));
        result = result.concat(board.findAll(Element.ICEBERG_SMALL_UP_LEFT));
        result = result.concat(board.findAll(Element.ICEBERG_SMALL_UP_RIGHT));
        result = result.concat(board.findAll(Element.ICEBERG_SMALL_DOWN_LEFT));
        result = result.concat(board.findAll(Element.ICEBERG_SMALL_DOWN_RIGHT));
        return board.sort(result);
    }

    board.isBarrierAt = function(x, y) {
        if (new Point(x, y).isOutOf(board.size())) {
            return true;
        }

        return board.contains(board.getBarriers(), new Point(x, y));
    }

    board.toString = function() {
        return Stuff.format("Board:\n%s\n" +
            "Hero at: %s\n" +
            "Enemies at: %s\n" +
            "Torpedoes at: %s\n",
            board.boardAsString(),
            board.getHero(),
            board.getEnemies(),
            board.getTorpedoes()
        );
    }

    return board;
}