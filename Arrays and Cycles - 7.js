/*
Написать функцию, которая принимает два параметра - массив и число и выводит индекс элемента массива равный числу
 */

let arr = [1, 22, 53, 41, 35, 6, 75, 8];
let a = 22;
let b = 35;
let c = 75;
let d = 1;

function check(item1, item2) {
    console.log(item1.indexOf(item2));
}

check(arr, a);
check(arr, b);
check(arr, c);
check(arr, d);