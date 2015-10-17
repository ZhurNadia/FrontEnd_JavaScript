/**
 * Created by nadia on 22.09.15.
 */
//шаблонная функция = класс

///
function myCoolFunc() {
    return this.callMePlease;
}

var something = {callMePlease : 'Yoohooo'};
console.log(myCoolFunc.call(something)); //call подтягивает переменную самсинг и становится this для функции/
// И в обекте самсинг должно содержаться свойство callMePlease, к которому мы ретурним в функции



////
function forCallingApply(){
    var smth = 0;  // вынесли переменную , чтоб использовать ее в цикле
    for(var x = 0; x < arguments.length; x++){ //перебираем все аргументы нашей фукнции
        smth += arguments[x] + 5; //и присваиваем нашей переменной смсинг к ней же прибавленные по очереди все аргументы из будущего массива
    }
    return smth; // обязателньо заретурним
}

var arr = [2, 4, 6, 8];
console.log(forCallingApply.apply({}, arr)); //с спользованием эпплай
console.log(forCallingApply.call({}, 2, 4, 6, 8));/// тоже самое без массива с использованием кол




function max() {
    var result = Number.NEGATIVE_INFINITY;
    for(var i = 0; i < arguments.length; i++){
        if(arguments[i] > result){
            result = arguments[i];
        };
    };
    return result;
};
var arr = [6, 2, 8, -1, 10, 4];

console.log(max.apply({}, arr));


////воруем методы с колом
var User = function(first_name){
    this.first_name = first_name;

    this.displayName = function(){
        return this.first_name;
    }
}

var jeniya = new User("Jeniya");
var vova = new User("Vova");

console.log(jeniya.displayName())
console.log(jeniya.displayName.call(vova))

    [].forEach.call(arguments, function(arg){  })



///два массива - заимствуем

var brJohn = [2,4];
var brEndy = [5,7];

brJohn.push.call(brEndy, 'apple'); //заимствуем метод пуш у brJohn
console.log(brJohn); //выведет [2,4]
console.log(brEndy); //выведет [5,7,'apple']