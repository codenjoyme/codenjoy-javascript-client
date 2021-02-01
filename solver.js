var Direction = Direction | require('direction');
var Element = Element | require('elements');
var Point = Point | require('point');
var Board = Board | require('board');

var direction;

var DirectionSolver = function(board){

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