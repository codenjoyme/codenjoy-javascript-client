/**
 * Choose game
 */
var Games = require('games');
Games.gameName = 'tetris';

var Point = require('point');
var Direction = Games.require('direction');
var Element = Games.require('elements');
var Board = Games.require('board');
var Stuff = require('stuff');

var Solver = {

    /**
     * paste here board page url from browser (board page) after registration
     */
    url : 'http://127.0.0.1:8080/codenjoy-contest/board/player/demo2?code=8849690732208865792',

    /**
     * @return next hero action
     */
    get : function(board) {
        // TODO your code here

        return Direction.ACT;
    }
};