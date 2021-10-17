var Point = module.exports = function(x, y, direction, element) {

    var pt = function(x, y) {
        return new Point(x, y);
    }

    var equals = function(o) {
        return o.getX() == x && o.getY() == y;
    }

    var toString = function() {
        return '[' + x + ',' + y + (!!direction ? (',' + direction) : '') + ']';
    }

    var isOutOf = function(boardSize) {
        return x >= boardSize || y >= boardSize || x < 0 || y < 0;
    }

    var getX = function() {
        return x;
    }

    var getY = function() {
        return y;
    }

    var getElement= function(){
        return element
    }

    var moveTo = function(direction) {
        return pt(direction.changeX(x), direction.changeY(y));
    }

    var move= function(dx, dy) {
        x += dx;
        y += dy;
    }

    var shiftLeft = function(delta = 1) {
        return new Point(x - delta, y);
    }

    var shiftRight = function(delta = 1) {
        return new Point(x + delta, y);
    }

    var shiftTop = function(delta = 1) {
        return new Point(x, y + delta);
    }

    var shiftBottom = function(delta = 1) {
        return new Point(x, y - delta);
    }
    
    return {
        x,
        y,
        direction,
        element,
        equals,
        toString,
        isOutOf,
        getX,
        getY,
        getElement,
        moveTo,
        move,
        shiftLeft,
        shiftRight,
        shiftTop,
        shiftBottom,
    };
}