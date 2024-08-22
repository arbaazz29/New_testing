console.log("one");
console.log("two");
console.log("three");
//synchronous---executing one by one in sequence


//Due to synchronous programming, sometimes imp instructions get
//blocked due to some previous instructions, which causes a delay in the Ul.
//Asynchronous code execution allows to execute next instructions
//immediately and doesn't block the flow.


//setTimeout()
function hello(){
    console.log("Hello");
}

setTimeout(hello,2000);


//method 2
setTimeout(() => {
    console.log("Hello");
},4000);      

// 
console.log("one");
console.log("two");
setTimeout(() => {
    console.log("Hello");
},4000); 
console.log("three"); // line 32,33 will not wait for Hello to print , they will run parallely
console.log("four");

//Callbacks--
//a callback is a function passed as an argument to another function

function sum(a,b){
    console.log(a+b);
 }

 function calculator(a,b,sumCallback){
    sumCallback(a,b);
 }

 calculator(1,2,sum);

 //
 const hello = () => {
    console.log("Hello");
 }
setTimeout(hello , 4000);

//nesting
for(let i=0;i<5;i++){
    let str="";
    for(let j=0;j<5;j++){
        str=str + j;    //concatenation
    }
    console.log(i,str);
}

//Callback hell--
//Nested callbacks stacked below one another forming a pyramid
//this style of programming becomes difficult to understand and manage.

function getData(dataId){
    setTimeout (() => {
        console.log("data" , dataId);
    } , 2000);
}

getData(1);  //2s  timer of all three line started at the same time.
getData(2);  //2s
getData(3);  //2s

//for individual delay in line 73-76
function getData(dataId, getNextData){
    setTimeout (() => {
        console.log("data" , dataId);
        if(getNextData){
        getNextData();
        }
    } , 2000);
}

//getData(1 , getData(2));  //this will cause error because you cant use parenthesis with a function while using callbacks
//Callback hell example--
getData(1, ()=> {
    getData(2, ()=>{
        getData(3 , () =>{
            getData(4);
        });
    });
});

//Callback Hell is a problem in javascript because it makes the code very difficult to understand.

//Promises
//Promise if for eventual completion of task.It is an object in JS.
//it is a solution of callback hell

//resolve and reject are callbacks provided by JS.
//let promise = new Promise((resolve,reject) =>{...})

//Promise is an objet , it can have 3 states--
//pending state
//fulfilled state (resolved)
//rejected state

let promise = new Promise ((resolve,reject) =>{
    console.log("I am a Promise");
    resolve("Success");
});

let promise2 = new Promise ((resolve,reject) =>{
    console.log("I am a Promise");
    reject("Some error occurred");
});

///
function getData(dataId, getNextData){
    return new promise ((resolve,reject) =>{
    setTimeout (() => {
        console.log("data" , dataId);
        resolve("success");
        if(getNextData){
        getNextData();
        }
    } , 5000);
});
}
//type in Javascript --   let promise = getData(123);
//44 00---video time 

//promise is given to use by other APIs , what we do with rejected and resolved promises is upto us.

//Using .then() and .catch()

let promise3 = new Promise ((resolve,reject) =>{
    console.log("I am a Promise");
    resolve("Success");
});











