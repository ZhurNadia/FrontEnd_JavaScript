//каждый четвертый аргумент в результате должен быть в верхнем регистре, символ раздилитель должен быть последним
// аргументом и не входить в состав перечисления
//результат : строка разделенная символом из последнего аргумента как разеделителем и каждый четвертый в верхнем регистре

function doJam() {
    var jam = [];
    for(var elem = 0; elem < arguments.length - 1; elem++) {
        if(elem % 4 == 0) {
            jam.push(arguments[elem].toUpperCase());
        } else jam.push(arguments[elem]);
    }
    return jam.join(arguments[arguments.length - 1]);
}

console.log(doJam('sugar', 'apples', 'strawberry', 'ananas', 'banana', 'vanila', 'mint', 'cherry', 'water', 'juice', ' + '));




// http://blog.victorquinn.com/javascript-arguments-explained
// you want a function to be able to accept an arbitrary number of arguments.
// Then we can iterate over each item in arguments and do something with each one
var uppercase_all_names = function() {
    var upper = [];
    for (i = 0; i < arguments.length; i++) {
        //сharAt(0) возвращает строку из выбранного первого символа аргумента и toUpperCase делает его в верх.регистре
        // и прибавляется к этому символу этот же аргумент, но уже обрезаный substr(1) без первой буквы
        upper[i] = arguments[i].charAt(0).toUpperCase() + arguments[i].substr(1);
    }
    return upper;
};

console.log(uppercase_all_names("victor", "james", "quinn"));


//This works, but surely we can do better! Let’s get a bit functional with map() and reduce the complexity of that code:

var uppercase_all_names = function() {
    var args = Array.prototype.slice.call(arguments);
    return args.map(function (name) {
        return name.charAt(0).toUpperCase() + name.substr(1);
    });
};

uppercase_all_names("victor", "james", "quinn");

// Will return ["Victor", "James", "Quinn"]