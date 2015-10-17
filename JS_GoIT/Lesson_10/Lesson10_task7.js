/**
 Write a function suffle(arr) to shuffle an array.
 */
//с использованием рандома
//можно взять рандомные значения и переводить их в интежер с макс знаением по длине (умножать на рандом до ленс)/ потом
// округлять до целого числа и по этому индексу брать элементы сводного массива

var ecole = 'hello world';
ecole.ping = 15;
var cent = ecole.ping;


function crash() {
    var result = "";
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return arguments.join(" ");
}

console.log(crash("pork", "white", "c", "afasdf"))


function crash() {
    var result = [];
    var resultString;
    for (var i = 0; i < arguments.length; i++) {
        result.push(arguments[i]);
    }
    resultString = result.join(" ");
    return resultString;
}

console.log(crash("pork", "white", "c", "afasdf"))