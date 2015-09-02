/**
 * Created by nadia on 02.09.15.
 */
//Задание 4
//
//function exercise4() {
//
//    //Running script
//    for (var i = 1; i <= 100; i++) {
//        if (i % 5 == 0 && i % 3 == 0) {
//            console.log('FizzBuzz');
//        } else {
//            console.log(i);
//        }
//    }
//}
//
////Задание 5
//
//function exercise5() {
//
//    //variable declaration and getting value
//    var quantityRow = +prompt('Введите количество колонок для шахматной доски'),
//        quantityString = +prompt('Введите количество рядков для шахматной доски'),
//        hesh = "#",
//        value = '';
//    //Running script
//
//    for (var row = 1; row <= quantityRow; row++) {
//        for (var tableString = 1; tableString <= quantityString; tableString++) {
//            if (row % 2 == 0) {
//                if (tableString % 2 != 0) {
//                    value += hesh;
//                } else {
//                    value += " ";
//                }
//            } else {
//                if (tableString % 2 == 0) {
//                    value += hesh;
//                } else {
//                    value += " ";
//                }
//            }
//        }
//        console.log(value)
//        value = '';
//    }
//}
//
////Задание 5
//
//function exercise6() {
//
//    //variable declaration and getting value
//    var getNumber = +prompt('Введите число для поднесения его в степень', ''),
//        getDegree = +prompt('Введите степень', ''),
//        result = getNumber;
//    //Running script
//    for (var i = 1; i < getDegree; i++) {
//        result = result * getNumber;
//    }
//    console.log(result);
//}


//creating an array of buttons
var buttons = document.querySelectorAll('.lesson-button');

//add events for buttons
var strWithClassNameValue;
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        strWithClassNameValue = this.className;
        strWithClassNameValue = +strWithClassNameValue.substring(strWithClassNameValue.length - 1);

        switch (strWithClassNameValue) {
            case 1:
                exercise1();
                break;
            case 2:
                exercise2();
                break;
            case 3:
                exercise3();
                break;
            case 4:
                exercise4();
                break;
            case 5:
                exercise5();
                break;
            case 6:
                exercise6();
                break;
        }

        //        if (this.className == "lesson-button _1") {
        //            exercise1();
        //        } else if (this.className == "lesson-button _2") {
        //            exercise2();
        //        } else if (this.className == "lesson-button _3") {
        //            exercise3();
        //        } else if (this.className == "lesson-button _4") {
        //            exercise4();
        //        } else if (this.className == "lesson-button _5") {
        //            exercise5();
        //        } else if (this.className == "lesson-button _6") {
        //            exercise6();
        //        }
    }
}