/*
В try catch конструкцию завернуть код: console.log(a), let a = 3. И вывести ошибку – ‘let перед использованием
нужно объявить’. При выполнении 1/0  выводить ошибку 'на ноль делить нельзя'
 */

try {

    let a = 3;
    console.log(a);

    let result = a / 0;
    let ;

    if (result === Infinity) {
        throw new SyntaxError('на ноль делить нельзя');
    }

} catch (err) {

    if (err instanceof ReferenceError) {
        console.log('let перед использованием нужно объявить');
    } else {
        console.log(err);
    }

}