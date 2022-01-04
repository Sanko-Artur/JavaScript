/*
Создать 2 объекта: animal и cat, в объект animal добавить свойство move, объект cat должен наследовать свойство move,
реализовать и через прототипы и через классы.
 */

/* через прототипы */

let animal = {
    move: 'jump',
};

let cat = {};
cat.__proto__ = animal;

console.log(cat.move);

/* через классы */

class Animal {
    constructor(move) {
        this.move = move;
        console.log(`${this.move}`);
    }
}

let animalClass = new Animal('jump');
animalClass.move;

class Cat extends Animal {
}

let catClass = new Cat('run');
catClass.move;