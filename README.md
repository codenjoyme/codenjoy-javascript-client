This project represents a basic javascript websocket client for the codenjoy platform.
It allows you to easily and quickly join the game, developing your unique algorithm, having a configured infrastructure.

# What do you need to get started?
To get started, you should define the desired game and enter a value in `Games.init('<gamename>')`. \
The second important thing is the connection token to the server. After successful authorization on the site, you must copy the url
and enter a value in `url` variable of `solver.js` script. \
This is enough to connect and participate in the competition.

# How to run it?
The entry point for starting a project is `runner.js` script. \
You can pass the game type and token connection to the server as command-line arguments.
Game parameters passed by arguments at startup have a higher priority than those defined in the code.

### For JavaScript with browser:
- write bot
- run 'run-client.html'
- for testing run 'run-test.html'

### For JavaScript with node.js:
- install Node.js from http://nodejs.org/
- update Path System variable - add node.js root folder
- write bot
- run 'run-client.bat' or 'npm start' command
- another way to change server url - run 'run-client.bat "http://codenjoy.com:80/codenjoy-contest/board/player/3edq63tw0bq4w4iem7nb?code=1234567890123456789"'
- for testing run 'run-test.bat' or 'npm test' command

# How does it work?
The elements on the map are defined in `games/<gamename>/elements.js`. They determine the meaning of a particular symbol.
The two important components of the game are the `games/<gamename>/board.js` game board and the `solver.js` solver.

Every second the server sends a string representation of the current state of the board, which is parsed by a script.
Then the server expects a string representation of your bot's action that is computed by executing `Solver.get(board)`.

Using the set of available methods to interact with a board, you improve the algorithm of the bot's behavior.
You should develop this functionality, extending it with new methods that will be your tool in the fight.
For example, a bot can get information about an element in a specific coordinate by calling `Board.getAt(x, y)`
or count the number of elements of a certain type near the coordinate by calling `Board.countNear(x, y, element)`, etc.

# Business logic testing
Writing tests will allow you to create conclusive evidence of the correctness of the existing code.
This is your faithful friend, who is always ready to answer the question: "Is everything working as I expect? The new code did not break my existing logic?". \
The `tests/<gamename>/test.js` file contains a set of tests that check board tools and bot's behaviors for a specific game scenario.
Implementation of new methods should be accompanied by writing new tests and checking the results of processing existing ones.