/*
Преобразовать числовой массив в Boolean
 */

let num = [1, 0, 2, 5, -1, -5, 1, -0, -1];

for (let i = 0; i < num.length; i++) {
    num[i] = Boolean(num[i]);
}

console.log(num);