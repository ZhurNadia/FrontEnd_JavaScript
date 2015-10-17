/**Задание 1 (Удаление css клссов)

 У объекта есть свойство className, которое хранит список css класов – слов, разделенных пробелами:

 var obj = {
  className: 'open menu'
};
 Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:

 removeClass(obj, 'open'); // obj.className='menu'
 removeClass(obj, 'blabla'); // без изменений
 P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:

 obj = {
  className: 'my menu menu'
};

 removeClass(obj, 'menu');

 console.log( obj.className ); // 'my'
 Лишних пробелов после функции образовываться не должно.
 */

//------------OLE
//создание объекта
var obj = {
    className: 'open menu'
};

//создание функции поиска и удаления класса
function removeClass(obj, cls){
    //создание пустого массива
    var arr = [];
    //передача в массив элементов строки className объекта
    arr = obj.className.split(" ");
    //создание цикла перебора элементов массива
    for (var i = 0; i < arr.length; i++) {
        //поиск заданого элемента в массиве
        if (arr[i] == cls) {
            //удаление элемента при его наличии
            arr.splice(i,1);
        }
        //объединение элеменотв массива в строку className объекта
        obj.className = arr.join(" ");
    }
    //возврат функцией объекта
    return (obj);
}
//вывод результата в консоль
console.log(removeClass(obj, 'open')); // obj.className='menu'
//console.log(removeClass(obj, 'blabla')); // без изменений

//------------OLE2
//создание объекта
var obj = {
    className: 'my menu menu'
};

//создание функции поиска и удаления класса
function removeClass(obj, cls){
    //создание пустого массива
    var arr = [];
    var newArr = [];
    //передача в массив элементов строки className объекта
    arr = obj.className.split(" ");

    //создание цикла перебора элементов массива
    for (var i = 0; i < arr.length; i++) {
        //поиск уникального неповторяющегося элемнта в массиве
        if (arr[i] != cls) {
            //добавление уникального неповторяющегося элемнта в новый массив
            newArr.push(arr[i]);
        }
    }
    //объединение элементов нового массива в строку className объекта
    obj.className = newArr.join(" ");
    //возврат функцией объекта
    return (obj);
}

//вывод результата в консоль
console.log(removeClass(obj, 'menu')); // obj.className='menu'
console.log( obj.className ); // 'my'


// --------------NK
//creating Object obj with property "className"
var obj = {
    "className": "open menu my my menu menu open",
};

//creating function for removing classes, function has parameters: obj, cls (type string)
function removeClass(obj, cls) {
    //defining variable classNameArray for array, which created by method split
    var classNameArray = obj.className.split(" ");
    //loop for searching cls in classNumberArray and removing those items
    for (var i = 0; i < classNameArray.length; i++) {
        //defining variable numberClass for saving number index of item, which matches with cls
        var numberClass = classNameArray.indexOf(cls);
        //condition: if numberClass>=0 (some item of classNumberArray matches with cls
        if (numberClass >= 0) {
            //removing 1 item from index=numberClass
            classNameArray.splice(numberClass, 1);
        }
    }
    //joining items in one line with separator " "
    obj.className = classNameArray.join(" ");
    //returning result-object obj with new value of property
    return obj;
}
//calling function and display data
console.log(removeClass(obj, "open"));


//------------EV
function removeClass(obj, cls){
    var arr = obj.className.split(" "); //Split string by " ".
    var newArr = [];

    for(var i = 0; i < arr.length; i++){
        if (arr[i] != cls){            //check that the values of array did not match cls
            newArr.push(arr[i]);       //if word isn’t matched, push element to array
        }
    }
    obj.className = newArr.join(" ");  ////transform the array into a string and assign to the attribute className
}

obj = {
    className: 'my menu menu'
};

removeClass(obj, 'menu');

console.log( obj.className ); // 'my'. display new array