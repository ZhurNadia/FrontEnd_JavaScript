/**Урок 10 задача 8
 Имеется массив css классов со старницы.

 var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link' ... ];
 Необходимо из этого массива получить массив с уникальными именами классов (без повторений) отсортированный
 по частоте использования (наиболее часто используемые - впереди).

 Если классы используются одинаковое количество раз - между ними не важно какой будет первее.

 result = ['link', 'menu__item', 'menu', 'header', 'footer', 'sidebar', ... ];
 */

var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link'];

function unique(array) {
    var result = [];  //результатом будет элемент

    while(array.length) {
        var thisElement = array[0]; //записываем первый элемент массива

        if(!result[thisElement]) {  //проверяю есть ли в массиве резалт этого элемента, если нет то добавить 1 - 1 вхождение
            result[thisElement] = 1;
        }
        else {
            result[thisElement]++;
        }
        array.splice(0, 1);
    }
}

unique(arr);


var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link'];

function unique(array) {
    var result = {
    };  //результатом будет элемент

    for(var  i = 0; i < array.length; i++) {
        //записываем первый элемент массива

        if(!result[array[1]]) {  //проверяю есть ли в массиве резалт этого элемента, если нет то добавить 1 - 1 вхождение
            result[array[1]]] = 1;
        }
        else {
            result[array[1]]]++;
        }
        console.log(result);

        for(var i = 0; i < result.length; i++) {

        }
    }
}

//у Дениса другой метод решения через нахождение максимального