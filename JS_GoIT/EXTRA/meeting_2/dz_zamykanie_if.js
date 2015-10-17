/**
 выносим в отделную функцию
 которая принимает аргументы name, nationality и возвращает уже строку с приветсвием
 в итоге у нас будет 2е функции
 перед вызовом второй функции нужно промптом получить name,  nationality и передать во вторую функцию, которая вернет
 нам строку с приветствием
 это строку нам нужно залертить
*/


 // from form html
 var nationality = prompt('Where you from?', 'en, ua, de etc.');
 var name = prompt('What is your name?', ' ');

 function makeHello(prefix){
    // {'prefix': 'Mr.'}
    var innerF = function(givenName){
        // {}
        return prefix + " " + givenName;
    }
    return innerF;
}

 function makeHello2() {
    var england = makeHello("Mr.");
	var german = makeHello("Ger");
	var ukrainian = makeHello("Pan");
    switch(nationality) {
        case 'en':
            alert('Hello ' + england(name));
            break;
        case 'de':
            alert('Willkommen ' + german(name));
            break;
        case 'ua':
            alert('Pryvit ' + ukrainian(name));
            break;
        default:
            alert('Where are you from ' + name);
    }
}

 makeHello2();




 //////////

var arguments = ['meal', 'bread', 4]

arguments[1] == 'bread' // 1
var index = 0
arguments[index] == 'meal' // 2
arguments[index + 2] == 4 // 3

var get_index = function(){ return 2 }

arguments[get_index()] == 4 // 3.1


///////////


function makeHello(prefix){
    // {'prefix': 'Mr.'}
    var innerF = function(givenName){
        // {}
        return prefix + " " + givenName;
    }

    return innerF;
}

var england = makeHello("Mr.")
var german = makeHello("Ger")
var ukrainian = makeHello("Pan")

// from form html
var nationality = "ua"
var name = "Petro"

if(nationality == "en"){
    alert(england(name))
}
else if(nationality == "de"){
    alert(german(name))
}
else if(nationality == "ua"){
    alert(ukrainian(name))
}