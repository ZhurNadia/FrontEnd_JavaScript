/**Задание 6 (Уникальные элементы массива)

 Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr (arr — массив строк).

 var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];

 console.log( unique(strings) ); // кришна, харе, 8-()
 */

//---------------OLE
//создание массива
var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()'];

//создание фукнкции поиска повторяющихся элементов массива
function unique(arr) {

    //создание нового пустого массива для добавления уникальных элементов
    var newArr = [];

    //создание метки для возврата цикла
    next:

        //цикл перебора всех элементов массива
        for (var i = 0; i < arr.length; i++) {

            //новый цикл для сравнения с каждым следующим элементом
            for (var j = 0; j < arr.length; j++) {

                //при совпадании элементов массива цикл прерывается и начинается сначала
                if (newArr[j] == arr[i]) continue next;
            }

            //добавленеи в новый массив уникального элемента исходного массива
            newArr.push(arr[i]);
        }

    //возврат функцией результов выполнения - нового массива
    return newArr;
}
//вывод результов в консоль
console.log(unique(strings)); // кришна, харе, 8-()


//-----------EV
function unique(arr) {
    var newArr = [];


    //iterate with cycle over given arr
    //for each element in cycle create counter - number which represents how many this elements in the given array
    //create inner loop for each element and increase counter if element also exists in the array
    //push to the new array only elements which counter is equal to the 1

    for (var i = 0; i < arr.length; i++) {
        var counter = 1;

        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                counter++;
            }
        }

        if (counter == 1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()'];

console.log(unique(strings)); // кришна, харе, 8-()


//----------------NK
//creating array
var strings = ['krishna', 'krishna', 'khare', 'khare', 'khare', 'khare', 'krishna', 'krishna', '8-()'];
//creating function for search unique items
function unique(strings) {
    //creating array for saving result
    var result = [];
    //label
    next:
        //loop for checking items
        for (var i = 0; i < strings.length; i++) {
            //defining variable for saving item for check
            var temp = strings[i];
            //checking whether item in array result already
            for (var j = 0; j < result.length; j++) {
                //if item already exists in array result, move to label next
                if (result[j] == temp) {
                    continue next;
                }
            }
            //if item doesn't exists in array result, adding item to this array
            result.push(temp);
        }
    //returning result
    return result;
}
//calling function ang display data
console.log(unique(strings));

