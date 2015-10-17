//Задачка 1 лекция 3
var browser = promt('Введите наименование вашего браузера', ' ');

/**
 * if (browser = 'IE') {
    alert('0, да у вас IE!');
    else if (browser == 'Chrome' || browser == 'Safari' || browser == 'Firefox' || browser == 'Opera') {
        alert('Браузер норм!');
    }
    else ('')
}
 */


if(browser == "IE") {
    alert("0, да у вас IE!");
} else if (browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera") {
    alert("Браузер норм!");
} else {
    alert("Кто здесь?");
}