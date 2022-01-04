/*
-        Напишите функцию, которая определяет является ли число простым или нет
 */

let arr = [2, 17, 8, 9, 5, 7, 3, 1, 10, 21, 27, 115];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
        console.log(`${arr[i]} is prime!`);
    }
    if (arr[i] < 2) {
        console.log(`${arr[i]} is not prime!`);
    }
    for (let j = 2; j < arr[i]; j++) {
        if (arr[i] % j === 0) {
            console.log(`${arr[i]} is not prime!`);
            break;
        }
        console.log(`${arr[i]} is prime!`);
    }
}