var LengthToXY = module.exports = function(boardSize) {

    var Point = require('./point.js');

    function inversionY(y) {
        return boardSize - 1 - y;
    }

    function inversionX(x) {
        return x;
    }

    var getXY = function(length) {
        if (length == -1) {
            return null;
        }
        var x = inversionX(length % boardSize);
        var y = inversionY(Math.trunc(length / boardSize));
        return new Point(x, y);
    }

    var getLength = function(x, y) {
        var xx = inversionX(x);
        var yy = inversionY(y);
        return yy*boardSize + xx;
    }

    return {
        getXY,
        getLength
    };
}