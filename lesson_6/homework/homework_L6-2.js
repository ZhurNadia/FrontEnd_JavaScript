/**Задание 2 (Сортировка массива строк)

 Есть массив строк arr. Создайте массив arrSorted — из тех же элементов, но отсортированный.

 Исходный массив не должен меняться.

 var arr = ['HTML', 'JavaScript', 'CSS'];

 // ... ваш код ...

 console.log( arrSorted ); // CSS, HTML, JavaScript
 console.log( arr ); // HTML, JavaScript, CSS (без изменений)
 */

//-----------------EV
var arr = ['HTML', 'JavaScript', 'CSS'];
var arrSorted = [];

for (var i = 0; i < arr.length; i++){
    arrSorted.push(arr[i]);           //move items into the new array
}
arrSorted.sort();                    //sort items in the new array

console.log( arrSorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)


//-------------------OLE
//создание исходного массива
var arr = ['HTML', 'JavaScript', 'CSS'];

////создание нового пустого массива
var arrSorted = [];

//копирование исходного массива в новый массив
arrSorted = arr.slice(0);

//сортировка нового массива
arrSorted.sort();

//вывод в консоль отсортированого массива
console.log( arrSorted ); // CSS, HTML, JavaScript

//вывод в консоль исходного массива
console.log( arr ); // HTML, JavaScript, CSS (без изменений)



//----------------NK
//defining variable stringArray - array of strings
var stringArray = ["Return", "the", "Missing", "Element", "Add", "Property"];
//defining variable stringArraySorted - array for sorted stringArray
var stringArraySorted = stringArray;
//display stringArray
console.log(stringArray);
//display sorted array stringArraySorted
console.log(stringArraySorted.sort());

//defining variable stringArray - array of strings
var stringArray = ["Return", "the", "Missing", "Element", "Add", "Property"];
//defining variable stringArraySorted - array for sorted stringArray
var stringArraySorted = stringArray;
//loop for sorting array
for (var i = 0; i < stringArraySorted.length - 1; i++) {
    //defining variable minNumber Array for saving index of min item, starts from i
    var minNumberArray = i;
    //loop for array, which is not sorted yet
    for (var j = i + 1; j < stringArraySorted.length; j++) {
        //condition, whether item bigger then min item
        if (stringArraySorted[j] < stringArraySorted[minNumberArray]) {
            //if condition is executed, number of min item becomes j
            minNumberArray = j;
        }
    }
    //defining variable temp for changing items: min item and item with number i
    var temp = stringArraySorted[minNumberArray];
    stringArraySorted[minNumberArray] = stringArraySorted[i];
    stringArraySorted[i] = temp;
}
//display result - sorted array
console.log(stringArraySorted);




//---------NK extra
//creating function for transforming string to camel case
function toCamelCase(string) {
    //defining variable stringArray and separation string with separator "-"
    var stringArray = string.split("-");
    //loop for transforming item of stringArray
    for (var i = 0; i < stringArray.length; i++) {
        //checking first item is it empty string (for strings, which don't start from letter
        if (stringArray[i] == "") {
            //shifting first item if condition is executed
            stringArray.shift();
        }
        //checking i for transforming items from second item
        if (i > 0) {
            //transforming items: first letter transforms to upper case
            stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].substring(1);
            //joining items of array to string and saving string in variable newString
            var newString = stringArray.join("");
        }
    }
    //returning newString
    return newString;
}
//calling function and display result
console.log(toCamelCase("list-style-image"));
