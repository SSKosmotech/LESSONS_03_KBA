// var c;
// alert('Hello, world');
// console.log('dddddddddddddefrefg');
// alert('Hello, world2');

// const answer = confirm('delete item?');
// console.log(answer);

// if(answer){
//     alert('Select YES')
// } else {
//     alert('Select No')
// }

// if(confirm('delete item?')){
//     alert('Select YES')
// } else {
//     alert('Select No')
// }

// if(confirm('delete item?')){
//     // let q = 'w';
//     var q = 'w'; //спрацює, бо var піднімиться вверх
//     alert('Select YES')
// } else {
//     alert('Select No')
// }
// console.log(q); // тут q не виведеться, бо вона лишилася в {...}

// const user_name = prompt('What is your name?');
// console.log(user_name);

// const a = 2;
// // a = 5;
// console.log(a);

// let b = 1;
// b = 6;
// console.log(b);

// console.log(c);
// c = 3;
// console.log(c);

// const integer = 12;
// const float = 12.34;
// const text = 'Lorem ipsum';
// const text2 = "I'am";
// const text3 = 'I\'am'; //екранізація
// const company = 'ООО "Рога и копыта"'
// const company2 = `ООО "Рога и
// можна так копыта"`

// hoisting - це змінні, var - яки вспливають до гори і мають значення undefine

// const isTrue = false;
// const undef = undefined;
// const Null = null;
// const NotANumber = NaN;
// const arr = [1,2,3,4]; //масив
// const obj = {'a':1, 'b':2} // ключ і значення
// const func = function(){alert('1')}

// console.log(integer, typeof integer);
// console.log(float, typeof float);
// console.log(text, typeof text);
// console.log(isTrue, typeof isTrue);
// console.log(undef, typeof undef);
// console.log(Null, typeof Null);
// console.log(NotANumber, typeof NotANumber);
// console.log(arr, typeof arr);
// console.log(obj, typeof obj);
// console.log(func, typeof func);

// function sum10(a) {
//     return a+10;
// }

// console.log(sum10(1));
// console.log(sum10(20));
// console.log(sum10('10'));

// function myPow() {
//     // debugger;
//     const num = parseInt(prompt('Enter integer number'));
//     const num2 = parseInt(prompt('Enter integer number 2'));
//     const rez = num**num2;
//     // const rez = Math.pow(num, num2);
//     alert(rez);
// }


// // const PI = Math.PI

// function avgNum() {
//     // debugger;
//     const num = parseInt(prompt('Enter integer number'));
//     const num2 = parseInt(prompt('Enter integer number 2'));
//     const rez = (num+num2)/2;
//     alert(rez);
// }

// function Square() {
//     const num = parseInt(prompt('Enter the length of the square'));
//     const rez = num**2; // дві зірочки - це ступінь
//     alert(rez);
// }

// function km2ml() {
//     const km = parseInt(prompt('Enter kilometers'));
//     const K = 0.621371;
//     const ml = km*K;
//     alert(`In miles this: ${ml} miles`);
// }

// function calc() {
//     const num = parseInt(prompt('Вкажіть число 1'));
//     const num2 = parseInt(prompt('Вкажіть число 2'));
//     const action = prompt('Вкажіть дію з: +, -, *, /');
//     let rez;
//     if (action==='+') { // === бо повертається текст
//         rez = num + num2;
//     } else if (action==='-') {
//         rez = num - num2;
//     } else if (action==='*') {
//         rez = num * num2;
//     } else if (action==='/') {
//         rez = num / num2;
//     } else {
//         alert('Недопустимий символ');
//     }
    
//     if (rez != undefined) {
//         alert(`Результат — ${rez}`);
//     }
// }

// function findX() {
//     const a = parseInt(prompt('Вкажіть число 1'));
//     const b = parseInt(prompt('Вкажіть число 2'));
//     const x = b * (-1) / a;
//     alert(`X дорівнює :${x}`);
// }


// function TimeToDayEnd() {
//     const hours = parseInt(prompt('Enter hours'));
//     const minutes = parseInt(prompt('Enter minutes'));
//     const minutesTotalLeft = (24 * 60) - (hours * 60 + minutes );
//     const hoursLeft = parseInt(minutesTotalLeft / 60);
//     const minutesLeft = minutesTotalLeft - hoursLeft * 60;
//     alert(`hours lef: ${hoursLeft}, Minutes left: ${minutesLeft}`);
// }

// function digit2() {
//     const abc = +prompt('Введіть трьохзначне число');
//     const rez = parseInt((abc%100) / 10);
//     alert(`Друга цифра: ${rez}`);
// }


// function hello(name) {
//     if (name == '') {
//         return false;
//     }
//     alert('Hello, '+name);
// }

// function hello(name) {
//     if (name !== '') {
//         alert('Hello, '+name);
//     } else {
//         alert('Enter your name');
//     }
// }


// function numCheck(num) {
//     if(num<0) {
//         alert('-');
//     } else if (num>0) {
//         alert('+');
//     } else if (num == 0) {
//         alert('0');
//     } else {
//         alert('Enter number');
//     }
// }

// function checkEmail(email) {
//     if(email!='') {
//         if(isValidEmail(email)){
//             return true;
//         } else {
//             alert('Email is not valid');
//         }
//     } else {
//         alert('Enter your email');
//     }
// }


// const num = 4;
// let y = 0;
// if(num < 12) {
//     y = 2;
// } else if ((num >= 12 && num) < 18 && num !=16) {
//     y = 1;
// } else if(num == 16 || num == 25 || num == 27 {
//     y=3;
// } else if(
//     (num >= 20 & num <= 30) ||
//     (num > 40 && <= 50)
// ) {

// }
// console.log(y);


//Високосний рік 

// function isLeapYear(year) {
//     if (year%400===0 || (year%4===0 && year%100!==0)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let s ='';
// const num = 2;
// switch (num) {
//     case 1:
//         s = '!'
//         break;
//     case 2:
//         s='@';
//         break;
// }
// console.log(s);


// let s ='';
// const num = prompt('Enter number');
// switch (num) {
//     case '1':
//         s = '!'
//         break;
//     case '2':
//         s = '@';
//         break;
//     default:
//         s = 'Invalid value'
//         break;
// }
// alert(s);
// console.log(s);


// let d;
// const num = prompt('Enter month number');
// switch (num) {
//     case '1':
//     case '3':
//     case '5':
//     case '7':
//     case '8':
//     case '10':
//     case '12':
//         d = '31'
//         break;
//     case '4':
//     case '6':
//     case '9':
//     case '11':
//         d = '30';
//         break;
//     case '2':
//         d = '28';
//         break;
//     default:
//         d = 'Invalid value'
//         break;
// }
// alert(d);
// console.log(s);


//const v = (condition) ? value1 : value2;
//const acceptLang = (currentLang === 'ua') ? 'uk_UA' : 'eb_GB'

// const acceptLang = '';
// if(currentLang === 'ua') {
//     acceptLang = 'uk_UA'
// } else {
//     acceptLang = 'eb_GB'
// }


function checkNumber() {
    const num = parseInt(prompt('Enter number'))
    let rez;
    if(num < 0) {
        rez = '-';
    } else if(num > 0) {
        rez = '+';
    } else if(num == 0) {
        rez = '0';
    }
    alert(rez);
}

