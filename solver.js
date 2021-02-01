var games = require('games');
var Point = require('point');
var Direction = require('direction');
var Element = games.require('elements');
var Board = games.require('board');
var Utils = require('utils');

var direction;

var Solver = function(board){

    return {
        /**
         * @return next hero action
         */
        get : function() {
            var bomberman = board.getBomberman();

            // TODO your code here

            return Direction.ACT;
        }
    };
};