var _init = function(index, dx, dy, name){

    var changeX = function(x) {
        return x + dx;
    };

    var changeY = function(y) {
        return y + dy;
    };

    var change = function(point) {
        return point.moveTo(this);
    };

    var inverted = function() {
        switch (this) {
            case Direction.UP : return Direction.DOWN;
            case Direction.DOWN : return Direction.UP;
            case Direction.LEFT : return Direction.RIGHT;
            case Direction.RIGHT : return Direction.LEFT;
            default : return Direction.STOP;
        }
    };

    var toString = function() {
        return name;
    };

    return {
        changeX : changeX,
        changeY : changeY,
        change : change,
        inverted : inverted,
        toString : toString,
        getIndex : function() {
            return index;
        }
    };
};

var Direction = module.exports = {
    STOP : _init(0, 0, 0, ''),

    _init : _init

    // others will be added later
};

Direction.values = function() {
    var result = [];
    for (var key in Direstion) {
        result.push(Direstion[key]);
    }
    return result;
};

Direction.valueOf = function(index) {
    var directions = Direction.values();
    for (var i in directions) {
        var direction = directions[i];
        if (direction.getIndex() == index) {
            return direction;
        }
    }
    return Direction.STOP;
};