/**Метод map. Он позволяет пройтись по каждому элементу и применить некоторое преобразование.
 * В результате отработки исходный массив не изменяется.
 * В метод map мы передаем callback-функцию, которая занимается последовательным преобразованием всех элементов массива.
 * Она на вход получает три стандартных параметра.
*/

var ar = [1,2,3,4,5];
var newar = ar.map(
    function(element, index, array){
        return (element * 2); //В результате отработки этого кода в массив newar попадут следующие элементы: [2,4,6,8,10]
    });


//другой пример применения MAP

function AreaOfCircle(radius) {  // Define the callback function.
    var area = Math.PI * (radius * radius);
    return area.toFixed(0);
}

var radii = [10, 20, 30]; // Create an array.

var areas = radii.map(AreaOfCircle); // Get the areas from the radii.

document.write(areas); // Output:  314,1257,2827


//использование аргумента thisArg, задающего объект, на который может ссылаться ключевое слово this.

var obj = {  // Define an object that contains a divisor property and
    divisor: 10,
    remainder: function (value) {  // a remainder function.
        return value % this.divisor;
    }
}

var numbers = [6, 12, 25, 30];  // Create an array.

var result = numbers.map(obj.remainder, obj);  // Get the remainders. // The obj argument specifies the this value in the callback function.
document.write(result);   // Output:  6,2,5,0


//встроенный метод JavaScript используется как функция обратного вызова.

var numbers = [9, 16];
var result = numbers.map(Math.sqrt);  // Apply Math.sqrt(value) to each element in an array.

document.write(result);  // Output: 3,4


//Метод map может быть применен к строке.

function threeChars(value, index, str) {  // Define the callback function.
    return str.substring(index - 1, index + 2);  // Create a string that contains the previous, current and next character.
}

var word = "Thursday";  // Create a string.

// Apply the map method to the string.
// Each array element in the result contains a string that has the previous, current, and next character.
// The commented out statement shows an alternative syntax.
var result = [].map.call(word, threeChars);
// var result = Array.prototype.map.call(word, threeChars);

document.write(result);  // Output:  Th,Thu,hur,urs,rsd,sda,day,ay