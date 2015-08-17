// напишите функцию sumTo(n), которая для данного n вычислит сумму чисел от 1 до n
// c помощью рекурсии, 2 цикла, 3 формула арифмитической прогресии
// цикл использовать for

function sumTo(x, n) {
    if (n != 1) {
        return n + sumTo(n-1);
    }
    else {
        return n
    }
}

//написать функцию вычисляющую факториал числа n
//n! = n * (n-1) * (n-2) * ... * 1

function sumTo(n) {
    if (n != 1) {
        return n * sumTo(n-1);
    }
    else {
        return n
    }
}

// стр 36 задача 1 функция возвращает случайное число из интервала (0,max)
function num(0, max) {
    return Math.random();
}

//variant
var str;
function randX (numb)
{
    return Math.random()*numb;
}
str = +prompt ('Enter number','100');
alert(randX (str));

// стр 49 задача

function upperFirst(myString) {
    return myString = myString[0].toUpperCase() + myString.substring(1,5);
}
console.log(upperFirst("hello"));

// ili
function upperFirst(n) {
    var first = n[0].toUpperCase();
    n = n.substring(1, n.length);
    return first + n
}
console.log(upperFirst('hello'));