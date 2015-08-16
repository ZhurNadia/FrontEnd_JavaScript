/**Задание 3:
 Напишите код, который будет запрашивать логин пользователя (prompt).

 Если посетитель вводит 'admin', то спрашивать пароль, если нажал отмена (escape) — выводить 'Canceled',
 если вводит что-то другое — 'Access denied'.

 Пароль проверять так. Если введён пароль 'passw0rd', то выводить 'Welcome home!', иначе — 'Wrong password',
 при отмене — 'Canceled'. */

var login = prompt( 'Enter your login name', '');

if (login == 'admin') {
    var pass = prompt('Enter your password', '');
    if (pass == 'passw0rd') {
        alert('Wellcome home!');
    } else if (pass == null) { //при отмене
        alert('Canceled');
    } else {
        alert('Wrong password!');
    }
} else if (login == null) { //при отмене
    alert('Canceled');
} else {
    alert('Access denied');
}