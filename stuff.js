var Stuff = {
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
    }
}
