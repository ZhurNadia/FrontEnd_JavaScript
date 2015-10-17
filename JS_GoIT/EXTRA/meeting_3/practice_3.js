/**
 * Created by nadia on 17.09.15.
 */
//THIS
    //THIS всегда ссылается на объект от имени которого запускается метод
    //шаблон функции - для создания однотипных свойств в нескольких переменных - класс/ Класс принято писать с большой буквы
// this
var nadya = {name: "Nadya"};
var igor = {name: "Igor"};
var jeniya = {name: "Jeniya"};
var lena = {name: "Lena"};

var classmates = [nadya, igor, jeniya, lena];

function sayHi(user){
    return "Hi, I'm " + user.name;
}

for(var i = 0; i < classmates.length; i++){
    console.log(sayHi(classmates[i]))
}



//////
// this
var nadya = {name: "Nadya"};
var igor = {name: "Igor"};
var jeniya = {name: "Jeniya"};
var lena = {name: "Lena"};

var classmates = [nadya, igor, jeniya, lena];

function sayHi(user){
    return "Hi, I'm " + user.name;
}

nadya.helloMe = sayHi;
igor.helloMe = sayHi;
jeniya.helloMe = sayHi;
lena.helloMe = sayHi;

for(var i = 0; i < classmates.length; i++){
    // 1) console.log(sayHi(classmates[i]))

    // 2)
    var student = classmates[i];
    var greeting = student.helloMe(student);
    console.log(greeting);
}

//////


"use strict"

// this
var nadya = {name: "Nadya"};
var igor = {name: "Igor"};
var jeniya = {name: "Jeniya"};
var lena = {name: "Lena"};

var classmates = [nadya, igor, jeniya, lena];

function sayHi(){
    return "Hi, I'm " + this.name;
}

nadya.helloMe = sayHi;
igor.helloMe = sayHi;
jeniya.helloMe = sayHi;
lena.helloMe = sayHi;

console.log(nadya.helloMe());
console.log(igor.helloMe());
console.log(jeniya.helloMe());
console.log(lena.helloMe());


// for(var i = 0; i < classmates.length; i++){
//     // 1) console.log(sayHi(classmates[i]))

//     // 2)
//     var student = classmates[i];
//     var greeting = student.helloMe(student);
//     console.log(greeting);
// }

//console.log(sayHi());

///////////////////
//создать 4 животных (объектов) - собаку, кошку, мышку, дракон
//у каждого жив есть свойство voice, и каждый что-то говорит
//потом объединить в массив и назвать его funny company
//создать функцию и будет возвращать строку с обращением к зис и брать сво-во войс

var dog = {
    voice: 'wof-wof',
    kind: 'Dog'
};
var cat = {
    voice: 'Miaoo',
    kind: 'Cat'
};
var mouse = {
    voice: 'pi-pi-pi',
    kind: 'Mouse'
};
var dragon = {
    voice: 'ha-ha',
    kind: 'Dragon'
};

var funnyCompany = [dog, cat, mouse, dragon];

function makeVoice (){
    return this.kind + ' says "' + this.voice +'"';
}

dog.animalVoice = makeVoice;
cat.animalVoice = makeVoice;
mouse.animalVoice = makeVoice;
dragon.animalVoice = makeVoice;

console.log(dog.animalVoice());
console.log(cat.animalVoice());
console.log(mouse.animalVoice());
console.log(dragon.animalVoice());


///////////

function Classmate(name){
    this.name = name;
}

var classmates = [new Classmate("Nadya"), new Classmate("Igor"), new Classmate("Jeniya"), new Classmate("Lena")];

// classmates.forEach == classmates.map - используется вместо цикла for
classmates.forEach(function(student){
    console.log(student.name);
})



///////
function Classmate(name){
    this.name = name;
    this.hello = function(){
        return "Hi, I'm " + this.name;
    }
}

var classmates = [new Classmate("Nadya"), new Classmate("Igor"), new Classmate("Jeniya"), new Classmate("Lena")];

// classmates.forEach == classmates.map - используется вместо цикла for
classmates.forEach(function(student){
    console.log(student.hello());
})




///////
"use strict"

function Classmate(name, age){
    this.name = name;
    this.age = age;

    this.number = 15;
    this.hello = function(){
        return "Hi, I'm " + this.name;
    }
    this.greetSomeone = function(someone){
        return this.name + " greet you, " + someone.name;
    }
    this.guessNumber = function(number){
        if(number == this.number){
            return "Equal"
        }else{
            return "Not equal"
        }
    }
    this.happyBirthday = function(){
        this.age += 1;
    }
    this.howOldAreYou = function(){
        return "I'm " + this.age + " years old."
    }
}

var classmates = [new Classmate("Nadya", 5), new Classmate("Igor", 6), new Classmate("Jeniya", 2), new Classmate("Lena", 5)];

// classmates.forEach == classmates.map
//classmates.forEach(function(student){
//	console.log(student.hello());
//})

//console.log(classmates[0].greetSomeone(classmates[1]));

//console.log(classmates[3].guessNumber(12))
//console.log(classmates[3].guessNumber(15))

//classmates.forEach(function(student){
//	console.log(student.number);
//})

classmates.forEach(function(student){
    student.happyBirthday();
    console.log(student.howOldAreYou());
})


http://jsfiddle.net/mindinpanic/vy9jwk1j/