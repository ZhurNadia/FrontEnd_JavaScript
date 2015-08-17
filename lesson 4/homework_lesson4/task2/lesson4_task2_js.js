/**Задание 2 (Проверка на СПАМ)

 Напишите функцию checkSpam которая проверяет строку на содержание слов: spam, sex.

 checkSpam('get new Sex videos'); // true
 checkSpam('[SPAM] How to earn fast money?'); // true
 checkSpam('New PSD template'); // false
 */

var str = prompt('Введите значение');
str = str.toLowerCase();
function checkSpam(str) {
 if (str.indexOf('viagra') >= 0 || str.indexOf('xxx') >= 0) {
  alert('true');
 } else {
  alert('false');
 }
}
checkSpam(str);
