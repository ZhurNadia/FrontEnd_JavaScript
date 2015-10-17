/**
 * Created by nadia on 06.10.15.
 */
"use strict"

function Classmate(name){
    this.name = name;
    this.hello = function(){
        return "Hi, I'm " + this.name;
    }
    this.greetSomeone = function()
}

var classmates = [new Classmate("Nadya"), new Classmate("Igor"), new Classmate("Jeniya"), new Classmate("Lena")];

// classmates.forEach == classmates.map
classmates.forEach(function(student){
    console.log(student.hello());
})




////////////
function Whiteboard(title, height, width){
    this.height = height;
    this.width = width;
    this.title = title;
    this.hang = function(wall){
        if(this.height < wall.height && this.width < wall.width){
            wall.puttedWhiteboard = this;
        }
    }
}

function Wall(height, width){
    this.height = height;
    this.width = width;

    this.getPuttedWhiteboard = function(){
        if(this.puttedWhiteboard != undefined){
            return this.puttedWhiteboard.title;
        }else{
            return null;
        }
    }
}

var leftWall = new Wall(3, 5);
var whiteboardWithBlackCover = new Whiteboard("My favorite first board", 2, 3);
whiteboardWithBlackCover.hang(leftWall);
//console.log(leftWall.puttedWhiteboard.title);
console.log(leftWall.getPuttedWhiteboard());

var leftWall = new Wall(3, 5);
var whiteboardWithBlackCover = new Whiteboard("My favorite second board", 4, 6);
whiteboardWithBlackCover.hang(leftWall);
console.log(leftWall.getPuttedWhiteboard());

