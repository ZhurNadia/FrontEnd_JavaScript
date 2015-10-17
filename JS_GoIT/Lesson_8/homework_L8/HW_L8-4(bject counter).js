/**
 * Задание 4 (Object counter)

 Добавить в конструктор Article:

 Подсчёт общего количества созданных объектов.
 Запоминание даты последнего созданного объекта.
 Используйте для этого статические свойства.
 Пусть вызов Article.showStats() выводит то и другое.

 Использование:

 function Article() {
  this.created = new Date();
  // ... ваш код ...
}

 new Article();
 new Article();

 Article.showStats(); // Всего: 2, Последняя: (дата)

 new Article();

 Article.showStats(); // Всего: 3, Последняя: (дата)
*/


//----------------OLE
//создание функции конструктора для вывода колличества статтей и последней даты
function Article() {

    //создание свойства даты
    this.created = new Date();

    ////статической свойству - переменной присваивается значение даты последней статьи
    Article.lastDateItem = this.created;

    //увеличение статического свойства - переменной на 1
    Article.counter++;
};

//статической свойству - переменной присваивается начальное значение 0
Article.counter = 0;

//создание статического метода
Article.showStats = function(){

    //вывод в консоль колличества статтей и даты последней статьи
    console.log("Всего: " + this.counter + "," + "Последняя: " + this.lastDateItem);
}

//запуск функции конструктора Article
new Article();

//запуск функции конструктора Article
new Article();

//запуск метода showStats функции конструктора Article
Article.showStats();

//запуск функции конструктора Article
new Article();

//запуск метода showStats функции конструктора Article
Article.showStats();



//--------------EV
function Article(){
    this.created = new Date;

    Article.count++;   //increase the counter on each call
    Article.last = this.created  //memorise the date
}

Article.count = 0;
Article.showStats = function(){
    alert("Всего" + this.count + ", последняя: " +this.last);
};

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)


//--------------NK
//creating function for calculating objects and saving last's object date
function Article() {
    //increasing count
    Article.count++;
    //creating date
    Article.created = new Date();
}
//adding count and assigning it's value
Article.count = 0;
//creating method for showing of amount of objects and last object's date
Article.showStats = function () {
    //display result
    console.log("Vsego: " + this.count + " Posledniaya data: " + Article.created);
}
//creating new object
new Article();
//calling method showStats
Article.showStats();
//creating new object
new Article();
//calling method showStats
Article.showStats();
//creating new object
new Article();
//calling method showStats
Article.showStats();