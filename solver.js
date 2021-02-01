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