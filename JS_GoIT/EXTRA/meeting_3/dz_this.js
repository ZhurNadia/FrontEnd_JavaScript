/**
 задача 1
 Создать объект outsideWall с помощью шаблона Wall который получает height, width.
 Создать 2 объектa outsideWindow с помощью шаблона Window который получает height, width.
 Нам нужно поместить на outsideWall два окна, используя метод addWindow. Окна можна хранить внутри объекта в массиве.
 При добавлении нового окна, в методе addWindow нужно проверять влезет ли это окно на стену. Это можно сделать так:
 - узнать площадь всей стены
 - узнать площадь уже каждого добавленного окона
 - просуммировать площади окон
 - добавить к этой сумме площадь нового окна и если эта площадь меньше всей площади стены то можем добавлять новое окно
 */







function myWindow(title, height, width){
    this.height = height;
    this.width = width;
    this.title = title;
    this.install = function(wall){
        if(this.height < wall.height && this.width < wall.width){
            wall.installWindow = this;
        }
    }
}

function Wall(height, width){
    this.height = height;
    this.width = width;

    this.getInstallWindow = function(){
        if(this.installWindow != undefined){
            return this.installWindow.title;
        }else{
            return null;




            





        }
    }
}

var leftWall = new Wall(3, 5);
var whiteboardWithBlackCover = new myWindow("My favorite first board", 2, 3);
whiteboardWithBlackCover.hang(leftWall);
//console.log(leftWall.installWindow.title);
console.log(leftWall.getInstallWindow());

var leftWall = new Wall(3, 5);
var whiteboardWithBlackCover = new myWindow("My favorite second board", 4, 6);
whiteboardWithBlackCover.hang(leftWall);
console.log(leftWall.getInstallWindow());
*/
