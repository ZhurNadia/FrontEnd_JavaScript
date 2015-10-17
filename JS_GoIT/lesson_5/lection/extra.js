/**
 * Created by nadia on 02.09.15.
 */
/**
 Íàïèñàòü ôóíêöèþ êîòîðàÿ ïðèíèìàåò íà âõîä
 2 ïàðàìåòðà: ìàññèâ, è ýëåìåíò (ëþáîãî òèïà).
 Ýòîò ýëåìåíò íóæíî äîáàâèòü â êîíåö ìàññèâà.
 Ôóíêöèÿ äîëæíà âåðíóòü ìàññèâ ñ äîáàâëåííûì
 íîâûì ýëåìåíòîì.
 */

//defining variable array
var array = new Array(1, 2, 3, 4, 5);
//function for adding new item
function newItem(array, item) {
    //adding new item
    array.push(item);
    //returning array with new item
    return array;
}
//calling function and display data
console.log(newItem(array, "kuku"));


//task 5
/**
 1. Создайте массив fruits с элементами «apple», «orange».
 2. Добавьте в конец значение «kiwi»
 3. Замените предпоследнее значение с конца на «pear». Код
 замены предпоследнего значения должен работать для
 массивов любой длины.
 4. Удалите первое значение массива и выведите его console.
 5. Добавьте в начало значения «apricot» и «peach».
 */

//creating array
var fruits = new Array("apple", "orange");
//adding new last item kiwi
fruits.push("kiwi");
//change item
fruits.splice(fruits.length - 2, fruits.length - 2, "pear");
//deleting last item and display array
console.log(fruits.shift());
//adding new first items apricot and peach
fruits.unshift("apricot", "peach");
//display array
console.log(fruits);


//task 6
//creating array
var array = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//function for choosing random item in array
function randomItem(array) {
    //returning random item
    return array[Math.floor(Math.random() * 10)];
}
//calling function and display random item
console.log(randomItem(array));


//task 7
//creating array
var array = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//function for searching value in array
function find(array, value) {
    //defining variable, as number of item, which == value or for display negative result
    var number;
    //loop for searching value in array
    for (var i = 0; i < array.length; i++) {
        //condition for searching value in array
        if (array[i] == value) {
            //assigning number, if value was found
            number = i;
            break;
        } else {
            //assigning number, if value was not found
            number = -1;
        }
    }
    //returning number
    return number;
}
//calling function and display data
console.log(find(array, 5));



//task8

/**
 Ñîçäàéòå ôóíöèþ filterRange(arr, a, b), êîòîðàÿ ïðèíèìàåò
 ìàññèâ ÷èñåë arr è âîçâðàùàåò íîâûé ìàññèâ, êîòîðûé
 ñîäåðæèò òîëüêî ÷èñëà èç arr èç äèàïàçîíà îò a äî b.
 Òî åñòü, ïðîâåðêà èìååò âèä a ? arr[i] ? b.
 Ôóíêöèÿ íå äîëæíà ìåíÿòü arr.
 var arr = [5, 7, 4, 8, 3, 0];
 var filtered = filterRange(arr, 3, 5);
 // filtered = [5, 4, 3];
 // arr = [5, 7, 4, 8, 3, 0];
 */


//creating array
var array = new Array(15, 16, 54, 1, 80, 23, 987, 12, 56, 11, 1, 5);
//creating new empty array
var newArray = new Array();
//function for searching items between min and max in array
function filterRange(array, min, max) {
    //loop for searching items between min and max in array
    for (var i = 0; i < array.length; i++) {
        //checking items and saving items between min and max in newArray
        if (array[i] >= min && array[i] <= max) newArray[i] = array[i];
    }
    //returning newArray
    return newArray;
}
//calling function and display data
console.log(filterRange(array, 50, 100));