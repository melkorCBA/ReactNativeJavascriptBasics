//javascript is interprited language
//Node.js use V8 js engine
//syntaxs
// const firstName =   "Chatura";
// const lastName   =   "Bashika";
// const   val =   42;
// const arr   =   [
//     'string',
//     42,
//     function(){ console.log('hi')},
// ]

// arr[2]();

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

//types
//Js has dynammic typing - given varible it has no type associated with it
// var   var1    =   "varible1";
// console.log(typeof(var1));
// var1    =   42;
// console.log(typeof(var1));
// var1    =   true;
// console.log(typeof(var1));

//Primitive Types - (no methods, immutable)
//  undefinded
//  null
//  boolean
//  number
//  string
//  string
//  symbol
//Objects

//Typecasting
//Explicit vs implicit coercion
// const   x   =   42;
// const  explicit =   String(x);  //explicit -  i am being very explcit with what i want
// console.log(typeof(x)+" to "+typeof(explicit)); 
// const   implicit    =   x + "";
// console.log(typeof(x)+" to "+typeof(implicit)); //implicit - rely on js behavior 

//comparing values
//== - no need to be equal types
//===   -   requires equivalent types

// console.log(typeof(null));
//which values are falsy - any value that will cast to boolean becomes false
// const val1   =0;
// const val2   =1;
// const   val3    =+0;
// const   val4    =-0;
// const   val5    ="";
// const arr=[];
// console.log(Boolean(val1));
// console.log(Boolean(val2));
// console.log(Boolean(arr));
// console.log(Boolean(val3));
// console.log(Boolean(val4));
// console.log(Boolean(val5));

//mutable vs imuatble
//pass by refference vs pass by value
//primitives when you want to change the value you have to create a new primtive and replace the old on hence immutable
//non primtive not the case

//objects
// const o= new Object();
// o.firstName ="Chatura"
// o.lastName  ="DeS ilva"
// o.greet =  function(){
//     console.log("hi");
// }

// o.greet();

// const o2    ={}
// o2.firstName =   "Chatura";
// o2["lastName"]   ="Bashka";
// const   key =   "isTeaching";
// o2[key]=true;
// o2["greet"] =   function(){
//     console.log(this.firstName+" "+this.lastName+" teaching  "+this.key);
// }

// o2.greet();

// const o3    =   {
//     firstName:"Chatura",
//     lastName:"Bashika",
//     adress:{
//         street:"wiskam Road",
//         number:123,
//     },
//     key:"vlaue",
// }
// // const key   =   "street";
// // console.log(o3.adress[key]);
// // console.log(o3[1]);
// // console.log(o3["1"]);

// const o4    = Object.assign({},o3); //shallow copy -not a deep copy if there is object keys only refferces are copied others are fine
// o4.key="new value";
// console.log(o3.key);
// console.log(o4.key);
// o4.adress.street="new street";
// console.log(o3.adress.street);
// console.log(o4.adress.street);

// //deepcopy
// function deepCopy(obj){
//     const keys= Object.keys(obj);
//     const newObject = {};
//     for(let i=0; i<keys.length; i++){
//         if(typeof(obj[keys[i]])==="object" || typeof(obj[keys[i]])==="array"){
//             newObject[keys[i]]=deepCopy(obj[keys[i]]);
//         }
//         else{
//             newObject[keys[i]]=obj[keys[i]];
//         }
//     }
//     return newObject;
// }

// const o5=deepCopy(o3);
// o5.adress.street="another new street";
// console.log(o3.adress.street);
// console.log(o5.adress.street);

//prototype inheritance
//const arry = [];
//arry.push("hello");
//console.log(arry[0]);
//primtive types don'thave methods
//4.toString();
//avascript does auto boxing for you - all of the primtive values has wrappers
//const   num1    =   4;
// console.log(num1.toString());
// console.log(typeof(num1));
// console.log(num1 instanceof Number);
//changing the portotype is dagerous - changes forever
// Number.prototype.toString=function(){
//     return 100;
// }
//console.log(num1.toString());

//scope
//const -   can't be updated -  if there is a refference it can't be changed but object reffrencing still can
//let   -   can be
//var   -   can be

//let a=5; let doesn't let 
//let a=4;
//var a=5; //but var lets you - shadowing
//var a=4;
//hoisting
//function defs vars are hoisted
//let, const are not hoisted
//thisIsHoisted();
// thisIsHoisted2();
// console.log(a);
//  function thisIsHoisted(){
//      console.log("decleared at the bottom");
//  }
//b();
//  const b=function thisIsHoisted2(){ //decleared as costant so not hoisted
//     console.log("decleared at the bottom");
// }
//b();
// console.log(b);
// var b = function thisIsHoisted2() { //hoist the decleartion of the variable but not the value untill assiment line is executed -  undefined utill assignment
//     console.log("decleared at the bottom");
// }

//b();
 //let a=10;
 //var a=10; //this is hoisted to the top but value is unknow till execute that line
 //console.log(a);

 //------Closures----------------
//   function makeFunctionArray(){
//       const arr =[];
//       for(var i=0; i<5; i++){
//           arr.push(function(){  console.log(i)  });
//           console.log(arr[i]());
//       }
//       //console.log(arr[0]());
//       return arr;
//   }

//   const functionArray   =   makeFunctionArray();
//   functionArray[0]();
// function outterfunction(outterVar){
//     return function innerFunction(innerVar){
//         console.log(outterVar);
//         console.log(innerVar);
//     }
// }

//IIFE
// function makeFunctionArray(){
//     const arr =[];
//     for(var i=0; i<5; i++){
//         arr.push(
//             (function(x){ //IIFE / private methods in JS (Immediately Invoked Function Expression)
//                 return function(){
//                 console.log(x)
//                 }
//             })(i));
//     }
//     return arr;
// }
// const   functionArray=makeFunctionArray();
// functionArray[1]();

//first class functions--------------------------
//  functions can be used as variables, array values, objects values
//  can be passed as arguments to other functions
//  can be returned form function
//3 Higher order functions
//  map()
// filter()
//  reduce()
//const arr=[1,2,3,4,5];
//function add(number){
//    return number+1;
//}
// console.log(arr.map(add));

// function isGreaterThanOne(number){
//     return number>1
// }
// console.log(arr.filter(isGreaterThanOne));
// function add(x,y){
//     return x+y;
// }
// console.log(arr.reduce(add));

// function map(arr, fn){
//     const newArr=[];
//     for(let i=0; i<arr.length; i++){
//         newArr.push(fn(arr[i]));
//     } 
//     return newArr;
// }

// function map(arr, fn){
//     const newArr=[];
//     arr.forEach(function(val){
//         newArr.push(fn(val));
//     });
//     return newArr
// }

// const arr=[1,2,3,4,5];
// function add(number){
//     return number+1;
// }
// console.log(map(arr,add));

//javasript is single thred
//but has some asycronises functions as well
//SetTimeout(), XML.HTTPRequest(), jQuery.ajax(), fetch(), database calls

function printOne(){
    console.log("one");
}

function printTwo(){
    console.log('two');
}

function printThree(){
    console.log('three');
}

// printOne();
// printTwo();
// printThree();

// setTimeout(printOne,1000);
// setTimeout(printTwo,0);
// printThree();

//Asynchronous Javascript
//1.Execution stack
//2.Browser APIs
//3.Function queue
//4.Event loop

//callbacks -  execute functions once asynchronous call returns value - program doesn't have to halt and wait for the value
//callback hell
//promises -  avoid callback hell
// const url='';
// fetch(url)
//     .then(function(res){
//         return res.json();
//     })
//     .then(function(json){
//         return ({
//             importantData:json.importantData,
//         })
//     })
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(err){
//         //handel errors
//     })

//this
const person = {
    name:"Chatura",
    greet:function(){
        console.log('hello '+ this.name)
    }
}
const friend = {
    name:"bashika"
}

friend.greet=person.greet;
const   greet=person.greet;
friend.greet();
greet();


