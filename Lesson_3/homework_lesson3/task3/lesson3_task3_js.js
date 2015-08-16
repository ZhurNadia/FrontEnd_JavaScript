/**Задание 3 (FizzBuzz)

 Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел,
 нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.
 */

function fizzBuzz(n = 100) {

    for (let i=1; i <= n; i++){
        if ((i%3==0) && (i%5==0))
            console.log(`${i} FizzBuzz`);
    else
        console.log(`${i} ${!(i%3)?'Fizz':(!(i%5)?'Buzz':'')}`);
    }

}

fizzBuzz();



//или из кн
for (var n = 1; n <= 100; n++) {
    var output = "";
    if (n % 3 == 0)
        output += "Fizz";
    if (n % 5 == 0)
        output += "Buzz";
    console.log(output || n);
}