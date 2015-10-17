/**Задание 3 (Троеточие)

 Напишите функцию, которая принимает на вход строку и возвращает ее неизменной если ее длина не превышает 20 символов.
 Если длинна больше 20, то обрезает строку и добавляет в конец строки '...'
 */

//create function
function cutString(str) {

 //check length of the string
 if (str.length > 20) {

  //cut original string and add a new string "..."
  return str.slice(0,20) + "...";
 } else {
  return str;
 }
}
console.log( cutString("Lorem ipsum, lorem ipsum, lorem ipsum") );


/** ВАРИАНТ 2
 *
 //function for cutting string
 function cutString(string) {
    //defining variables - new string with '...'
    var cutString;
    //checking
    if (string.length>20) {
        cutString=string.substring(0,20)+'...';
    }
    console.log(cutString);
}
 cutString("Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
 "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
 */


/** ВАРИАНТ 3
 function exercise3() {

    //Running script
    var getString = prompt('Введите строку', '');
    if (getString.length >= 20) {
        getString = getString.substring(0, 20) + " ...";
    }
    alert(getString);
}
 */

/** ВАРИАНТ 4 - ЕВ
 * function getThreePoints(string, maxLength){
//condition - number of symbols must be less then 20.
	if (string.length > maxLength){
//in case, when length is more - cut the text to 17 symbols+3 points. Totally get - 20 symbols.
		 return string.slice(0, maxLength - 3) + '...';
	}else{
		return (string);
	}
}

 //display the comment
 console.log(getThreePoints(prompt("Введите ваш комментарий"), 20));
 */
