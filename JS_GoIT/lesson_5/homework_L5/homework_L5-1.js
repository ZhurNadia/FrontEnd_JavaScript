/**
Задание 1 (Кто первым решил больше всех задач)
Напиште код который выведет сотрудника который выполнил больше всех задач.
 Например:
var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};
*/

//----------------- -ole
// создание объкта с указанием его свойств и значений
var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

var maxTask = 0; //объявление переменной - минимальное колличество выполненных задач
var name = ""; ////объявление переменной - пустое имя сотрудника

//цикл проверки свойств объекта
for (var key in tasksCompleted) {

    //проверка больше ли значение каждого свойства объекта от значения по умолчанию
    if (maxTask < tasksCompleted[key]) {

        //если выполняется условие, то переменной присваивается максимальное значение
        maxTask = tasksCompleted[key];

        //если выполняется условие, то переменной присваивается имя свойства объекта
        name = key;
    }
}

//вывод результатов в консоль
console.log(name);


//--------EV
//declare object with staff results
var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};

//declare variables with max values for comparison
var max = 0;
var maxKey = "";

//iterate through object try to find value bigger than max and store value and key
for (var key in tasksCompleted){
    if (max < tasksCompleted[key]){
        max = tasksCompleted[key];  //store bigger value
        maxKey = key;               //store key of the bigger value
    }
}

console.log(max);     //display value (work results)
console.log(maxKey);  //display key (employee Name)


//----------------VER1----------------- -NK
//creating object
var taskCompleted = {
    //object's properties
    "Anna": 29,
    "Serg": 35,
    "Elena": 1,
    "Anton": 99
}

//function for searching employee with maximim task completed
function bestEmployee(taskCompleted) {
    //defining variable maxTask and assigning value as first item of object
    var maxTask = taskCompleted[1];
    //loop for checking object's properties
    for (var item in taskCompleted) {
        //searching item with maximum task completed
        if (taskCompleted[item] > maxTask) {
            //assigning value maxTask if nex item bigger then maxItem
            maxTask = taskCompleted[item];
        }
    }
    //returning item with maximum task completed
    return item;
}
//calling function and display data
console.log("Ver1.The best employee is " + bestEmployee(taskCompleted));

//----------------VER2-----------------

var taskCompleted = {
    //object's properties
    "Anna": 29,
    "Serg": 35,
    "Elena": 1,
    "Anton": 99
}
//defining variable maxTask and assigning value as first item of object
var maxTask = taskCompleted[1];
//loop for checking object's properties
for (var item in taskCompleted) {
    //searching item with maximum task completed
    if (taskCompleted[item] > maxTask) {
        //assigning value maxTask if nex item bigger then maxItem
        maxTask = taskCompleted[item];
    }
}
//calling function and display data
console.log("Ver2.The best employee is " + item);