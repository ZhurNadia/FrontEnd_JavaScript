/**
 Задание 4 (Object sort)

 Напишите код, который отсортирует массив объектов people по полю age.

 Например:

 var vasya = { name: 'Вася', age: 23 };
 var masha = { name: 'Маша', age: 18 };
 var vovochka = { name: 'Вовочка', age: 6 };

 var people = [ vasya , masha , vovochka ];

 ... ваш код ...

 // теперь people: [vovochka, masha, vasya]
 console.log(people[0].age) // 6
 Выведите список имён в массиве после сортировки.
 */

//-----------EV
var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(compare);

//compare the value of each element. Depends of the result return value1 or -1.
//in this way we sort the elements with method sort on line 7. and using attribute “age” for comparing
function compare(a, b){
    if(a.age > b.age){
        return 1;
    }
    if (b.age > a.age){
        return -1;
    }
}

// теперь people: [vovochka, masha, vasya]
console.log(people[0].age) // 6


//------------OL`e
//создание первого объекта
var vasya = { name: 'Вася', age: 23 };

//создание второго объекта
var masha = { name: 'Маша', age: 18 };

//создание третьего объекта
var vovochka = { name: 'Вовочка', age: 6 };

//создание массива из трех объектов
var people = [ vasya , masha , vovochka ];

//применение к массиву метода сортировки и фунции сравнения по значению age
people.sort(function (a,b) {return a.age - b.age})

//вывод результата в консоль
console.log(people); // теперь people: [vovochka, masha, vasya]
console.log(people[0].age) // 6


//-------------NK
//creating objects vasya, masha, vovochka
var vasya = {
    name: 'Vasya',
    age: 23
};
var masha = {
    name: 'Masha',
    age: 18
};
var vovochka = {
    name: 'Vovochka',
    age: 6
};
//creating array of object
var people = [vasya, masha, vovochka];
//creating function increase for sorting array with property age
function increase(peopleA, peopleB) {
    if (peopleA.age > peopleB.age) {
        return 1;
    } else if (peopleA.age < peopleB.age) {
        return -1;
    } else {
        return 0;
    }
}
//sorting array by function increase
people.sort(increase);
//display array people with all properties of objects
for (var i = 0; i < people.length; i++) {
    console.log(people[i]);
}