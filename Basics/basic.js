
//var(can be used anywhere) (mutable and re-declarable)(hoisting possible) )
//const(used inside the block)(cant be updated or re-declared)(no hoisting)
//let(blocked scope)(can be updated but not re-declared)(dont allow hoisting)
//hoisting (uske declare se phale use krna)
//js is not type bound (dynamically typed language)


// console.log(a);// undefined
// var a = 10; 

//  console.log(a);
//  let a = 10; //error  for let and const hoisting not possible


// check type of variable
// let a = "Manu";
// console.log(typeof a);// string
// let arr =[[1,2,3]];
// console.log(typeof arr);  //object
// let obj = {name: "Manu"};
// console.log(typeof obj);// object
// let isTrue = true;
// console.log(typeof isTrue); //boolean
// let num = 10;
// console.log(typeof num); // number
// let s = Symbol("Manu");
// console.log(typeof s); // symbol
// let n = null;
// console.log(typeof n); // object (bug in js)
// let un;
// console.log(typeof un); //undefined
// console.log(5 == '5'); // true (value based comparison)
// console.log(5 === '5'); // false (type and value based comparison)

// for(i=0;i<5;i++){
//     console.log(i);
// }
// i=0;
// while(i<5){
//     console.log(i);
//     i++;
// }

// i=0;
// do{
//     console.log("hello");
//     i++;
// }while(i<5);


//while and do while loop are odd loops means we dont know how many times loop will run
//for loop is even loop means we know how many times loop will run

//for Eachloop for array
// let arr = [1,2,3,4,5];
// arr.forEach((ele)=>console.log(ele));
  
//function declaration + function definition
// greet("Manu");
// function greet(name){
//     console.log("Hello "+name);
// }


//parameter vs arguments

//parameter(when we define the function we use parameters)
// arguments(when we call the function we pass arguments to the function)










