/*-
 * #%L
 * Codenjoy - it's a dojo-like platform from developers to developers.
 * %%
 * Copyright (C) 2021 Codenjoy
 * %%
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public
 * License along with this program.  If not, see
 * <http://www.gnu.org/licenses/gpl-3.0.html>.
 * #L%
 */

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

            if (env.length) {
                var envValue = env[index];
                console.log('Got ' + name + ' from Environment: ' + envValue);

                return envValue;
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
