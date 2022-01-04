/*
Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3
 */

let arr = [1, 6, 7, 8, 3, 4, 5, 6];
let a = 3;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= a) {
        arr.splice(i, 1);
    }
}

console.log(arr);