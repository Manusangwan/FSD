//callback

function greet(){
    //console.log("hello");
}
function execute(fn){
    fn();
}
execute(greet);

const number = [1,2,3,5,4];
//map do not change original array depite of this it generate a new array
let newNumber = number.map(function(n){
    return n*2; 

});
 //at place of this number just use
  

 let newNum = number.map((n)=>n*2);
 //.map((ele,index)=><li>{element}<li>)
 //console.log(newNum);

 //filter an array

 const newnum = number.filter(n=>n%2==0);
 console.log(newnum);