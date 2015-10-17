/**Задание 1 (Повторять цикл, пока ввод неверен)

 Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввел другое число —
 попросить ввести еще раз, и так далее.

 Цикл должен спрашивать число пока либо посетитель не введет число, большее 100, либо не нажмет кнопку Cancel (ESC).

 Предполагается, что посетитель вводит только числа, предусматривать обработку нечисловых строк в этой задаче необязательно.
 */

var oneHundred = prompt('Enter a number greater than 100', '');
while (oneHundred <= 100) {
    var anotherNum = prompt( 'Not enough! Please, enter another number!', '' );
    if (anotherNum > 100 || anotherNum == null) {
        break;
    }
}


//решение задачки с применением do.. while
/**
var oneHundred;
do {
    oneHundred = prompt('Enter a number greater than 100', '');
} while (oneHundred <= 100 && oneHundred != null);
 */