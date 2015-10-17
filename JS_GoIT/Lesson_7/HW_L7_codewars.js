//Closures and Scopes
//http://www.codewars.com/kata/closures-and-scopes

/**NK
 We want to create a function, which returns an array of functions,
 which return their index in the array. For better understanding, here an example:
 var callbacks = createFunctions(5); // create an array, containing 5 functions
 callbacks[0](); // must return 0
 callbacks[3](); // must return 3
 We already implemented that function, but when we actually run the code,
 the result doesn't look like what we expected. Can you spot, what's
 wrong with it? A test fixture is also available
 */

//creating function for adding 5 functions to array
function createFunctions(n) {
    //creating array for 5 functions
    var array = [];
    //loop for adding functions
    for (var i = 0; i < 5; i++) {
        //function expression, defining variable arrayFunction, argument x
        var arrayFunction = (function (x) {
//returning function, which has to display number of item
            return function () {
                //display number of item, number = x
                console.log(x);
            };
            //calling function for display number
        })(i);
        //adding next function by method push
        array.push(arrayFunction);
    }
    //returning array
    return array;
}
//defining variable callbacks, assigning value as function createFunction with n=5
var callbacks = createFunctions(5);
//calling item of array and calling function
callbacks[0]();
callbacks[1]();
callbacks[2]();
callbacks[3]();


//Lazily executing a function
//http://www.codewars.com/kata/lazily-executing-a-function

/**NK
 Description:

 There's no such thing as private properties on a javascript object!
 But, maybe there are?

 Implement a function createSecretHolder(secret) which accepts any
 value as secret and returns an object with ONLY two methods

 getSecret() which returns the secret
 setSecret() which sets the secret
 var obj = createSecretHolder(5);
 obj.getSecret(); // returns 5
 obj.setSecret(2);
 obj.getSecret(); // returns 2
 */

//creating function createSecretHolder()
function createSecretHolder() {
    //defining variable secret, assigning as ""
    var secret = "";
    //returning object< which consists of two functions set and get
    return {
        //creating function getSecret, it returns secret
        getSecret: function () {
            //returning secret
            return secret;
        },
        //creating function setSecret, it receives phrase and put this phrase into variable secret
        setSecret: function (value) {
            secret = value;
        }
    }
}
//creating new object
var secret = createSecretHolder();
//calling function setSecret
secret.setSecret("Novyj secret");
//calling function getSecret
console.log(secret.getSecret());



//Can you keep a secret?
//http://www.codewars.com/kata/can-you-keep-a-secret

/** NK
 Description:

 Deferring a function execution can sometimes save a lot of execution
 time in our programs by postponing the execution to the latest possible
 instant of time, when we're sure that the time spent while executing
 it is worth it.

 Write a method make_lazy that takes in a function (symbol for Ruby)
 and the arguments to the function and returns another function (lambda
 for Ruby) which when invoked, returns the result of the original
 function invoked with the supplied arguments.

 For example:

 Given a function add

 function add (a, b) {
  return a + b;
}
 One could make it lazy as:

 var lazy_value = make_lazy(add, 2, 3);
 The expression does not get evaluated at the moment, but only when
 you invoke lazy_value as:

 lazy_value() => 5
 The above invokation then performs the sum.

 Please note: The functions that are passed to make_lazy may take
 one or more arguments and the number of arguments is not fixed.
 */

