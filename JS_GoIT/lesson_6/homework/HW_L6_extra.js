/**
 * Created by nadia on 03.09.15.
 */
/**
 Àíàãðàììû — ñëîâà, ñîñòîÿùèå èç îäèíàêîâîãî êîëè÷åñòâà îäèíàêîâûõ áóêâ,
 íî â ðàçíîì ïîðÿäêå. Íàïðèìåð:

 âîç - çîâ êèáîðã - ãðîáèê êîðñåò - êîñòåð - ñåêòîð Íàïèøèòå ôóíêöèþ anClean(arr),
 êîòîðàÿ âîçâðàùàåò ìàññèâ ñëîâ, î÷èùåííûé îò àíàãðàìì.

 var arr = ['âîç', 'êèáîðã', 'êîðñåò', 'ÇÎÂ', 'ãðîáèê', 'êîñòåð', 'ñåêòîð'];

 console.log( anClean(arr) ); // 'âîç,êèáîðã,êîðñåò' èëè 'ÇÎÂ,ãðîáèê,ñåêòîð'
 Èç êàæäîé ãðóïïû àíàãðàìì äîëæíî îñòàòüñÿ òîëüêî îäíî ñëîâî, íå âàæíî êàêîå.
 */

//creating array
var arr = ['voz', 'kiborg', 'korset', 'ZOV', 'grobik', 'koster', 'sektor'];
//creating function for cleaning array
function anClean(arr) {
    //creating object for unique items
    var object = {};
    //creating array for result
    var result = [];
    //loop for transforming and checking array
    for (var i = 0; i < arr.length; i++) {
        //defining variable sortedArray for items after transforming
        var sortedArray = arr[i].toLowerCase().split('').sort().join('');
        console.log(sortedArray);
        //assigning value to object
        object[sortedArray] = arr[i];
        console.log(object);
    }
    //loop for filling array by unique items
    for (var item in object) {
        //adding items
        result.push(object[item]);
        console.log(item);
    }
    //returning result
    return result;
}
//calling function and display data
console.log(anClean(arr));



//task 8
/**
 Fellow code warrior, we need your help! We seem to have lost one of our array
 elements, and we need your help to retrieve it! Our array, superImportantArray,
 was supposed to contain all of the integers from 0 to 9 (in no particular order),
 but one of them seems to be missing.

 Write a function called getMissingElement that accepts an array of unique
 integers between 0 and 9 (inclusive), and returns the missing element.

 Examples:

 getMissingElement( [0, 5, 1, 3, 2, 9, 7, 6, 4] ) // returns 8
 getMissingElement( [9, 2, 4, 5, 7, 0, 8, 6, 1] ) // returns 3
 */

var array = [9, 2, 4, 5, 7, 0, 8, 6, 1];
function getMissingElement(array) {
    var temp = 0;
    //loop for decreasing part of array, which is checked
    for (var i = 0; i < array.length; i++) {
        //loop for comparison items. Every loop iteration pushes max item to end of array
        //new iteration uses array without this item, thereby sorted items build up in the
        //end of array. After all iteration array is sorted
        for (var j = 0; j < array.length - i - 1; j++) {
            //condition for comparison of current and next items
            if (array[j] > array[j + 1]) {
                //exchanging items if condition is executed
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    //loop for comparison index i (0,1,2,3...9) and sorted array (0,1,2,3...9)
    for (var i = 0; i < array.length; i++) {
        //checking == items of array and index i, if they are not equal, i is missing item
        if (array[i] != i) {
            //returning missing item
            return i;
            //breaking loop
            break;
        }
    }
}
//calling functions and display result
console.log(getMissingElement(array));




//task9
/**
 Your task is to add a new property usersAnswer to every object in the
 array questions. The value of usersAnswer should be set to null. The
 solution should work for array of any length.

 For example:

 var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];
 After adding the property the result should be:

 var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
    usersAnswer: null
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
    corAnswer: 0,
    usersAnswer: null
}];
 */

//creating array of objects
var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];
//loop for adding new property userAnswer
for (var i = 0; i < questions.length; i++) {
    //adding new property userAnswer with value "null"
    questions[i].userAnswer = null;
    //display result
    console.log(questions[i]);
}


//task10
/**
 Create a function, getVillainName, that returns a villain name based on the user's
 birthday. (The birthday will be passed to the function as a valid Date object,
 so for simplicity, there's no need to worry about converting strings to dates.)

 The first name will come from the month, and the last name will come from the
 last digit of the date.

 Month -> first name

 January -> "The Evil"
 February -> "The Vile"
 March -> "The Cruel"
 April -> "The Trashy"
 May -> "The Despicable"
 June -> "The Embarrassing"
 July -> "The Disreputable"
 August -> "The Atrocious"
 September -> "The Twirling"
 October -> "The Orange"
 November -> "The Terrifying"
 December -> "The Awkward"

 Last digit of date -> last name

 0 -> "Mustache"
 1 -> "Pickle"
 2 -> "Hood Ornament"
 3 -> "Raisin"
 4 -> "Recycling Bin"
 5 -> "Potato"
 6 -> "Tomato"
 7 -> "House Cat"
 8 -> "Teaspoon"
 9 -> "Laundry Basket"

 The returned value should be a string in the form of "First Name Last Name".

 For example, a birthday of November 18 would return "The Terrifying Teaspoon"
 */

//creating object month
var month = {
    January: "The Evil",
    February: "The Vile",
    March: "The Cruel",
    April: "The Trashy",
    May: "The Despicable",
    June: "The Embarrassing",
    July: "The Disreputable",
    August: "The Atrocious",
    September: "The Twirling",
    October: "The Orange",
    November: "The Terrifying",
    December: "The Awkward",
}
//creating object day
var day = {
    0: "Mustache",
    1: "Pickle",
    2: "Hood Ornament",
    3: "Raisin",
    4: "Recycling Bin",
    5: "Potato",
    6: "Tomato",
    7: "House Cat",
    8: "Teaspoon",
    9: "Laundry Basket",
}
//creating date
var date = new Date(0, 11, 22);

//creating function for searching villain's name
function getVillainName(month, day, date) {
    //defining variable villainName for saving result
    var villainName = "";
    //defining variable monthNumber and assigning value
    var monthNumber = +(date.getMonth() + 1);
    //defining variable dayNumber and assigning value
    var dayNumber = date.getDate();
    if (dayNumber > 9) {
        dayNumber = dayNumber + "";
        dayNumber = +dayNumber[dayNumber.length - 1];
    }
    //defining variable count for comparison with monthNumber
    var count = 1;
    //loop for searching month (first part of villainName)
    for (var item in month) {
        //condition for searching month
        if (count == monthNumber) {
            //adding first part to villainName
            villainName = month[item];
        }
        //increasing count
        count++;
    }
    //loop for searching day (second part of villainName)
    for (var key in day) {
        //condition for searching day
        if (dayNumber == key) {
            //adding second part to villainName
            villainName += " " + day[key];
        }
    }
    //returning villainName
    return villainName;
}
//calling function and display data
console.log(getVillainName(month, day, date));




//--task 11

/**
 Make the sum() function return the sum of the values in the passed in array.
 Your solution must use the reduce() function of the built-in javascript Array
 object. If you're not familiar with reduce(), reading over the documentation may help.

 function sum(array) {
  // Use array.reduce() to find and return the
  // sum of the values in array.
}
 For example:

 var someNumbers = [1,2,3,4,5,6,7,8,9,10];

 sum(someNumbers); // should return 55
 */
//creating array
var someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//defining variable result and calculating result with function
var result = someNumbers.reduce(function (sum, current) {
    //returning result
    return sum + current;
}, 0);
//display result
console.log(result);


//------task12
/**
 You live in the city of Cartesia where all roads are laid out in a perfect grid.
 You arrived ten minutes too early to an appointment, so you decided to take
 the opportunity to go for a short walk. The city provides its citizens with
 a Walk Generating App on their phones -- everytime you press the button it
 sends you an array of one-letter strings representing directions to walk
 eg. ['n', 's', 'w', 'e']). You know it takes you one minute to traverse
 one city block, so create a function that will return true if the walk
 the app gives you will take you exactly ten minutes (you don't want to
 be early or late!) and will, of course, return you to your starting point.
 Return false otherwise.

 Note: you will always receive a valid array containing a random assortment
 of direction letters ('n', 's', 'e', or 'w' only). It will never give you
 an empty array (that's not a walk, that's standing still!).
 */
