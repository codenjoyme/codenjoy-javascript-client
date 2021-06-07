/**
 * Choose game
 */
var Games = require('./games.js');
Games.init('bomberman');

var Point = require('./point.js');
var Direction = Games.require('./direction.js');
var Element = Games.require('./elements.js');
var Board = Games.require('./board.js');
var Stuff = require('./stuff.js');

var Solver = module.exports = {

    /**
     * paste here board page url from browser (board page) after registration
     */
    url : 'http://codenjoy.com:80/codenjoy-contest/board/player/3edq63tw0bq4w4iem7nb?code=1234567890123456789',

    /**
     * @return next hero action
     */
    get : function(board) {
        // TODO your code here

        return Direction.UP;
    }
};