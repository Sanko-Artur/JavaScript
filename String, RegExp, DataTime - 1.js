/*
Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярное выражение, которое найдет строки ahb, acb, aeb 
по шаблону: буква 'a', любой символ, буква 'b'
 */

let str = 'ahb acb aeb aeeb adcb axeb';
let regexp = /a+.b/ig;
let result;

while (result = regexp.exec(str)) {
    console.log(`Found: ${result[0]} in position ${result.index}`);
}