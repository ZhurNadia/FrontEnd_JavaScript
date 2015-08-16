/**Задание 5 (Шахматная доска)

 Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки.
 На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
  # # # #
 # # # #
 Когда справитесь, сделайте размер доски переменным, чтобы можно было создавать доски любого размера.
 */

var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
        if ((x + y) % 2 == 0)
            board += " ";
        else
            board += "#";
    }
    board += "\n";
}

console.log(board);


//вариант
for(var k in {8:1, 9: 2}){
    for(var w = k, s ='', i = w * w - 1; i >=0; i--)
        s += ((i + (0|(i / w))*((w - 1) % 2)) % 2 ? ' ':'#') + (i % w ? '' : '\n');
    console.log(s);
}


//И если хочется нетрадиционности, то можно так:
    var SIZE=prompt("Size?");
function add(str) { return str += str[str.length-1]=='#' ? ' ' : '#' ; }
function query(str) { return str.length<SIZE ? query(add(str)) : str ; }
console.log( query('').split('').map(query).join('\n') );


//Или
chessBoard = function(n){
    var a;
    return n <= 1 ? ['#']
        : (a = chessBoard(n - 1).map(function(s, i){
        return s + (s[s.length - 2]||' ');
    })).concat(a[n - 3] || [' #']);
};
for(var k in {8:1, 9: 2})
    console.log(chessBoard(k).join('\n'));


// Так хорошо?
var result = '', line, row;
for(row = 1; row <= 8; row++) {
    for(line = 1; line <= 8; line++) {
        if(row % 2 == 0) {
            if(line % 2 == 0) {
                result+= '#';
            } else {
                result+= ' ';
            }
        } else {
            if(line % 2 == 0) {
                result+= ' ';
            } else {
                result+= '#';
            }
        }
    }
    result='';
}