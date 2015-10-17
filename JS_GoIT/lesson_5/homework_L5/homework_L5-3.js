/**
 Задание 3 (Калькулятор)

 Напишите код, который:

 Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
 Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
 При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
 Выводит сумму всех значений массива когда ввод прекращен.
 */


//-----------ver - NK
//defining variable sum
var sum = 0;
//creating array for saving numbers
var numberArray = new Array(5);
//loop for saving numbers and calculating sum
for (var i = 0; i < 5; i++) {
    //saving number in array
    numberArray[i] = prompt("Vvedite chislo", "");
    //checking number null/""/NaN
    if (numberArray[i] == null || numberArray[i] == "" || isNaN(numberArray[i])) {
        break;
    }
    //calculating sum
    sum += parseInt(numberArray[i]);
}
//display array
console.log(numberArray);
//display sum
console.log(sum);


//--------------EV
var calc = [];    //declare array
var sum = 0;

var numberFromUser = 1;

//get numbers from user until them not equal to false, "" or NaN
while (numberFromUser){
    numberFromUser = +prompt("Введите число", "");
    calc.push(numberFromUser);  //push numbers from User to array
}


//iterate throught the save numbers and sum them
for(var i = 0; i < calc.length; i++){
    sum += calc[i];
}

//display the sum value
console.log(sum);



//----------------ole
//создание функции проверки на число
function isNumeric(n) {
    return !isNaN(parseFloat(n) && isFinite(n));
}
//создание пустого исходного массива
var arr = [];

//объявление переменной и присвоение ей значения
var arrItem = prompt("Please, enter an item of array","");

//цикл внесения значений в массив
//проверка условий: цикл прекращает работу исли введено пустую строку или не число, нажато "Отмена"
while (arrItem != null && isNumeric(arrItem)  ) {

    //внесение элементов в конец массива
    arr.push(arrItem);

    //повторный запрос на ввод переменной для повторной проверки в цикле
    arrItem = prompt("Please, enter an item of array","");
}

//вывод массива в консоль
console.log(arr);