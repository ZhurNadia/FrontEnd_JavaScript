/**
 Задание 3 (get/set свойства)

 У вас есть объект User, который хранит имя и фамилию в свойстве this.fullName:

 function User(fullName) {
  this.fullName = fullName;
}

 var vasya = new User('Александр Пушкин');
 Имя и фамилия всегда разделяются пробелом.

 Сделайте, чтобы были доступны свойства firstName и lastName, причём не только на чтение, но и на запись, вот так:

 var vasya = new User('Александр Пушкин');

 // чтение firstName/lastName
 console.log( vasya.firstName ); // Александр
 console.log( vasya.lastName ); // Пушкин

 // запись в lastName
 vasya.lastName = 'Толстой';

 console.log( vasya.fullName ); // Александр Толстой
 Важно: в этой задаче fullName должно остаться свойством, а firstName/lastName —
 реализованы через get/set. Лишнее дублирование здесь ни к чему.
 */


//--------------EV
function User(fullName) {
    this.fullName = fullName;

    Object.defineProperties(this, {

//define getter and setter for the first name and last name

        firstName: {

            get: function() {
                return this.fullName.split(' ')[0];
            },

            set: function(newFirstName) {
                this.fullName = newFirstName + ' ' + this.lastName;
            }

        },

        lastName: {

            get: function() {
                return this.fullName.split(' ')[1];
            },

            set: function(newLastName) {
                this.fullName = this.firstName + ' ' + newLastName;
            }

        }

    });
}

var vasya = new User("Александр Пушкин");

// чтение firstName/lastName
console.log( vasya.firstName ); // Александр
console.log( vasya.lastName ); // Пушкин

// запись в lastName
vasya.lastName = 'Толстой';

console.log( vasya.fullName ); // Александр Толстой



//-----------------OLE
//создание функции конструктора для получения полного имени юзера
function User(fullName){
    //создание свойства fullName
    this.fullName = fullName;

    //создание новых свойств firstName и lastName
    Object.defineProperties(this, {

        // создание свойства firstName
        firstName: {

            //использование функции get, которая возвращает значение свойства firstName
            get: function() {

                //возвращает первый элемент массива созданного из fullName путем разделения по пробелу
                return this.fullName.split(" ")[0];
            },

            //использования функции set для записи нового значения fullName
            set: function(firstNameNew){

                //новое значения fullName создается путем конкатинации нового значения firstNameNew и lastName
                this.fullName = firstNameNew + " " + this.lastName;

            }
        },
        // создание свойства lastName
        lastName: {

            //использование функции get, которая возвращает значение свойства lastName
            get: function(){

                //возвращает второй элемент массива созданного из fullName путем разделения по пробелу
                return this.fullName.split(" ")[1];
            },

            //использования функции set для записи нового значения fullName
            set: function(lastNameNew){

                //новое значения fullName создается путем конкатинации firstName и нового значения lastNameNew
                this.fullName = this.firstName + " " + lastNameNew;
            }
        }
    })
};

//создание нового объекта путем использования конструктора
var vasya = new User('Александр Пушкин');

//вывод в консоль свойства объкта firstName
console.log( vasya.firstName ); // Александр

//вывод в консоль свойства объкта lastName
console.log( vasya.lastName ); // Пушкин

// запись в lastName
vasya.lastName = 'Толстой';

//вывод в консоль свойства объкта fullName
console.log( vasya.fullName ); // Александр Толстой


//--------------NK
function User(fullName) {
    this.fullName = fullName;
    var fullNameArray = fullName.split(" ");
    var firstName = fullNameArray[0];
    var lastName = fullNameArray[1];
    return {
        getFirstName: function () {
            this.firstName = firstName;
            return this;
        },
        setFirstName: function (firstName) {
            this.firstName = firstName;
        },
        getLastName: function () {
            this.LastName = lastName;
            return this;
        },
        setLastName: function (lastName) {
            this.lastName = lastName;
        }
    };
};

var petya = new User("Petya Vasechkin");
petya.firstName="Vasya";
petya.lastName="Petechkin";
console.log(petya.getFirstName());
console.log(petya.getLastName());
petya.firstName="Masha";
petya.setLastName="Mishyna";
console.log(petya.getFirstName());
console.log(petya.getLastName());