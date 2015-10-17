/**
 * Created by nadia on 18.08.15.
 */
    //задача стр 12 урок 5
var obj = {
    'name' : 'Sergey';
    'surname' : 'Petrov';
}

obj.name = 'Andrey';
obj.age : 30;
delete obj.name;

console.log(obj);




// задачка
//Создать функцию isEmpty(obj) которая возвращает тру? если в объекте нет свойств и фолс - если одно свойство есть

function isEmpty(obj) {
    for (var key in todoList) {
        console.log(key);
    }

}

var todoList = {
    name : 'Sergey';
    age : 25;
};

console.log(isEmpty(todoList));
todoList['homework'] = 'lesson5';
console.log(isEmpty(todoList))


//v 2 page 16
var user = {
    "name": "Sergej",
    "surname": "Petrov"
}
var obj = new Object();
function isEmpty(user) {
    var count = 0, result = false;
    var result;
    for (var item in user) {
        count++;
    }
    if (count > 0) result = true;

    return result;
}
alert(isEmpty(user));



// page 17
//cоздайте функцию, которая возвращает общий размер фонда зарплат (сумму) всего отдела/

function salarySum (obj) {
    var sum = 0, i;
    for (var key in obj) {
        sum += obj[key]}
    return sum;
}

var salaries = {
    'junior': 1000,
    'meddle': 2500,
    'senior': 3500,
    'lead': 5000

};
console.log(salarySum(salaries));


//page 38
//написать функцию, кот принимает на вход массив и возвращает последний элемент массива

var  elem = [1, 2, 3, 4];

function resul() {
    console.log(resul())
}



//в2
var arr = [1,2];
function returnLastElement() {
    return arr.length
}
console.log( returnLastElement(arr))

//в3

function lastElement (array,elem){
    return array.push
        [array.length -1];
}
alert()


//след зад
var arr = [1,5];
function returnLastElement() {
    return arr[arr.length -1]
}
console.log( returnLastElement(arr))

//написать функцию которая принимает на вход 2 параметра массив, и
function addElement (array, elem){
    array.push(elem);
    return array;
}