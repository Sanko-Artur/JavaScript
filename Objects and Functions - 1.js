/*
-        Создать объект car, добавить к нему свойство color со значением 'черный'
-        Изменить свойство color объекта car на 'зеленый'
-        В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя
 */

let car = {};
console.log(car);

car.color = 'черный';
console.log(car.color);

car.color = 'зеленый';
console.log(car.color);

function power() {
    console.log('Horse power is 55');
}

car.power = power;
console.log(car);

car.power();
