var TetrisTest = module.exports = function(){
	
	var Games = require('./../../games.js');
	var Direction = Games.require('./direction.js');
	var Point = require('./../../point.js');
	var Board = Games.require('./board.js');
	var Element = Games.require('./elements.js');
	
	describe('Point function', () => {
	  let point;

	  beforeEach(() => {
		point = new Point({ x: 0, y: 0 })
	  })

	  test('Should be defined', () => {
		expect(Point).toBeDefined()
	  });

	  test('Should raise error without coordinates', () => {
		let point;
		expect(() => point = new Point()).toThrowError('X and Y are required and should be a number')
		expect(point).not.toBeDefined();
	  })

	  test('Should contains specified methods', () => {
		const methods = Object.getOwnPropertyNames(point);
		expect(methods).toContain('equals');
		expect(methods).toContain('getX');
		expect(methods).toContain('getY');
		expect(methods).toContain('toString');
		expect(methods).toContain('top');
		expect(methods).toContain('bottom');
		expect(methods).toContain('left');
		expect(methods).toContain('right');
		expect(methods).toContain('isOutOf');
	  });

	  describe('Equals method', () => {
		test('Should be defined', () => {
		  expect(point.equals).toBeDefined();
		});

		test('Should return true', () => {
		  const point2 = new Point({ x: 0, y: 0 });
		  expect(point.equals(point2)).toBeTruthy();
		})

		test('Should return false', () => {
		  const point2 = new Point({ x: 0, y: 1 })
		  const point3 = new Point({ x: 1, y: 0 })
		  expect(point.equals(point2)).toBeFalsy();
		  expect(point.equals(point3)).toBeFalsy();
		})
	  });

	  describe('getX method', () => {
		test('Should be defined', () => {
		  expect(point.getX).toBeDefined();
		});

		test('Should return correct x coordinates', () => {
		  const point = new Point({ x: 111, y: 0 });
		  expect(point.getX()).toBe(111);
		});
	  })

	  describe('getY method', () => {
		test('Should be defined', () => {
		  expect(point.getY).toBeDefined();
		});

		test('Should return correct y coordinates', () => {
		  const point = new Point({ x: 0, y: 222 });
		  expect(point.getY()).toBe(222);
		})
	  });

	  describe('toString method', () => {
		test('Should be defined', () => {
		  expect(point.toString).toBeDefined();
		});

		test('Should return correct value', () => {
		  const coords = { x: 1, y: 2 }
		  const point = new Point(coords);
		  const answer =  `[${ coords.x }, ${ coords.y }]`

		  expect(point.toString()).toBe(answer)
		})
	  });

	  describe('top method', () => {
		test('Should be defined', () => {
		  expect(point.top).toBeDefined();
		});

		test('Should return point above itself by 1', () => {
		  const point = new Point({x: 1, y: 1});
		  const newPoint = point.top();
		  expect(newPoint.getX()).toBe(1);
		  expect(newPoint.getY()).toBe(2)
		})
	  });

	  describe('bottom method', () => {
		test('Should be defined', () => {
		  expect(point.bottom).toBeDefined();
		});

		test('Should return point below itself by 1', () => {
		  const point = new Point({x: 1, y: 1});
		  const newPoint = point.bottom();
		  expect(newPoint.getX()).toBe(1);
		  expect(newPoint.getY()).toBe(0)
		})
	  });

	  describe('left method', () => {
		test('Should be defined', () => {
		  expect(point.left).toBeDefined();
		});

		test('Should return point to the left from itself by 1', () => {
		  const point = new Point({x: 1, y: 1});
		  const newPoint = point.left();
		  expect(newPoint.getX()).toBe(0);
		  expect(newPoint.getY()).toBe(1)
		})
	  });

	  describe('right method', () => {
		test('Should be defined', () => {
		  expect(point.right).toBeDefined();
		});

		test('Should return point to the right from itself by 1', () => {
		  const point = new Point({x: 1, y: 1});
		  const newPoint = point.right();
		  expect(newPoint.getX()).toBe(2);
		  expect(newPoint.getY()).toBe(1)
		})
	  });

	  describe('isOutOf method', () => {
		test('Should be defined', () => {
		  expect(point.isOutOf).toBeDefined();
		});

		test('Should return false if point is not out of board', () => {
		  const size = 5;
		  const point1 = new Point({ x: 0, y: 0 });
		  const point2 = new Point({ x: 2, y: 2 });
		  const point3 = new Point({ x: 0, y: 4 });
		  const point4 = new Point({ x: 4, y: 0 });
		  const point5 = new Point({ x: 4, y: 4 });

		  expect(point1.isOutOf(size)).toBeFalsy();
		  expect(point2.isOutOf(size)).toBeFalsy();
		  expect(point3.isOutOf(size)).toBeFalsy();
		  expect(point4.isOutOf(size)).toBeFalsy();
		  expect(point5.isOutOf(size)).toBeFalsy();
		});

		test('Should return true if point is out of board', () => {
		  const size = 5;
		  const point1 = new Point({ x: -1, y: 0 });
		  const point2 = new Point({ x: 0, y: -1 });
		  const point3 = new Point({ x: -1, y: -1 });
		  const point4 = new Point({ x: 5, y: 0 });
		  const point5 = new Point({ x: 0, y: 5 });
		  const point6 = new Point({ x: 5, y: 5 });
		  const point7 = new Point({ x: 12, y: 12 });

		  expect(point1.isOutOf(size)).toBeTruthy();
		  expect(point2.isOutOf(size)).toBeTruthy();
		  expect(point3.isOutOf(size)).toBeTruthy();
		  expect(point4.isOutOf(size)).toBeTruthy();
		  expect(point5.isOutOf(size)).toBeTruthy();
		  expect(point6.isOutOf(size)).toBeTruthy();
		  expect(point7.isOutOf(size)).toBeTruthy();
		})
	  })
	})

	describe('Board function', () => {
	  let board;
	  const boardString = '..................' +
						'..................' +
						'..................' +
						'..................' +
						'..................' +
						'..................' +
						'..................' +
						'..................' +
						'..................' +
						'..................' +
						'..................' +
						'..................' +
						'..................' +
						'..................' +
						'.ZZ...............' +
						'..ZZ.........Z....' +
						'OOI......OO.ZZSST.' +
						'OOI.IIII.OO.ZSSTTT';

	  const boardObj = {
		currentFigureType: "O",
		futureFigures: ["O", "O", "O", "O"],
		layers: [boardString],
		currentFigurePoint: { x: 0, y: 0 },
		levelProgress: { total: 0, current: 1, lastPassed: 0 }
	  }

	  beforeEach(() => {
		board = new Board(JSON.stringify(boardObj))
	  });

	  test('Should be defined', () => {
		expect(Board).toBeDefined();
	  });

	  describe('isAt method', () => {
		test('Should be defined', () => {
		  expect(board.isAt).toBeDefined();
		});

		test('Should return true if YELLOW figure at 0,0 coords', () => {
		  const point = new Point({ x: 0, y: 0 });
		  expect(board.isAt(point, Element.YELLOW)).toBeTruthy();
		});

		test('Should return true if RED figure at 12,1 coords', () => {
		  const point = new Point({ x: 12, y: 1 });
		  expect(board.isAt(point, Element.RED)).toBeTruthy();
		});

		test('Should return false if RED figure is not at 0,0 coords', () => {
		  const point = new Point({ x: 0, y: 0 });
		  expect(board.isAt(point, Element.RED)).toBeFalsy();
		});
	  });

	  describe('getAt method', () => {
		test('Should be defined', () => {
		  expect(board.getAt).toBeDefined();
		});

		test('Should return BLUE figure at 2,3 coords', () => {
		  const point = new Point({ x: 2, y: 3 });
		  expect(board.getAt(point)).toBe(Element.RED);
		});

		test('Should return NONE element if no figure at 3,0 coords', () => {
		  const point = new Point({ x: 3, y: 0 });
		  expect(board.getAt(point)).toBe(Element.NONE);
		});

		test('Should return undefined if position out of the board', () => {
		  const point1 = new Point({ x: -1, y: -1 });
		  const point2 = new Point({ x: 18, y: 18 });
		  expect(board.getAt(point1)).not.toBeDefined();
		  expect(board.getAt(point2)).not.toBeDefined();
		});
	  });

	  describe('findAll method', () => {
		test('Should be defined', () => {
		  expect(board.findAll).toBeDefined();
		});

		test('Should return array with 8 points of YELLOW element', () => {
		  const result = [
			  new Point({ x: 0, y: 1 }),
			  new Point({ x: 1, y: 1 }),
			  new Point({ x: 9, y: 1 }),
			  new Point({ x: 10, y: 1 }),
			  new Point({ x: 0, y: 0 }),
			  new Point({ x: 1, y: 0 }),
			  new Point({ x: 9, y: 0 }),
			  new Point({ x: 10, y: 0 }),
		  ];
		  const answer = board.findAll(Element.YELLOW);

		  expect(answer.length).toBe(result.length);
		  answer.forEach((item, index) => {
			expect(item.getX()).toBe(result[index].getX());
			expect(item.getY()).toBe(result[index].getY())
		  })
		});

		test('Should return empty array if element does not exist', () => {
		  expect(board.findAll(Element.CYAN)).toEqual([])
		})
	  });

	  describe('isAnyOfAt method', () => {
		test('Should be defined', () => {
		  expect(board.isAnyOfAt).toBeDefined();
		});

		test('Should return true if any figure at 17,0', () => {
		  const point = new Point({ x: 17, y: 0 });
		  expect(board.isAnyOfAt(point)).toBeTruthy();
		});

		test('Should return false if any figure not at 5,5', () => {
		  const point = new Point({ x: 5, y: 5 })
		  expect(board.isAnyOfAt(point)).toBeFalsy();
		})
	  });

	  describe('isNear method', () => {
		test('Should be defined', () => {
		  expect(board.isNear).toBeDefined();
		});

		test('Should return true if RED figure near with 13,2', () => {
		  const point1 = new Point({ x: 13, y: 2 });
		  const point2 = new Point({ x: 1, y: 3 });

		  expect(board.isNear(point1, Element.RED)).toBeTruthy();
		  expect(board.isNear(point2, Element.RED)).toBeTruthy();
		});

		test('Should return false if BLUE figure not near with 0,3', () => {
		  const point = new Point({ x: 0, y: 3 });
		  expect(board.isNear(point, Element.BLUE)).toBeFalsy();
		})
	  });

	  describe('getNear method', () => {
		test('Should be defined', () => {
		  expect(board.getNear).toBeDefined();
		});

		test('Should return array with 4 elements which near with 13,1', () => {
		  const result = [
			Element.RED,
			Element.GREEN,
			Element.GREEN,
			Element.RED
		  ];

		  const point = new Point({ x: 13, y: 1 })

		  expect(board.getNear(point)).toEqual(result);
		});

		test('Should return array with 1 element which near with 13,2', () => {
		  const point = new Point({ x: 13, y: 2 });

		  expect(board.getNear(point)).toEqual([Element.RED])
		});

		test('Should return empty array for ', () => {
		  let board;
		  const boardString = '..................' +
			  '..................' +
			  '..................' +
			  '..................' +
			  '..................' +
			  '..................' +
			  '..................' +
			  '..................' +
			  '..................' +
			  '..................' +
			  '..................' +
			  '..................' +
			  '..................' +
			  '..................' +
			  '..I...L...........' +
			  '..I..........Z....' +
			  'OOI......OO.ZZSST.' +
			  'OOI.II.I.OO.ZSSTTT';

		  const boardObj = {
			currentFigureType: "O",
			futureFigures: ["O", "O", "O", "O"],
			layers: [boardString],
			currentFigurePoint: { x: 0, y: 0 },
			levelProgress: { total: 0, current: 1, lastPassed: 0 }
		  };
		  board = new Board(JSON.stringify(boardObj));

		  const point1 = new Point({ x: 7, y: 0 });
		  const point2 = new Point({ x: 6, y: 3 });

		  expect(board.getNear(point1)).toEqual([]);
		  expect(board.getNear(point2)).toEqual([]);
		})
	  });

	  describe('countNear method', () => {
		test('Should be defined', () => {
		  expect(board.countNear).toBeDefined();
		});

		test('Should return 2 for PURPLE element', () => {
		  const point1 = new Point({ x: 17, y: 1 });
		  expect(board.countNear(point1, Element.PURPLE)).toBe(2);

		  const point2 = new Point({ x: 15, y: 1 })
		  expect(board.countNear(point2, Element.PURPLE))
		});

		test('Should return 0 for ORANGE element', () => {
		  const point = new Point({ x: 13, y: 1 });
		  expect(board.countNear(point, Element.ORANGE)).toBe(0)
		})
	  });

	  describe('isFreeAt method', () => {
		test('Should be defined', () => {
		  expect(board.isFreeAt).toBeDefined();
		});

		test('Should return true at 2,7', () => {
		  const point = new Point({ x: 2, y: 7 });
		  expect(board.isFreeAt(point)).toBeTruthy();
		});

		test('Should return false at 0,1', () => {
		  const point = new Point({ x: 0, y: 1 })
		  expect(board.isFreeAt(point)).toBeFalsy();
		})
	  });

	  describe('findAllFreeSpace method', () => {
		test('Should be defined', () => {
		  expect(board.findAllFreeSpace).toBeDefined();
		});

		test('Should return array of points of free space', () => {
		  const boardString = '..................' +
							  '..................' +
							  '..................' +
							  '..................' +
							  '..................' +
							  '..................' +
							  '..................' +
							  '..................' +
							  '..................' +
							  '..................' +
							  '..................' +
							  '..................' +
							  '..................' +
							  '..................' +
							  '..................' +
							  'L................J' +
							  'L.......OO.......J' +
							  'LL......OO......JJ';
		  const boardObj = {
			currentFigureType: "O",
			futureFigures: ["O", "O", "O", "O"],
			layers: [boardString],
			currentFigurePoint: { x: 0, y: 0 },
			levelProgress: { total: 0, current: 1, lastPassed: 0 }
		  };
		  board = new Board(JSON.stringify(boardObj));

		  let result = []
		  for (let x = 17; x <= 0; x--) {
			for (let y = 17; x <= 0; y--) {
			  if (
				  x === 0 && y === 0 ||
				  x === 0 && y === 1 ||
				  x === 1 && y === 2 ||
				  x === 0 && y === 3 ||

				  x === 8 && y === 0 ||
				  x === 9 && y === 0 ||
				  x === 8 && y === 1 ||
				  x === 9 && y === 1 ||

				  x === 16 && y === 0 ||
				  x === 17 && y === 0 ||
				  x === 17 && y === 1 ||
				  x === 17 && y === 2
			  ) continue;

			  result.push(new Point({ x, y }));

			  const answer = board.findAllFreeSpace();

			  expect(answer.length).toBe(result.length);

			  answer.forEach((item, index) => {
				expect(item.getX()).toBe(result[index].getX());
				expect(item.getY()).toBe(result[index].getY());
			  })
			}
		  }
		});

		test('Should return empty array', () => {
		  const boardString = 'IIIIIIIIIIIIIIIIII' +
							  'OOOOOOOOOOOOOOOOOO' +
							  'LLLLLLLLLLLLLLLLLL' +
							  'JJJJJJJJJJJJJJJJJJ' +
							  'SSSSSSSSSSSSSSSSSS' +
							  'ZZZZZZZZZZZZZZZZZZ' +
							  'TTTTTTTTTTTTTTTTTT' +
							  'IIIIIIIIIIIIIIIIII' +
							  'OOOOOOOOOOOOOOOOOO' +
							  'LLLLLLLLLLLLLLLLLL' +
							  'JJJJJJJJJJJJJJJJJJ' +
							  'SSSSSSSSSSSSSSSSSS' +
							  'ZZZZZZZZZZZZZZZZZZ' +
							  'TTTTTTTTTTTTTTTTTT' +
							  'IIIIIIIIIIIIIIIIII' +
							  'OOOOOOOOOOOOOOOOOO' +
							  'LLLLLLLLLLLLLLLLLL' +
							  'JJJJJJJJJJJJJJJJJJ';
		  const boardObj = {
			currentFigureType: "O",
			futureFigures: ["O", "O", "O", "O"],
			layers: [boardString],
			currentFigurePoint: { x: 0, y: 0 },
			levelProgress: { total: 0, current: 1, lastPassed: 0 }
		  };
		  board = new Board(JSON.stringify(boardObj));

		  expect(board.findAllFreeSpace().length).toBe(0)
		  expect(board.findAllFreeSpace()).toEqual([])
		})
	  });

	  describe('getDistanceToNextElementByDirection method', () => {
		let boardString;
		let boardObj;
		let board;

		beforeEach(() => {
		  boardString = '..................' +
			  '..................' +
			  '..................' +
			  '..................' +
			  '..................' +
			  '..................' +
			  '..................' +
			  '..................' +
			  '..................' +
			  '..................' +
			  '..................' +
			  '..................' +
			  '..................' +
			  '..................' +
			  '..I...............' +
			  '..I..........Z....' +
			  'OOI......OO.ZZSST.' +
			  'OOI.IIII.OO.ZSSTTT';

		  boardObj = {
			currentFigureType: "O",
			futureFigures: ["O", "O", "O", "O"],
			layers: [boardString],
			currentFigurePoint: { x: 0, y: 0 },
			levelProgress: { total: 0, current: 1, lastPassed: 0 }
		  };

		  board = new Board(JSON.stringify(boardObj))
		})

		test('Should be defined', () => {
		  expect(board.getDistanceToNextElementByDirection).toBeDefined();
		});

		test('Should raise error if direction does not match', () => {
		  const point = new Point({ x: 0, y: 0 })
		  expect(() => board.getDistanceToNextElementByDirection(point, 'topp', Element.RED)).toThrowError('Direction can be one of [top, bottom, left, right]')
		})

		describe('Right direction', () => {
		  test('Should return 1 for 0,0 coords for YELLOW element', () => {
			boardString = '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  'OO................';

			boardObj.layers = [boardString]

			board = new Board(JSON.stringify(boardObj));

			const point = new Point({ x: 0, y: 0 });

			expect(board.getDistanceToNextElementByDirection(point, 'right', Element.YELLOW)).toBe(1)
		  });

		  test('Should return 16 for 0,0 coords for RED element', () => {
			boardString = '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '................ZZ';

			boardObj.layers = [boardString]
			board = new Board(JSON.stringify(boardObj));

			const point = new Point({ x: 0, y: 0 });

			expect(board.getDistanceToNextElementByDirection(point, 'right', Element.RED)).toBe(16);
		  });

		  test('Should return size - 1 of board for 0,0 coords for YELLOW', () => {
			boardString = '..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'................ZZ';

			boardObj.layers = [boardString]
			board = new Board(JSON.stringify(boardObj));

			const point = new Point({ x: 0, y: 0 });

			expect(board.getDistanceToNextElementByDirection(point, 'right', Element.YELLOW)).toBe(17)
		  })
		})

		describe('Left direction', () => {
		  test('Should return 16 for 17,0 coords for GREEN element', () => {
			boardString = '..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'SS................';

			boardObj.layers = [boardString]

			board = new Board(JSON.stringify(boardObj));

			const point = new Point({ x: 17, y: 0 });

			expect(board.getDistanceToNextElementByDirection(point, 'left', Element.GREEN)).toBe(16)
		  });

		  test('Should return 1 for 17,0 coords for GREEN element', () => {
			boardString = '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '................SS';

			boardObj.layers = [boardString]

			board = new Board(JSON.stringify(boardObj));

			const point = new Point({ x: 17, y: 0 });

			expect(board.getDistanceToNextElementByDirection(point, 'left', Element.GREEN)).toBe(1)
		  });

		  test('Should return size of board for 17,0 for GREEN element', () => {
			boardString = '..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'OO................';
			boardObj.layers = [boardString]
			board = new Board(JSON.stringify(boardObj));

			const point = new Point({ x: 17, y: 0 });

			expect(board.getDistanceToNextElementByDirection(point, 'left', Element.GREEN)).toBe(17)
		  });
		});

		describe('Top direction', () => {
		  test('Should return 16 for 5,0 coords for RED element', () => {
			boardString = '....ZZ............' +
						  '.....ZZ...........' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................';

			boardObj.layers = [boardString]
			board = new Board(JSON.stringify(boardObj));

			const point = new Point({ x: 5, y: 0 });

			expect(board.getDistanceToNextElementByDirection(point, 'top', Element.RED)).toBe(16)
		  });

		  test('Should return 1 for 5,0 coords for RED element', () => {
			boardString = '..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'....ZZ............' +
				'.....ZZ...........';

			boardObj.layers = [boardString]
			board = new Board(JSON.stringify(boardObj));

			const point = new Point({ x: 5, y: 0 });

			expect(board.getDistanceToNextElementByDirection(point, 'top', Element.RED)).toBe(1)
		  });

		  test('Should return size of board for 5,0 for RED element', () => {
			boardString = '..................' +
				'.....SS...........' +
				'....SS............' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'..................' +
				'OO................';
			boardObj.layers = [boardString]
			board = new Board(JSON.stringify(boardObj));

			const point = new Point({ x: 5, y: 0 });

			expect(board.getDistanceToNextElementByDirection(point, 'top', Element.RED)).toBe(17)
		  });
		});

		describe('Down direction', () => {
		  test('Should return 16 for 8,17 coords for PURPLE element', () => {
			boardString = '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '........T.........' +
						  '.......TTT........';

			boardObj.layers = [boardString]
			board = new Board(JSON.stringify(boardObj));

			const point = new Point({ x: 8, y: 17 });

			expect(board.getDistanceToNextElementByDirection(point, 'bottom', Element.PURPLE)).toBe(16)
		  });

		  test('Should return 1 for 8,2 coords for PURPLE element', () => {
			boardString = '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '........T.........' +
						  '.......TTT........';

			boardObj.layers = [boardString]
			board = new Board(JSON.stringify(boardObj));

			const point = new Point({ x: 8, y: 2 });

			expect(board.getDistanceToNextElementByDirection(point, 'bottom', Element.PURPLE)).toBe(1)
		  });

		  test('Should return size of board for 8,17 for PURPLE element', () => {
			boardString = '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '..................' +
						  '........I.........' +
						  '........I.........' +
						  '........I.........' +
						  '........I.........';
			boardObj.layers = [boardString]
			board = new Board(JSON.stringify(boardObj));

			const point = new Point({ x: 8, y: 17 });

			expect(board.getDistanceToNextElementByDirection(point, 'bottom', Element.PURPLE)).toBe(17)
		  });
		});
	  })
	})
}