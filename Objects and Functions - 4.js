/*
-        Напишите функцию вычисления типа аргумента и вывод типа в консоль
 */

let arg1 = undefined;
let arg2 = 0;
let arg3 = 1n;
let arg4 = true;
let arg5 = "foo";
let arg6 = Symbol();
let arg7 = {};
let arg8 = null;
let arg9 = function () {
};

function checkType(a) {
    let b = typeof (a);
    console.log(b);
}

checkType(arg1);
checkType(arg2);
checkType(arg3);
checkType(arg4);
checkType(arg5);
checkType(arg6);
checkType(arg7);
checkType(arg8);
checkType(arg9);