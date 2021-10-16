var Stuff = module.exports = {

    random : function(n){
        return Math.floor(Math.random()*n);
    },

    printArray : function(array) {
        var result = [];
        for (var index in array) {
            var element = array[index];
            result.push(element.toString());
        }
        return "[" + result + "]";
    },

    format : function() {
        var util = require("util");

        var template = arguments[0];
        var params = Array.prototype.slice.call(arguments, 1);
        params = params.map(it => Array.isArray(it) ? Stuff.printArray(it) : it.toString())
        params.unshift(template);
        return util.format.apply(null, params);
    },

    clean : function(string) {
        if (typeof string.replaceAll == 'undefined') {
            // case node
            return string.replace('.js', '')
                        .replace('.', '')
                        .replace('engine', '')
                        .replace('/', '');

        } else {
            // case browser stub
            return string.replaceAll('.js', '')
                        .replaceAll('.', '')
                        .replace('engine', '')
                        .replaceAll('/', '');

        }
    },

    parameter : function(name, index, value) {
        if (typeof process != 'undefined' && typeof process.argv != 'undefined') {
            var env = process.argv.slice(2);
            if (env != '') {
                var value = env[index];
                console.log('Got ' + name + ' from Environment: ' + value);

                return value;
            }
        }
        console.log('Got ' + name + ' from Solver: ' + value);
        return value;
    },

    log : function(string) {
        console.log(string);
        if (typeof browser !== 'undefined') {
            printLogOnTextArea(string);
        }
    }

}
