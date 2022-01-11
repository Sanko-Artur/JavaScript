/*
В try catch конструкцию завернуть код: console.log(a), let a = 3. И вывести ошибку – ‘let перед использованием
нужно объявить’.
 */

try {

    let a = 3;
    console.log(a);


} catch (err) {

    if (err instanceof ReferenceError) {
        console.log('let перед использованием нужно объявить');
    }

}

/*
При выполнении 1/0  выводить ошибку 'на ноль делить нельзя'.
*/

try {

    let a = 3;
    let result = a / 0;

    if (result === Infinity) {
        throw new SyntaxError('на ноль делить нельзя');
    }

} catch (err) {

    console.log(err);

}