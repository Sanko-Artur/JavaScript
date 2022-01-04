/*
Получить день, месяц и год текущей даты и по отдельности вывести в консоль
 */

let today = new Date().toLocaleDateString();

console.log(today);
console.log(new Date().getDay());
console.log(new Date().getDate());
console.log(new Date().getMonth() + 1);
console.log(new Date().getFullYear());