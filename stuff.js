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

    clean : function(string) {
        if (typeof string.replaceAll == 'undefined') {
            // case node
            return string.replace('.js', '')
                        .replace('.', '')
                        .replace('/', '');

        } else {
            // case browser stub
            return string.replaceAll('.js', '')
                        .replaceAll('.', '')
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
        var browser = (browser !== undefined);
        if (browser) {
            printLogOnTextArea(string);
        }
    }

}
