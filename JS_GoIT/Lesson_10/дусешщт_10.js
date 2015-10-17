/**
 * Created by nadia on 04.09.15.
 */

function Person(age, name) {   // или можно так первую строку var Person = function(age, name) {
    this.age = age;
    this.name = name;

    this.greet = function () {
        alert('Hello, my name is ' + this.name + '. I am ' + this.age);
    }
};


var manager = new Person(25, "Вася");
var developer = new Person(28, "Петя");

developer.greet()
manager.greet()


// пример инкапсуляции в ООП
function personSet(object) {
    var person = {
        hand: 0,
        leg: 0,
        head: 0
    }
    return {
        setHand: function (n) {
            if (n = 2) {
                person.hand = n;
            } else {
                person.hand = 2;
            }
        },
        getHand: function () {
            return person.hand;
        }
    }
}
var myPerson = personSet();
myPerson.setHand(10);
console.log(myPerson.getHand());
person.hand = 10;
console.log(person.hand);
//у нас есть объект человек
//мы ему можем установить количество рук, но и голов
//пример для рук
//сколько бы ни пытался установить пользователь, все равно будет 2
//просто изменить свойство нельзя