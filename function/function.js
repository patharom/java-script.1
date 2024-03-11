/*  JavaScript Function and Function Expressions */



// {
//     function print(){
//         console.log("Hello Function");
//         console.log(2*2);
//     }
// }

// {
//     function print(){
//         console.log("hello function");
//         console.log(4*4);
//     }
// }


/* Function Parameters */

// {

//     function multiply(a , b){
//         console.log(a);
//         return a * b
//     }

//     console.log( multiply(10 , 10));

// }

// {
//     function subtraction(x , y){
//         console.log(x);
//         return x - y
//     }

//     console.log(subtraction(50 , 30));
// }

// {
//     function addition(x , y){
//         console.log(x);
//         return x + y
//     }

//     console.log(addition(50 + 50));
// }


/* Function Return */


// {
//     function add(a , b){
//         return a+b
//     }

//     console.log(add(23 , 45));
//     console.log(add(23 , 10));
//     console.log(add(23 , 56));
//     console.log(add(23 , 101));
//     console.log(add(23 , 89));
//     console.log(add(23 , 7855));
//     console.log(add(23 , 25));
// }


// {
//     function multiplication(x , y){
//         return x*y
//     }
//     console.log(multiplication(50 , 45));
//     console.log(multiplication(23 , 10));
//     console.log(multiplication(70 , 56));
//     console.log(multiplication(150 , 101));
//     console.log(multiplication(90 , 89));
//     console.log(multiplication(23 , 55));
//     console.log(multiplication(23 , 25));
    
// }

// {
//     function subtraction(x , y){
//         return x-y
//     }
//     console.log(subtraction(50 , 45));
//     console.log(subtraction(23 , 10));
//     console.log(subtraction(70 , 56));
//     console.log(subtraction(150 , 101));
//     console.log(subtraction(90 , 89));
//     console.log(subtraction(23 , 55));
//     console.log(subtraction(23 , 25));
    
// }


/* Arrow Function With Arguments */

// function print(){
//     return console.log("Hello Function");
// }
// print();

// let x = () => console.log("Hello Arrow Function");

// x();

// let y = () => console.log(2*2);

// y();



// function print(){
//     return console.log("Hello world");
// }
// print();

// let a = () => console.log("Hello world Function");

// a();

// let b = () => console.log(10*10);

// b();


// Arrow Function as an Expression

// {
//     let gender = "female"

//       let x =(gender=="male")?() => console.log("You Are Male"):() => console.log("YOU ARE FEMALE");

//       x();
// }

// {
//     let gender = "male"

//     let a =(gender=="female")?() => console.log("you are female"):() => console.log("YOU ARE MALE");

//     a();
// }


/* JavaScript CallBack Function */

// {
//     greet('Tushar', callMe);
//     function callMe() {
//         console.log('I am first callback function');
//     }
//     function greet(name, callback) {
//         console.log('Hi' + ' ' + name);
//         callback();
//     }
// }


// {
//     greet('Jay', callme);
//     function callme() {
//         console.log('I am second callback function');
//     }
//     function greet(name, callback) {
//         console.log('hi' + '' + name);
//         callback();
//     }
// }

// {
//     greet('rahul', callMe);
//     function callme() {
//         console.log('I am third callback function');
//     }
//     function greet(name, callback) {
//         console.log('hi' + '' + name);
//         callback();
//     }
// }