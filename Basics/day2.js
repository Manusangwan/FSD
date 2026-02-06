// Print even numbers from an array using forEach method

// let arr = [2,4,5,6,7,8];
// arr.forEach((ele)=>{ 
//     if(ele%2==0){
//         console.log(ele);
//     }}
// );

// const object
// const obj = {
//     name: "Manu"
// }
// console.log(obj.name); // Manu
// obj.name = "Manoj";
// console.log(obj.name); // Manoj
 
//const cannot be re-assigned
// obj = {
//     name: "New Name"
// } // This will give error but we can change the properties of the object example above

//cont variable are mutable but cannot be re-assigned to a new value


// naam = "Manu"; // global variable
// console.log(`Hello ${naam} welcome to js`); //Should use backticks for template literals

// n = 10;

// const factorial = function(n){
//     if(n==0 || n==1){
//         return 1;
//  }
//     else{
//         return n*factorial(n-1);
//     }   

// } 
// console.log(factorial(n));

//here factorial is not a variable it is the function name used for recursion
//  yhi use krna h aage bhi


// const fibo = function(n){
//     if(n==0){
//         return 0;
//     }       
//     if(n==1){   
//         return 1;
//     }
    
//     return fibo(n-1)+fibo(n-2);
    
// }
// console.log(fibo(6));
//function expression + function definition



// obbject can have function a variabble also as key value pair


// const sales = "Toyota";
// const TypeError = function(model){
//     return (model === "Honda")? model: "Not Honda";
// }

// const car = {mycar : "Saturn",getcar:TypeError("Honda"), special : sales};
// // console.log(car.mycar);
// console.log(car.getcar);
// console.log(car.special);


//loops

// for in loop

// for(const key in car){
//     //console.log(`${key} : ${car[key]}`);
//    // console.log(key + " : " + car[key]);
//     //console.log(key, car[key]);
// }
// isme key object k variables h and car[key] se key ki assigned value print hogi

// const arr = [1,2,3,4,5,6];
// for(const key in arr){
//     console.log(key,arr[key]); // key is index and arr[key] is value at that index
// }

// best practice use for in loop with object rather than array


//for of loop


// const fruits = ["Mango","Banana","Apple","Grapes"];

// for(const fruit of fruits){
//     console.log(fruit); // for of loop gives direct value NO INDEX

// }

// there are 6 loops in javascript

// for(const ch of "Mannu"){
//     console.log(ch); //PRINTS CHARARCTER BY CHARACTER IN NEXT LINE
// }

// cnt =0;
// for(const ch of "javascript"){
//     if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u'){
//         cnt++;
//         console.log(ch,cnt);
//     }
// }


// const color = ["Red","Green","Blue","Yellow"];
// for(const [indexedDB,colour]  of color.entries()){
//     console.log(indexedDB,colour); // entries() method returns index and value as array
// }


//dom manipulation  ??





















