// // function createAnimal (name) {
// //     this.name = name;

// // }

// // const cat = new createAnimal('Sara');


// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     sayHi(){
//         console.log(`${this.name} say Hi`);
//     }
// }

// class Cat extends Animal {
//     constructor(name, color){
//         super(name);
//         this.color = color;
//     }
//     sayHi(){
//         console.log(`${this.name} say meow`);
//     }
//     // get getColor(){
//     //     return this.color
//     // }
//     get color(){
//         return this._color;
//     }
//     //  @param {any} new_color

//     // set setColor(new_color){
//     //     this.color = new_color;
//     // }
//     set color(new_color){
//         this._color = new_color;
//     }
// }

// // class BlackCat extends Cat {
// //     constructor(name, color){
// //         super(name, color);
// //     }
// // }

// // class BlackCat extends Cat {
// //     static color = 'black'
// //     constructor(name){
// //         super(name, this.color);
// //     }
// // }

// // const cat = new Animal('Sara');
// // const cat2 = new Animal('Lisa');
// // const cat3 = new Animal('Missi');
// // const cat4 = new Animal('Businka');

// const cat = new Cat('Sara', 'Ginger');
// // const catBob = new Cat('Bob', 'Black');

// // const cat2 = new Cat('Lisa');
// // const cat3 = new Cat('Missi');
// // const cat4 = new Cat('Businka');


// console.log(cat);
// // console.log(catBob);

// cat.sayHi();

// // console.log(cat.getColor);
// // cat.setColor = 'White';
// // console.log(cat.getColor);

// console.log(cat.color);
// cat.setColor = 'White';
// console.log(cat.color);

// // cat2.sayHi();
// // cat3.sayHi();
// // cat4.sayHi();

// // щоб код, що нижче - скоротити
// // const cat2 = {
// //     name: 'Lisa',
// //     sayHi: function(){
// //         console.log(`${this.name} say Hi!!!!`);
// //     }
// // }

// // const cat3 = {
// //     name: 'Misi',
// //     sayHi: function(){
// //         console.log(`${this.name} say Hi!!!!`);
// //     }
// // }

// // const cat4 = {
// //     name: 'Misi',
// //     sayHi: function(){
// //         console.log(`${this.name} say Hi!!!!`);
// //     }
// // }

// // cat2.sayHi();
// // <<======================>>

const rect = new Figure(300, 150, 'tomato', 100, 60)
rect.show();
// const rectBlue = new Figure(300, 150, 'blue', 300, 160)
// rectBlue.show();

const rectBlue = new Square(120, 'blue', 300, 160);
rectBlue.show();

const circ = new Circle(250, 'yellow', 500, 200);
circ.show();

const circ2 = new Circle(170, 'green', 470, 20);
circ2.show();

