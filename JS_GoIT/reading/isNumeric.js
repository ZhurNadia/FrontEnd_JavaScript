/**
 * Created by nadia on 19.08.15.
 */
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 Функция isFinite(n) преобразует аргумент к числу и возвращает true, если это не Infinity/-Infinity/NaN.
 Таким образом, правая часть отсеет заведомо не-числа, но оставит такие значения как true/false/null и пустую строку '', т.к. они корректно преобразуются в числа.

 Для их проверки нужна левая часть. Вызов parseFloat(true/false/null/'') вернёт NaN для этих значений.
 Так устроена функция parseFloat: она преобразует аргумент к строке, т.е. true/false/null становятся "true"/"false"/"null", а затем считывает из неё число, при этом пустая строка даёт NaN.

 В результате отсеивается всё, кроме строк-чисел и обычных чисел.
 */