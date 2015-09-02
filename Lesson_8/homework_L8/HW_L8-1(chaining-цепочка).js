/**
 *Задание 1 (Chaining)

 Есть объект ladder

 var ladder = {
  step: 0,
  up: function() { // вверх по лестнице
    this.step++;
  },
  down: function() { // вниз по лестнице
    this.step--;
  },
  showStep: function() { // вывести текущую ступеньку
    alert( this.step );
  }
};
 Сейчас, для последовательного вызова нескольких методов объекта, нужно делать так сделать так:

 ladder.up();
 ladder.up();
 ladder.down();
 ladder.showStep(); // 1
 Модифицируйте код методов объекта, чтобы вызовы можно было делать цепочкой:

 ladder.up().up().down().up().down().showStep(); // 1
 Такой подход называется «чейнинг» (chaining)
 */



//------------NK
/**
 Åñòü îáúåêò ladder

 var ladder = {
  step: 0,
  up: function() { // ââåðõ ïî ëåñòíèöå
    this.step++;
  },
  down: function() { // âíèç ïî ëåñòíèöå
    this.step--;
  },
  showStep: function() { // âûâåñòè òåêóùóþ ñòóïåíüêó
    alert( this.step );
  }
};
 Ñåé÷àñ, äëÿ ïîñëåäîâàòåëüíîãî âûçîâà íåñêîëüêèõ ìåòîäîâ îáúåêòà, íóæíî
 äåëàòü òàê ñäåëàòü òàê:

 ladder.up();
 ladder.up();
 ladder.down();
 ladder.showStep(); // 1
 Ìîäèôèöèðóéòå êîä ìåòîäîâ îáúåêòà, ÷òîáû âûçîâû ìîæíî áûëî äåëàòü öåïî÷êîé:

 ladder.up().up().down().up().down().showStep(); // 1
 Òàêîé ïîäõîä íàçûâàåòñÿ «÷åéíèíã» (chaining)
 */
//creating object ladder
var ladder = {
    //first item step
    step: 0,
    //method up, which has to increase step to 1
    up: function () {
        //increasing step to 1
        this.step++;
        //returning step
        return this;
    }
    ,
    //method down, which has to decrease step to 1
    down: function () {
        //decreasing step to 1
        this.step--;
        //returning step
        return this;
    }
    ,
    //method showStep, which has to show step
    showStep: function () {
        //display step
        console.log(this.step);
        //returning result
        return this;
    }
};
//calling object and all it's methods
console.log(ladder.up().up().down().up().showStep());



//---------EV
//each method returns object instance
var ladder = {
    step: 0,
    up: function() { // вверх по лестнице
        this.step++;
        return this;
    },
    down: function() { // вниз по лестнице
        this.step--;
        return this;
    },
    showStep: function() { // вывести текущую ступеньку
        alert( this.step );
        return this;
    }
};

ladder.up().up().down().up().down().showStep(); // 1



//-------OLe
//создание объекта
var ladder = {

    //установка свойства и его начального значения - 0
    step: 0,

    //создание свойства и его значения, которое увеличивает счетчик на 1
    up: function(){

        //увеличение счетчика на 1
        this.step++;

        //возврат текущего объекта
        return this;
    },

    //создание свойства и его значения, которое уменьшает счетчик на 1
    down: function(){

        //уменьшение счетчика на 1
        this.step--;

        //возврат текущего объекта
        return this;
    },
    //создание свойства и его значения, которое выводит показание счетчика
    showStep: function(){

        //вывод показаний счетчика
        alert(this.step);

        //возврат текущего объекта
        return this;
    }
};

//запуск методов объекта
ladder.up().up().down().showStep();

