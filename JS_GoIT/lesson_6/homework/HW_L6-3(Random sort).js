/**
 Задание 3 (Random sort)

 Необходимо отсортировать массив в случайном порядке используя метод sort.

 var arr = [1, 2, 3, 4, 5];

 arr.sort(ваша функция);

 console.log( arr ); // элементы в случайном порядке, например [3,5,1,2,4]
 */

//-----------NK
//creating array
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//function for random sorting
function arraySort() {
    if (Math.random() > 0.5) {
        return 1;
    } else {
        return -1;
    }
}
//sorting array
array.sort(arraySort);
//display data
console.log(array);


//creating array
var arrayNew = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//function for random sorting
function arrayNewSort(array) {
    //loop for sorting array
    for (var i = 0; i < array.length; i++) {
        //calculating random number from 0 to array.length
        var number = array.length - 1 - Math.floor(Math.random() * 10);
        //exchange item with random number and item with number i
        var temp = array[i];
        array[i] = array[number];
        array[number] = temp;
    }
    //returning sorted array
    return array;
};
//calling function and display array
console.log(arrayNewSort(array));


//--------OLE
//создание исходного массива
var arr = [1, 2, 3, 4, 5];

//использование метода сортировки массива
arr.sort(function (a,b)

//использование функции Math.random() для определения случайного числа
// - 0.5 используется для определения положительного или отрицательного числа
{ return Math.random() - 0.5});

//вывод результатов в консоль
console.log( arr ); // элементы в случайном порядке, например [3,5,1,2,4]


//-------------EV
var arr = [1, 2, 3, 4, 5];

arr.sort(compareNumeric);


function compareNumeric(a, b){
    var choise = [-1, 0, 1]; 								    //define possible values which function returns
    var randIndex = Math.floor(Math.random() * choise.length);  // calculate random index for possible choices
    return choise[randIndex];                                   // return random value from possible values
}

console.log( arr ); // элементы в случайном порядке, например [3,5,1,2,4]



//--------NK extra
/**
 Íàïèñàòü ôóíêöèþ îáðàòíîé ñîðòèðîâêè reverseSort(arr).
 Êîòîðàÿ ñîðòèðóåò ÷èñëåííûé ìàññèâ îò áîëüøåãî ê
 ìåíüøåìó.
 var arr = [5, 2, 1, -10, 8];
 console.log( reverseSort(arr) ); // 8, 5, 2, 1, -10
 */

//---------VERS1-------------------
//creating array
var arr = [5, 2, 1, -10, 8];
//function for revers sorting
function reversSort(arr) {
    //defining variable temp for exchanging items
    var temp;
    //loop for decreasing part of array, which is checked
    for (var i = 0; i < arr.length; i++) {
        //loop for comparison items. Every loop iteration pushes max item to end of array
        //new iteration uses array without this item, thereby sorted items build up in the
        //end of array. After all iteration array is sorted
        for (var j = 0; j < arr.length - i - 1; j++) {
            //condition for comparison of current and next items
            if (arr[j] < arr[j + 1]) {
                //exchanging items if condition is executed
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    //returning array
    return arr;
}
//calling function and display result
console.log(reversSort(arr));

//------------VERS2-------------------
//creating function for sorting array
//parameters a, b
function reversSortNew(a, b) {
    //returning result
    return b - a;
}
//sorting array bu function reversSortNew
arr.sort(reversSortNew);
//display result
console.log(arr);

