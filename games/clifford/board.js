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

var CliffordBoard = module.exports = function(board){

    var Board = require('./../../engine/board.js');
    var Games = require('./../../engine/games.js');
    var Point = require('./../../engine/point.js');
    var Stuff = require('./../../engine/stuff.js');
    var Element = Games.require('./elements.js');

    var board = new Board(board);

    board.getMe = function() {
        var result = [];
        result = result.concat(board.findAll(Element.HERO_DIE));
        result = result.concat(board.findAll(Element.HERO_CRACK_LEFT));
        result = result.concat(board.findAll(Element.HERO_CRACK_RIGHT));
        result = result.concat(board.findAll(Element.HERO_FALL_RIGHT));
        result = result.concat(board.findAll(Element.HERO_FALL_LEFT));
        result = result.concat(board.findAll(Element.HERO_LADDER));
        result = result.concat(board.findAll(Element.HERO_LEFT));
        result = result.concat(board.findAll(Element.HERO_RIGHT));
        result = result.concat(board.findAll(Element.HERO_PIPE_LEFT));
        result = result.concat(board.findAll(Element.HERO_PIPE_RIGHT));
        result = result.concat(board.findAll(Element.HERO_PIT_LEFT));
        result = result.concat(board.findAll(Element.HERO_PIT_RIGHT));
        // mask
        result = result.concat(board.findAll(Element.HERO_MASK_DIE));
        result = result.concat(board.findAll(Element.HERO_MASK_CRACK_LEFT));
        result = result.concat(board.findAll(Element.HERO_MASK_CRACK_RIGHT));
        result = result.concat(board.findAll(Element.HERO_MASK_FALL_RIGHT));
        result = result.concat(board.findAll(Element.HERO_MASK_FALL_LEFT));
        result = result.concat(board.findAll(Element.HERO_MASK_LADDER));
        result = result.concat(board.findAll(Element.HERO_MASK_LEFT));
        result = result.concat(board.findAll(Element.HERO_MASK_RIGHT));
        result = result.concat(board.findAll(Element.HERO_MASK_PIPE_LEFT));
        result = result.concat(board.findAll(Element.HERO_MASK_PIPE_RIGHT));
        result = result.concat(board.findAll(Element.HERO_MASK_PIT_LEFT));
        result = result.concat(board.findAll(Element.HERO_MASK_PIT_RIGHT));
        return result[0];
    }

    board.getOtherHeroes = function() {
        var result = [];
        result = result.concat(board.findAll(Element.OTHER_HERO_DIE));
        result = result.concat(board.findAll(Element.OTHER_HERO_CRACK_LEFT));
        result = result.concat(board.findAll(Element.OTHER_HERO_CRACK_RIGHT));
        result = result.concat(board.findAll(Element.OTHER_HERO_FALL_RIGHT));
        result = result.concat(board.findAll(Element.OTHER_HERO_FALL_LEFT));
        result = result.concat(board.findAll(Element.OTHER_HERO_LADDER));
        result = result.concat(board.findAll(Element.OTHER_HERO_LEFT));
        result = result.concat(board.findAll(Element.OTHER_HERO_RIGHT));
        result = result.concat(board.findAll(Element.OTHER_HERO_PIPE_LEFT));
        result = result.concat(board.findAll(Element.OTHER_HERO_PIPE_RIGHT));
        result = result.concat(board.findAll(Element.OTHER_HERO_PIT_LEFT));
        result = result.concat(board.findAll(Element.OTHER_HERO_PIT_RIGHT));
        // mask
        result = result.concat(board.findAll(Element.OTHER_HERO_MASK_DIE));
        result = result.concat(board.findAll(Element.OTHER_HERO_MASK_CRACK_LEFT));
        result = result.concat(board.findAll(Element.OTHER_HERO_MASK_CRACK_RIGHT));
        result = result.concat(board.findAll(Element.OTHER_HERO_MASK_FALL_RIGHT));
        result = result.concat(board.findAll(Element.OTHER_HERO_MASK_FALL_LEFT));
        result = result.concat(board.findAll(Element.OTHER_HERO_MASK_LADDER));
        result = result.concat(board.findAll(Element.OTHER_HERO_MASK_LEFT));
        result = result.concat(board.findAll(Element.OTHER_HERO_MASK_RIGHT));
        result = result.concat(board.findAll(Element.OTHER_HERO_MASK_PIPE_LEFT));
        result = result.concat(board.findAll(Element.OTHER_HERO_MASK_PIPE_RIGHT));
        result = result.concat(board.findAll(Element.OTHER_HERO_MASK_PIT_LEFT));
        result = result.concat(board.findAll(Element.OTHER_HERO_MASK_PIT_RIGHT));
        return result;
    }

    board.getEnemyHeroes = function() {
        var result = [];
        result = result.concat(board.findAll(Element.ENEMY_HERO_DIE));
        result = result.concat(board.findAll(Element.ENEMY_HERO_CRACK_LEFT));
        result = result.concat(board.findAll(Element.ENEMY_HERO_CRACK_RIGHT));
        result = result.concat(board.findAll(Element.ENEMY_HERO_FALL_RIGHT));
        result = result.concat(board.findAll(Element.ENEMY_HERO_FALL_LEFT));
        result = result.concat(board.findAll(Element.ENEMY_HERO_LADDER));
        result = result.concat(board.findAll(Element.ENEMY_HERO_LEFT));
        result = result.concat(board.findAll(Element.ENEMY_HERO_RIGHT));
        result = result.concat(board.findAll(Element.ENEMY_HERO_PIPE_LEFT));
        result = result.concat(board.findAll(Element.ENEMY_HERO_PIPE_RIGHT));
        result = result.concat(board.findAll(Element.ENEMY_HERO_PIT_LEFT));
        result = result.concat(board.findAll(Element.ENEMY_HERO_PIT_RIGHT));
        // mask
        result = result.concat(board.findAll(Element.ENEMY_HERO_MASK_DIE));
        result = result.concat(board.findAll(Element.ENEMY_HERO_MASK_CRACK_LEFT));
        result = result.concat(board.findAll(Element.ENEMY_HERO_MASK_CRACK_RIGHT));
        result = result.concat(board.findAll(Element.ENEMY_HERO_MASK_FALL_RIGHT));
        result = result.concat(board.findAll(Element.ENEMY_HERO_MASK_FALL_LEFT));
        result = result.concat(board.findAll(Element.ENEMY_HERO_MASK_LADDER));
        result = result.concat(board.findAll(Element.ENEMY_HERO_MASK_LEFT));
        result = result.concat(board.findAll(Element.ENEMY_HERO_MASK_RIGHT));
        result = result.concat(board.findAll(Element.ENEMY_HERO_MASK_PIPE_LEFT));
        result = result.concat(board.findAll(Element.ENEMY_HERO_MASK_PIPE_RIGHT));
        result = result.concat(board.findAll(Element.ENEMY_HERO_MASK_PIT_LEFT));
        result = result.concat(board.findAll(Element.ENEMY_HERO_MASK_PIT_RIGHT));
        return result;
    }

    board.getRobbers = function() {
        var result = [];
        result = result.concat(board.findAll(Element.ROBBER_LADDER));
        result = result.concat(board.findAll(Element.ROBBER_LEFT));
        result = result.concat(board.findAll(Element.ROBBER_RIGHT));
        result = result.concat(board.findAll(Element.ROBBER_FALL_LEFT));
        result = result.concat(board.findAll(Element.ROBBER_FALL_RIGHT));
        result = result.concat(board.findAll(Element.ROBBER_PIPE_LEFT));
        result = result.concat(board.findAll(Element.ROBBER_PIPE_RIGHT));
        result = result.concat(board.findAll(Element.ROBBER_PIT_LEFT));
        result = result.concat(board.findAll(Element.ROBBER_PIT_RIGHT));
        return result;
    }

    board.getClues = function() {
        var result = [];
        result = result.concat(board.findAll(Element.CLUE_KNIFE));
        result = result.concat(board.findAll(Element.CLUE_GLOVE));
        result = result.concat(board.findAll(Element.CLUE_RING));
        return result;
    }

    board.getPotions = function() {
        var result = [];
        result = result.concat(board.findAll(Element.MASK_POTION));
        return result;
    }

    board.getWalls = function() {
        var result = [];
        result = result.concat(board.findAll(Element.BRICK));
        result = result.concat(board.findAll(Element.STONE));
        return result;
    }

    board.getLadders = function() {
        var result = [];
        result = result.concat(board.findAll(Element.LADDER));
        result = result.concat(board.findAll(Element.HERO_LADDER));
        result = result.concat(board.findAll(Element.HERO_MASK_LADDER));
        result = result.concat(board.findAll(Element.OTHER_HERO_LADDER));
        result = result.concat(board.findAll(Element.OTHER_HERO_MASK_LADDER));
        result = result.concat(board.findAll(Element.ENEMY_HERO_LADDER));
        result = result.concat(board.findAll(Element.ENEMY_HERO_MASK_LADDER));
        return result;
    }

    board.getPipes = function() {
        var result = [];
        result = result.concat(board.findAll(Element.PIPE));
        result = result.concat(board.findAll(Element.HERO_PIPE_LEFT));
        result = result.concat(board.findAll(Element.HERO_PIPE_RIGHT));
        result = result.concat(board.findAll(Element.HERO_MASK_PIPE_LEFT));
        result = result.concat(board.findAll(Element.HERO_MASK_PIPE_RIGHT));
        result = result.concat(board.findAll(Element.OTHER_HERO_MASK_PIPE_LEFT));
        result = result.concat(board.findAll(Element.OTHER_HERO_MASK_PIPE_RIGHT));
        result = result.concat(board.findAll(Element.ENEMY_HERO_MASK_PIPE_LEFT));
        result = result.concat(board.findAll(Element.ENEMY_HERO_MASK_PIPE_RIGHT));
        return result;
    }

    board.getDoors = function() {
        var result = [];
        result = result.concat(board.findAll(Element.OPENED_DOOR_GOLD));
        result = result.concat(board.findAll(Element.OPENED_DOOR_SILVER));
        result = result.concat(board.findAll(Element.OPENED_DOOR_BRONZE));
        result = result.concat(board.findAll(Element.CLOSED_DOOR_GOLD));
        result = result.concat(board.findAll(Element.CLOSED_DOOR_SILVER));
        result = result.concat(board.findAll(Element.CLOSED_DOOR_BRONZE));
        return result;
    }

    board.getKeys = function() {
        var result = [];
        result = result.concat(board.findAll(Element.KEY_GOLD));
        result = result.concat(board.findAll(Element.KEY_SILVER));
        result = result.concat(board.findAll(Element.KEY_BRONZE));
        return result;
    }

    board.isGameOver = function() {
        var result = [];
        result = result.concat(board.findAll(Element.HERO_DIE));
        result = result.concat(board.findAll(Element.HERO_MASK_DIE));
        return result.length > 0;
    }

    board.getBarriers = function() {
        var all = board.getWalls();
        all = all.concat(board.getRobbers());
        all = all.concat(board.getOtherHeroes());
        all = all.concat(board.getEnemyHeroes());
        all = all.concat(board.getWalls());
        return board.removeDuplicates(all);
    };

    board.isBarrierAt = function(x, y) {
        if (new Point(x, y).isOutOf(board.size())) {
            return true;
        }

        return board.contains(board.getBarriers(), new Point(x, y));
    }
    
    board.toString = function() {
        return Stuff.format("Board:\n%s\n" +
            "Hero at: %s\n" +
            "Other heroes at: %s\n" +
            "Enemy heroes at: %s\n" +
            "Robbers at: %s\n" +
            "Mask potions at: %s\n" +
            "Keys at: %s\n",
            board.boardAsString(),
            board.getMe(),
            board.getOtherHeroes(),
            board.getEnemyHeroes(),
            board.getRobbers(),
            board.getPotions(),
            board.getKeys()
        );
    }

    return board;
}