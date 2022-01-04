/*
Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные
 */

let str = '2+3 223 2223';
let regexp = /2\+3/;
let result = regexp.exec(str);

console.log(`Found ${result[0]} in position ${result.index}`);
