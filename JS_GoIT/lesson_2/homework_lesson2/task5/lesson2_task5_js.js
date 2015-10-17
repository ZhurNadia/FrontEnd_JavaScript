/**Задание 5
 Перепишите if..else с использованием нескольких операторов '?':

 var name = 'admin', text;

 if (name == 'admin') {
  text = 'Hi';
} else if (name == 'manager') {
  text = 'Hello';
} else if (name == '') {
  text = 'No login';
} else {
  text = '';
}
 */

var name = 'admin', text;

text = (name == 'admin') ? 'Hi' :
    (name == 'manager') ? 'Hello' :
        (name == '') ? 'No login' : '';
