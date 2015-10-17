/**
 * Created by nadia on 01.10.15.
 */
// user.fullName = "Alex Shmalex"
// user.firstName == "Alex"
// user.lastName == "Shalex"


var user = {
    'firstName': '',
    'secondName': ''
}

var propertyManager = {
    get: function(){
        return this.firstName + ' ' + this.lastName'
    },
    set: function(val){
        // for e.g. val = "Petro Petrovich" then splittedFullName = ['Petro', 'Petrovych']
        var splittedFullName = val.split(" ")
        this.firstName = splittedFullName[0]
        this.lastName = splittedFullName[1]
    }
}

Object.defineProperty(user, 'fullName', propertyManager)
user.fullName = "Alex Shamlex" // propertyManager.set.call(user, "Alex Shmalex")



/////
function User(firstName, lastName){
    var $$self = this;

    $$self.firstName = firstName;
    $$self.lastName = lastName;

    $$self.printFullName = function(){
        console.log($$self.firstName + ' ' + $$self.lastName);
    }
}

var ivan = new User('Ivan', 'Ivanov')
var ronik = new User('Ron', 'Kazayfka')
ivan.printFullName()
ronik.printFullName()

setTimeout(ivan.printFullName, 1000)
setTimeout(ronik.printFullName, 1000)



///////
// user.fullName = "Alex Shmalex"
// user.firstName == "Alex"
// user.lastName == "Shalex"


var user = {
    'firstName': '',
    'secondName': ''
}

var propertyManager = {
    get: function(){
        return this.firstName + ' ' + this.lastName'
    },
    set: function(val){
        // for e.g. val = "Petro Petrovich" then splittedFullName = ['Petro', 'Petrovych']
        var splittedFullName = val.split(" ")
        this.firstName = splittedFullName[0]
        this.lastName = splittedFullName[1]
    }
}

Object.defineProperty(user, 'fullName', propertyManager)
user.fullName = "Alex Shamlex" // propertyManager.set.call(user, "Alex Shmalex")