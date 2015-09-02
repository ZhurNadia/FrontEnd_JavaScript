/**
 *Задание 2 (Calculator)

 Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.

 Эта задача состоит из двух частей, которые можно решать одна за другой.

 Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2», с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг операции), и возвращает результат. Понимает плюс + и минус -. Пример использования:

 var calc = new Calculator;

 console.log( calc.calculate('3 + 7') ); // 10
 Второй шаг — добавить калькулятору метод addMethod(name, func), который учит калькулятор новой операции. Он получает имя операции name и функцию от двух аргументов func(a,b), которая должна её реализовывать. Например, добавим операции умножить , поделить / и возвести в степень *:

 var powerCalc = new Calculator;
 powerCalc.addMethod('*', function(a, b) {
  return a * b;
});
 powerCalc.addMethod('/', function(a, b) {
  return a / b;
});
 powerCalc.addMethod('**', function(a, b) {
  return Math.pow(a, b);
});

 var result = powerCalc.calculate('2 ** 3');
 console.log( result ); // 8
 Поддержка скобок и сложных математических выражений в этой задаче не требуется.
 Числа и операции могут состоять из нескольких символов. Между ними ровно один пробел.
 Предусмотрите обработку ошибок. Какая она должна быть – решите сами.
 */

//----------------OLE_
//создание функции калькулятора
function Calculator() {

    //создание объекта с указанием оператора и функции конкретного вычисления в соответсвии с оператором
    var operations = {

        //свойство объкта и функция вычитания
        "-": function(a,b){
            return a - b;
        },

        //свойство объкта и функция сложения
        "+": function(a,b){
            return a + b;
        }
    };

    //метод подсчета
    this.calculate = function(string){

        //создание массива по пробелу
        var splitArray = string.split(" ");

        //первый элемент массива преобразовать в число
        a = +splitArray[0];

        //инициализация переменной - оператор, которая равна второму элеинту массива
        operator = splitArray[1];

        //второй элемент массива преобразовать в число
        b = +splitArray[2];

        //возврат функции с указание оператора и значений
        return operations[operator](a,b);
    };

    //добавление нового метода
    this.addMethod = function(name, func) {
        operations[name] = func;
    }
}

//создание новой перемнной использая конструктор
var calc = new Calculator;

//вывод результатов
alert(calc.calculate("3 + 10"));

//создание новой перемнной использая конструктор
var powerCalc = new Calculator;

//создание нового метода умножения
powerCalc.addMethod('*',function(a,b){
    return a * b;
});

////создание нового метода деления
powerCalc.addMethod("/",function(a,b) {
    return a / b;
});

//создание нового метода возведения в степень
powerCalc.addMethod("**",function(a,b) {
    return Math.pow(a,b);
});

//инициализация переменной результат
var result = powerCalc.calculate("2 ** 3");

//вывод результата в консоль
console.log(result);



//--------------EV
function Calculator() {

//substitute operator in the object and find a method to this operator
    var methods = {
        "-": function(a, b) {
            return a - b;
        },
        "+": function(a, b) {
            return a + b;
        }
    };

//split expression into format of two argments and operator
//check that the first and last elements are numbers

    this.calculate = function(str) {

        var split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]

        if (!methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return methods[op](+a, +b);
    }

    this.addMethod = function(name, func) {
        methods[name] = func;
    };
}

//add new methods to Calculator. store new calculation method using related operator
var powerCalc = new Calculator;

powerCalc.addMethod("*", function(a, b) {
    return a * b;
});
powerCalc.addMethod("/", function(a, b) {
    return a / b;
});
powerCalc.addMethod("**", function(a, b) {
    return Math.pow(a, b);
});

var result = powerCalc.calculate('2 ** 3');
alert( result );



//------------NK
//------------1---------------
/*
 var string = prompt("Vvedite chislo, operatsyju b eshche odno chislo", "");
 function Calculator() {
 var operation = {
 "+": function (x, y) {
 return x + y;
 },
 "-": function (x, y) {
 return x - y;
 }
 };

 var calculate = function (string) {
 var task = string.split(" ");
 x = string[0];
 oper = string[1];
 y = string[3];
 if (oper != "+" || oper != "-") {
 return console.log("Ya takogo ne umeyu :(");
 }
 if (isNaN(x) || isNaN(y)) {
 return console.log("Nado bylo vvesty chislo :(");
 }
 return operation[oper](+x, +y);
 }
 }
 var myCalc = Calculator();
 console.log(myCalc.calculate);

 */
/*function Calculator() {

 var methods = {
 "-": function (a, b) {
 return a - b;
 },
 "+": function (a, b) {
 return a + b;
 }
 };

 this.calculate = function (str) {

 var split = str.split(' '),
 a = +split[0],
 op = split[1],
 b = +split[2]

 if (!methods[op] || isNaN(a) || isNaN(b)) {
 return NaN;
 }

 return methods[op](+a, +b);
 }

 this.addMethod = function (name, func) {
 methods[name] = func;
 };
 }
 var calc = new Calculator;

 calc.addMethod("*", function (a, b) {
 return a * b;
 });
 calc.addMethod("/", function (a, b) {
 return a / b;
 });
 calc.addMethod("**", function (a, b) {
 return Math.pow(a, b);
 });

 var result = calc.calculate("2 ** 3");
 alert(result); // 8*/