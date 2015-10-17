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

var chess = "";
for (var line1 = 0; line1 < 8; line1++) {
    for (var line2 = 0; line2 < 8; line2++) {
        if ((line2 + line1) % 2 == 0)
            chess += " ";
        else
            chess += "#";
    }
    chess += "\n";
}
console.log(chess);

//сделайте размер доски переменным, чтобы можно было создавать доски любого размера.

var quantityHashes = 8;
var chess = "";
for (var line1 = 0; line1 < quantityHashes; line1++) {
    for (var line2 = 0; line2 < quantityHashes; line2++) {
        if ((line2 + line1) % 2 == 0)
            chess += " ";
        else
            chess += "#";
    }
    chess += "\n";
}
console.log(chess);



//поискала еще пути решения и нашла такой вариант, только он выводит 5 решеток в строку
for(var k in {8:1, 9: 2}){
    for(var w = k, s ='', i = w * w - 1; i >=0; i--)
        s += ((i + (0|(i / w))*((w - 1) % 2)) % 2 ? ' ':'#') + (i % w ? '' : '\n');
    console.log(s);
}


//И вот какой-то, пишут что это нетрадиционный вариант:
var SIZE = prompt("Size?");
function add(str) { return str += str[str.length-1]=='#' ? ' ' : '#' ; }
function query(str) { return str.length<SIZE ? query(add(str)) : str ; }
console.log( query('').split('').map(query).join('\n') );


//Или через функцию и массивы:
chessBoard = function(n){
    var a;
    return n <= 1 ? ['#']
        : (a = chessBoard(n - 1).map(function(s, i){
        return s + (s[s.length - 2]||' ');
    })).concat(a[n - 3] || [' #']);
};
for(var k in {8:1, 9: 2})
    console.log(chessBoard(k).join('\n'));


