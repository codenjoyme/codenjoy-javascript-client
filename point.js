var Point = module.exports = function (x, y, direction) {
    return {
        x: x,
        y: y,
        direction: direction,

        equals : function (o) {
            return o.getX() == x && o.getY() == y;
        },

        toString : function() {
            return '[' + x + ',' + y + (!!direction ? (',' + direction) : '') + ']';
        },

        isOutOf : function(boardSize) {
            return x >= boardSize || y >= boardSize || x < 0 || y < 0;
        },

        getX : function() {
            return x;
        },

        getY : function() {
            return y;
        },

        moveTo : function(direction) {
            return pt(direction.changeX(x), direction.changeY(y));
        },

        move: function(dx, dy) {
            x += dx;
            y += dy;
        }
    }
};

var pt = function(x, y) {
    return new Point(x, y);
};