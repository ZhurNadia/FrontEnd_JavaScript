/**
 * Created by nadia on 25.08.15.
 */
//Задачка 7.6 стр 43

function add(i, a) {
    return i + a;
}

add(3,4);
console.log(add());

function mul(x, y) {
    return x * y;
}

mul(3,4);
console.log(mul());


//Задачка 7.7
/*напишите функцию */

function identityf(w) {
    return function() {
        return w;
    }
}
var idf = identityf(3);
console.log(idf());


// Задача 7.8  напишите функцию кот складывает числа из 2х вызовов addf(3)(4); //7

function addf(f) {
    return function (s) {
        return f + s;
    }
}
var b = addf(3)(4);
console.log(b);

//задачка 7.9
/**напишите функцию кот принимает бинарную функцию и вызывает ее с имя аргументами
var addf2 = applyf(add);
console.log(addf2(3)(4));  //7
console.log(applyf(mul)(3)(4)); //12
*/


function addf2(x) {
    return function (y) {
        return x + y;  //undefined
    }
}


function applyf(mul) {
    return function (x) {
        return function(y) {
            return mul(x)(y);
        }
    }
}


console.log(addf2(3)(4));
console.log(applyf(mul)(3)(4)); //12


//или
function add(x,y) {
    return x + y;
}

function mul(x,y) {
    return x * y;
}

function applyf(func) {
    return function (a) {
        return function (b) {
            return func(a,b) {
            }
        }
    }
}


//или
function addf2(x) {
    return function (y) {
        return x + y;  //undefined
    }
}

var a = applyf( addf2 );
a(3)(4);  // 7

var b = a(6);  //undefined

b(7); // 13


function applyf(mul) {
    return function (x) {
        return function(y) {
            return mul(x)(y);
        }
    }
}
// посмотреть решения предыдущих задач - они связаны

