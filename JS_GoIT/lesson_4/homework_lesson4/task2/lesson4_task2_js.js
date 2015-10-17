/**Задание 2 (Проверка на СПАМ)

 Напишите функцию checkSpam которая проверяет строку на содержание слов: spam, sex.

 checkSpam('get new Sex videos'); // true
 checkSpam('[SPAM] How to earn fast money?'); // true
 checkSpam('New PSD template'); // false
 */

/** ТЕОРИЯ:  indexOf
 * Поиск осуществляется слева направо. Метод чувствителен к регистру символов.
 "Привет, мир".indexOf("Привет")    // вернет 0
 "Привет, мир".indexOf("Корова")    // вернет -1
 "Привет, мир".indexOf("мир")    // вернет 8
 "Привет, мир".indexOf("Мир") // вернет -1

 Пример: с позицией
 "Привет, мир".indexOf("Привет", 0)    // вернет 0
 "Привет, мир".indexOf("р", 1)    // вернет 1
 "Привет, мир".indexOf("р", 5)    // вернет 10

 Пустая подстрока находится в любом случае:
 Пример: для пустой подстроки
 "Привет, мир".indexOf("", 5)    // вернет 5
 "Привет, мир".indexOf("", 7)    // вернет 7
 "Привет, мир".indexOf("", 999)    // вернет 11 (длину)
 */

function checkSpam(str) {   //создаем функцию
// объявляем новую перменную - и переводим исходную в нижний регистр
// Метод toLowerCase не применяется к знакам, отличным от букв
 //можно было использовать по аналогии и метод .toUpperCase() и тогда поисковые слова прописывать заглавными
var strLowerCase = str.toLowerCase();

//так как наша строка уже будет в нижнем регистре, то проверка на наличие слов "sex" или "spam".
 // возвращаем в консоль результат поиска. Если совпало и в строке есть поисковое слово, то выведет тру, нет - фолс
return console.log(strLowerCase.indexOf("sex") >= 0 || strLowerCase.indexOf("spam") >= 0);
}
checkSpam('get new Sex videos'); // true
checkSpam('[SPAM] How to earn fast money?'); // true
checkSpam('New PSD template'); // false


/** ВАРИАНТ 2
 var str = prompt('Введите значение');
 str = str.toLowerCase();
 function checkSpam(str) {
 if (str.indexOf('spam') >= 0 || str.indexOf('sex') >= 0) {
  console.log('true');
 } else {
  console.log('false');
 }
}
 checkSpam(str);  //вводим в промте 'get new Sex videos', '[SPAM] How to earn fast money?'; 'New PSD template'
 */


/**ВАРИАНТ 3
 * function exercise2() {

    //Running script
    function checkSpam(string) {
        var toUpper = string.toUpperCase();
        (~toUpper.indexOf('SEX') || ~toUpper.indexOf('SPAM')) ? alert(true): alert(false);

    }

    console.log(checkSpam('get new Sex videos')); // true
    console.log(checkSpam('[SPAM] How to earn fast money?')); // true
    console.log(checkSpam('New PSD template')); // false
}
 */

/** ВАРИАНТ 3 - НК
//function for checking spam
function checkSpam(string) {
 //defining variables for key word with letters in different variants
 var sex = new Array('sex', 'Sex', 'SEX', 'SeX', 'seX');
 var spam = new Array('spam', 'Spam', 'SPAM', 'SPam', 'SpAM', 'SPaM', 'spaM');
 //defining variables for result
 var resultSex, resultSpam;
 //loop for checking "sex"
 for (var iSex = 0; iSex < sex.length; iSex++) {
  //checking "sex" in string
  if (string.indexOf(sex[iSex]) >= 0) {
   //result if word was found and break loop
   resultSex = true;
   break;
  } else {
   //result if word was not found
   resultSex = false;
  }
 }
 //loop for checking "spam"
 for (var iSpam = 0; iSpam < spam.length; iSpam++) {
  //checking "spam" in string
  if (string.indexOf(spam[iSpam]) >= 0) {
   //result if word was found and break loop
   resultSpam = true;
   break;
  } else {
   //result if word was not found
   resultSpam = false;
  }
 }
 //display data for "sex"
 console.log('Sex ' + resultSex);
 //display data for "spam"
 console.log('Spam ' + resultSpam);
}
//call function
checkSpam('[SPAM] How to earn fast money?');
*/


/** ВАРИАНТ 4 -I
//function for checking spam, key words spam and sex
function checkSpam(string) {
 //defining variables, newString is string in lower case
 var newString = string.toLowerCase();
 var result;
 //condition for checking spam in newString, indexOf>=0 means, that word was found
 if (newString.indexOf('spam')>=0||newString.indexOf('spam')) {
  //result if word was found
  result = true;
 } else {
  //result if word was not found
  result = false;
 }
 //display result
 console.log(result);
}
//calling function
checkSpam('get new Sex videos');
 */

/** ВАРИАНТ 5 - ЕВ
 function checkSpam(string){
//outputs a string in lowercase, because our method case sensitive
	var lowerString = string.toLowerCase();

//check that the result of "indexOf" is not equal to "-1".
	if (lowerString.indexOf("spam") != -1 || lowerString.indexOf("sex") != -1){
		return true;
	}else{
		return false;
	}
}

 //display the result
 console.log(checkSpam("get new Sex videos"));
 console.log(checkSpam("[SPAM] How to earn fast money?"));
 */