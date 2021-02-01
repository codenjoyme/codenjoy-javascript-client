var Games = require('games');
var Direction = Games.require('direction');
var Point = require('point');
var Element = Games.require('elements');

const TetrisBoard = function(boardString) {
    const boardObj = JSON.parse(boardString);
    const board = boardObj && boardObj.layers[0];

    // Size of the glass
    const size = Math.sqrt(board.length);
    // Coordinates of lower left corner of the current figure
    const currentFigurePoint = new Point(boardObj.currentFigurePoint)
    //Type of the current figure. One of Elements
    const currentFigureType = boardObj.currentFigureType
    // Types of figures what will be after current figure
    const futureFigures = boardObj.futureFigures

    const xyl = LengthToXY(size)

    const toString = function() {
        return `currentFigure: ${ currentFigureType } at ${ currentFigurePoint.toString() }
    futureFigures: ${ futureFigures }
    board: ${ boardAsString() }
    `
    }

    const boardAsString = function() {
        let result = "";
        for (let i = 0; i < size; i++) {
            result += board.substring(i * size, (i + 1) * size);
            result += "\n";
        }
        return result;
    };

    // Is element at specified coordinates
    // args [Point] point of position
    // args [String] element of Elements which will be compare
    // return [Boolean] if element at position
    const isAt = function(point, element) {
        if (point.isOutOf(size)) return false;

        return getAt(point) === element;
    };

    // Get element at specified coordinates
    // args [Point] point of position
    // return [String] element of Elements
    const getAt = function(point) {
        if (point.isOutOf(size)) return;

        return board.charAt(xyl.getLength(point.getX(), point.getY()));
    };

    // Find all specified elements
    // args [String] element of Elements
    // return [Array[Point]] list of elements on the glass
    const findAll = function(element) {
        let result = [];
        for (let i = 0; i < size ** 2; i++) {
            let point = xyl.getXY(i);
            if (isAt(point, element)) {
                result.push(point);
            }
        }
        return result;
    };

    // Is any element at specified coordinates except Element.NONE
    // args [Point] point of position
    // return [Boolean] if any element at position except Element.NONE
    const isAnyOfAt = function(point) {
        if (point.isOutOf(size)) return false;

        for (let element of Element.values()) {
            if (element === Element.NONE) continue;
            if (isAt(point, element)) {
                return true;
            }
        }
        return false;
    };

    // Is any specified element around position except Element.NONE
    // args [Point] point of position
    // args [String] element of Elements which will be compare
    // return [Boolean] if any specified element around position
    const isNear = function(point, element) {
        return  isAt(point.right(), element) ||
            isAt(point.left(), element) ||
            isAt(point.top(), element) ||
            isAt(point.bottom(), element);
    };

    // Get any elements around position Except Element.None
    // args [Point] point of position
    // return [Array[String]] elements around position except Element.NONE
    const getNear = function(point) {
        let res = []
        res.push(getAt(point.top()))
        res.push(getAt(point.right()))
        res.push(getAt(point.bottom()))
        res.push(getAt(point.left()))

        return res.filter(function(el) {
            return !!el && el !== Element.NONE
        })
    }

    // Count of elements around position
    // args [Point] point of position
    // args [Element] element of Elements which will be compare
    // return [Number] count of elements around position
    const countNear = function(point, element) {
        let count = 0;
        if (isAt(point.top(),      element)) count++;
        if (isAt(point.right(),   element)) count++;
        if (isAt(point.bottom(),    element)) count++;
        if (isAt(point.left(),    element)) count++;
        return count;
    };

    // Is free space at specified position
    // args [Point] point of position
    // return [Boolean] is free space at position
    const isFreeAt = function (point) {
        return isAt(point, Element.NONE);
    }

    // Find all free spaces
    // return [Array[Point]] list of all free spaces on the glass
    const findAllFreeSpace = function () {
        return findAll(Element.NONE)
    }

    // How far specified element from position (strait direction)
    // return distance from point to the end of glass if no any element in specified direction
    // args [Point] point of position
    // args [String] one of ['top', 'bottom', 'left', 'right']
    // args [String] element of Elements which will be compare
    // return [Number] distance to the element in specified direction or distance from point to the end of glass
    const getDistanceToNextElementByDirection = function (point, direction, element) {
        if (!['top', 'bottom', 'left', 'right'].includes(direction)) throw new Error('Direction can be one of [top, bottom, left, right]')
        let distance = 1;

        const getDistance = (point) => {
            const newPoint = point[direction]();

            if (newPoint.isOutOf(size)) return --distance;

            if (isAt(newPoint, element)) {
                return distance;
            } else {
                distance++;
                return getDistance(newPoint)
            }
        };

        return getDistance(point);
    }

    return {
        size,
        currentFigurePoint,
        currentFigureType,
        futureFigures,
        toString,
        isAt,
        getAt,
        boardAsString,
        findAll,
        isAnyOfAt,
        isNear,
        getNear,
        countNear,
        LengthToXY,
        isFreeAt,
        findAllFreeSpace,
        getDistanceToNextElementByDirection,
    }
};