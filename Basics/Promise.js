/*function data(){
    console.log("beginning");
}
function getdata(callback){
setTimeout(()=>{
    data();
}, 2000)
}
console.log("do other task")
getdata(function(result){ console.log(result)})

// callback and // call backhell 
//promise
//synchronous and unsynchronous 


let promise = new Promise((resolve, reject)=>{
    let success = true;
    if(success){
        resolve(console.log("promise resolved"))
    }
    else{
        reject("error");
    }
})

//promise.then((result)=> console.log(result)).catch((err)=> console.log(err));

fetch(""); //by default return a promise

//consuming promises

fetch("").then().catch(); // used only when promised is returned by function not created by us
*/

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(user=> user.forEach((use)=> console.log(use.name)))
.catch(error=> console.log(error))


//axios is a library 

axios.get("").then(data=> console.log(data)).catch(error => console.log(error));
//npm install axios 
// import axios from 'axios'


async-await
async function fetchdata(){
    try{ const reponse = await fetch("")
    }
    catch()
}

