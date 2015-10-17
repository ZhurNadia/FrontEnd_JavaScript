/**
 * Created by nadia on 29.09.15.
 */
//тут используется принцип инкапсуляции в ООП - что не позволяет залазить пользователю извне
function User() {
    var firstName = '';
    var surname = '';

    this.setFirstName = function(string){
        if(string) {
            firstName = string;
        }
        else {
            throw new Error('Укажи имя');
        }

    }

    this.setSurname = function(string){
        if(string) {
            surname = string;
        }
        else {
            throw new Error('Укажи фамилию');
        }
    }
    this.getFullName = function(){
        if(!firstName || !surname){
            throw new Error('Заполните сначало имя и фамилию');
        }
        return firstName + ' ' + surname
    }
}

var petya = new User();
petya.setFirstName('Вася');
petya.setSurname('Иванов');
console.log(petya.getFullName());

////
//var user = new User(); 
//user.setFirstName("Петя"); 
//user.setSurname("Иванов");
//alert( user.getFullName() );

