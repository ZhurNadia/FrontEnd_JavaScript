/**
 Задание 7 (Анаграммы)

 Анаграммы — слова, состоящие из одинакового количества одинаковых букв, но в разном порядке. Например:

 воз - зов киборг - гробик корсет - костер - сектор Напишите функцию anClean(arr), которая возвращает массив слов, очищенный от анаграмм.

 var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

 console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'
 Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
 */


//__-----------------EV
function anClean(arr){
 var newArr = [];

 //iterate over given array
 //for each element start additional loop from the next position
 //in additional loop sort element from outer and inner loops
 //compare sorter elements, increase counter if they are equal
 //push the new array only elements with counter equal to the 1

 for (var i = 0; i < arr.length; i++){
  var counter = 1;

  for(var j = i + 1; j < arr.length; j++){
   var curEl = arr[i].toLowerCase().split("");
   var nextEl = arr[j].toLowerCase().split("");
   curEl.sort();
   nextEl.sort();
   curEl = curEl.join("");
   nextEl = nextEl.join("");

   if(curEl == nextEl){
    counter++;
   }
  }
  if(counter == 1){
   newArr.push(arr[i]);
  }
 }
 return newArr;
}

var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'



//-----------------NK
//creating array
var arr = ['voz', 'kiborg', 'korset', 'ZOV', 'grobik', 'koster', 'sektor'];
//creating function for cleaning array
function anClean(arr) {
 //creating object for unique items
 var object = {};
 //creating array for result
 var result = [];
 //loop for transforming and checking array
 for (var i = 0; i < arr.length; i++) {
  //defining variable sortedArray for items after transforming
  var sortedArray = arr[i].toLowerCase().split('').sort().join('');
  console.log(sortedArray);
  //assigning value to object
  object[sortedArray] = arr[i];
  console.log(object);
 }
 //loop for filling array by unique items
 for (var item in object) {
  //adding items
  result.push(object[item]);
  console.log(item);
 }
 //returning result
 return result;
}
//calling function and display data
console.log(anClean(arr));



//---------Sa
function anClean(arr) {
 // создание объекта для проверки
 var obj = {};

 //цикл для перебора каждого элемента массива
 for (var i = 0; i < arr.length; i++) {

  // каждую строку элемента массива перевести в нижний регистр
  // каждую строку элемента массива разбить на буквы
  // каждую строку элемента массива отсортировать
  // каждую строку элемента массива перевести обратно в строку
  var newString = arr[i].toLowerCase().split('').sort().join('');

  //измененная строка становиться свойством объекта, а значение эелемна массива значением элемента объекта
  //при повторе измененной строки в массиве свойство (ключ) и его значение переписываються в объекте
  obj[newString] = arr[i];
 }

 //создание нового пустого массива
 var newArr = [];

 // цикл перебора элементов объкта и добавление в новый массив
 for (var key in obj) newArr.push(obj[key]);

 //возврта функцией результатов выплнеия
 return newArr;
}
//создание массива
var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

//вывод результатов в консоль
console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'
