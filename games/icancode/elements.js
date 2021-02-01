var ICanCodeElement = module.exports = function() {

    var Direction = require('./../../direction.js');

    var elements = [];
    var elementsTypes = [];
    var elementsByChar = {};
    var elementsByType = {};

    var el = function(char, type, direction) {
        var result = {
            char: char,
            type: type,
            direction: direction
        };

        elementsByChar[char] = result;

        if (!elementsByType[type]) {
            elementsByType[type] = [];
        }

        elementsByType[type].push(result);
        elements.push(result);

        if (elementsTypes.indexOf(type) == -1) {
            elementsTypes.push(type);
        }

        return result;
    }

    return {
        EMPTY: el('-', 'NONE'),
        FLOOR: el('.', 'NONE'),

        ANGLE_IN_LEFT: el('╔', 'WALL'),
        WALL_FRONT: el('═', 'WALL'),
        ANGLE_IN_RIGHT: el('┐', 'WALL'),
        WALL_RIGHT: el('│', 'WALL'),
        ANGLE_BACK_RIGHT: el('┘', 'WALL'),
        WALL_BACK: el('─', 'WALL'),
        ANGLE_BACK_LEFT: el('└', 'WALL'),
        WALL_LEFT: el('║', 'WALL'),
        WALL_BACK_ANGLE_LEFT: el('┌', 'WALL'),
        WALL_BACK_ANGLE_RIGHT: el('╗', 'WALL'),
        ANGLE_OUT_RIGHT: el('╝', 'WALL'),
        ANGLE_OUT_LEFT: el('╚', 'WALL'),
        SPACE: el(' ', 'WALL'),

        LASER_MACHINE_CHARGING_LEFT: el('˂', 'LASER_MACHINE', Direction.LEFT),
        LASER_MACHINE_CHARGING_RIGHT: el('˃', 'LASER_MACHINE', Direction.RIGHT),
        LASER_MACHINE_CHARGING_UP: el('˄', 'LASER_MACHINE', Direction.UP),
        LASER_MACHINE_CHARGING_DOWN: el('˅', 'LASER_MACHINE', Direction.DOWN),

        LASER_MACHINE_READY_LEFT: el('◄', 'LASER_MACHINE_READY', Direction.LEFT),
        LASER_MACHINE_READY_RIGHT: el('►', 'LASER_MACHINE_READY', Direction.RIGHT),
        LASER_MACHINE_READY_UP: el('▲', 'LASER_MACHINE_READY', Direction.UP),
        LASER_MACHINE_READY_DOWN: el('▼', 'LASER_MACHINE_READY', Direction.DOWN),

        START: el('S', 'START'),
        EXIT: el('E', 'EXIT'),
        HOLE: el('O', 'HOLE'),
        BOX: el('B', 'BOX'),
        ZOMBIE_START: el('Z', 'ZOMBIE_START'),
        GOLD: el('$', 'GOLD'),

        ROBO: el('☺', 'MY_ROBO'),
        ROBO_FALLING: el('o', 'MY_ROBO'),
        ROBO_FLYING: el('*', 'MY_ROBO'),
        ROBO_LASER: el('☻', 'MY_ROBO'),

        ROBO_OTHER: el('X', 'OTHER_ROBO'),
        ROBO_OTHER_FALLING: el('x', 'OTHER_ROBO'),
        ROBO_OTHER_FLYING: el('^', 'OTHER_ROBO'),
        ROBO_OTHER_LASER: el('&', 'OTHER_ROBO'),

        LASER_LEFT: el('←', 'LASER_LEFT', Direction.LEFT),
        LASER_RIGHT: el('→', 'LASER_RIGHT', Direction.RIGHT),
        LASER_UP: el('↑', 'LASER_UP', Direction.UP),
        LASER_DOWN: el('↓', 'LASER_DOWN', Direction.DOWN),

        FEMALE_ZOMBIE: el('♀', 'ZOMBIE'),
        MALE_ZOMBIE: el('♂', 'ZOMBIE'),
        ZOMBIE_DIE: el('✝', 'ZOMBIE_DIE'),

        getElements: function() {
            return elements.slice(0);
        },

        getElement: function(char) {
            var el = elementsByChar[char];
            if (!el) {
                throw "Element not found for: " + char;
            }
            return el;
        },

        getElementsTypes: function() {
            var elements = [];
            elementsTypes.forEach(function(e) {
                if (Array.isArray(e)) {
                    elements = elements.concat(e);
                } else {
                    elements.push(e);
                }
            });

            var result = [];
            elements.forEach(function(e) {
                if (result.indexOf(e) < 0) {
                    result.push(e);
                }
            });

            return result;
        },

        getElementsOfType: function(type) {
            return elementsByType[type];
        },

        isWall: function(element) {
            return element.type == 'WALL';
        }
    };
}();