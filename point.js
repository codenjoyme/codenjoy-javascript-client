var Point = function (x, y) {
    return {
        equals : function (o) {
            return o.getX() == x && o.getY() == y;
        },

        toString : function() {
            return '[' + x + ',' + y + ']';
        },

        isOutOf : function(boardSize) {
            return x >= boardSize || y >= boardSize || x < 0 || y < 0;
        },

        getX : function() {
            return x;
        },

        getY : function() {
            return y;
        }
    }
};

var pt = function(x, y) {
    return new Point(x, y);
};

var LengthToXY = function(boardSize) {
    function inversionY(y) {
        return boardSize - 1 - y;
    }

    function inversionX(x) {
        return x;
    }

    return {
        getXY : function(length) {
            if (length == -1) {
                return null;
            }
            var x = inversionX(length % boardSize);
            var y = inversionY(Math.trunc(length / boardSize));
            return new Point(x, y);
        },

        getLength : function(x, y) {
            var xx = inversionX(x);
            var yy = inversionY(y);
            return yy*boardSize + xx;
        }
    };
};