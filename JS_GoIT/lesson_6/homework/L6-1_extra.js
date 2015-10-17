/**
 * Created by nadia on 02.09.15.
 */
/**
 Sortirovka puzyr'kom
 */


//creating array
var array = [1, 6, 2, 89, 51, 32, 46, 0, 1, 0, 2, 10];
//creating function for sorting array
function sortBubble(array) {
    //defining variable temp for exchange items
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
    //returning sorted array
    return array;
}
//calling function and display data
console.log(sortBubble(array));