/**
 * Created by nadia on 12.09.15.
 */
//каждый третий аргумент в результате должен быть в верхнем регистре, символ раздилитель должен быть последним аргументом и не входить в состав перечисления
//результат : строка разделенная символом из последнего аргумента как разеделителем и каждое третье в верхнем регистре


/**function cleaning() {
    var result = [];

    for (var elem = 0; elem < arguments.length - 1; elem++) {

        if (elem % 3 == 0) {
            result.push(arguments[elem].toUpperCase());
        } else result.push(arguments[elem]);
    }
    return result.join(arguments[arguments.length - 1]);
}

console.log(cleaning('wash-up', 'dust', 'vacuum', 'ironing', 'laundry', 'cooking', 'dishwashing', 'watering', 'trash', ' + '));
*/

function cleaning() {
    var result = [];
// начинаем цикл со второго элемента массива аргументов, чтобы первый (под индексом 0) не переводился в верх.регистр
    for (var elem = 1; elem < arguments.length - 1; elem++) {
//при условии если аргумент будет делится на 3 без остатка, т.е каждый третий элемент
        if (elem % 3 == 0) {
            //будет выполнятся копирование аргумента при каждом проходе цикла и такой третий аргумент поднимается в верх.регистр
            result.push(arguments[elem].toUpperCase());
            //иначе будет добавлятся аргумент в таком виде какой он был передан
        } else result.push(arguments[elem]);
    }
    //функция будет возвращать первый аргумент (под индексом 0) с элементом связкой, которая является последним элементом в массиве аргументов
    return arguments[0] + arguments[arguments.length - 1] + result.join(arguments[arguments.length - 1]);
}

console.log(cleaning('wash-up', 'dust', 'vacuum', 'ironing', 'laundry', 'cooking', 'dishwashing', 'watering', 'trash', 'sewing',' + '));
//результат: wash-up + dust + vacuum + IRONING + laundry + cooking + DISHWASHING + watering + trash + SEWING

//как сделать чтоб первый раз начиналось с третьего элемента, а не с четвертого


//если название аргумента будет с upper (обязательно аргумент прописан в нижнем регистре и в этом случае если аргумент аппер уже в верхнем регистре - то не трогаем ее)
// - то вывести его в верхнем регистре

function upperFunc() {
    var res = [];
    for(var i = 0; i < arguments.length; i++) {
        if(arguments[i] == 'upper') {
            res.push(arguments[i].toUpperCase());
        } else res.push(arguments[i]);
    }
    return res.join(' ');
}

console.log(upperFunc('UPPER', 'lower', 'upper', 'medium', 'normal'));


// если встречается слово в аргументах слово LOWER и оно в верхнем регистре? то нужно его перевести в нижний регистр

function lowerFunc() {
    var res = [];
    for(var i = 0; i < arguments.length; i++) {
        if(arguments[i] == 'LOWER') {
            res.push(arguments[i].toLowerCase());
        } else res.push(arguments[i]);
    }
    return res.join(' ');
}

console.log(lowerFunc('UPPER', 'lower', 'upper', 'medium', 'LOWER', 'normal'));
