console.log("Hello World");
var a = 5; //globally scoped
let b=6; //Locally scoped
//can be modified only in their Scope
const c=1; //can never be modified
a += 1;

console.log("Value of a is:",a,b,c,a+b+c)

let d= false;
let e= "kanha" ;
let f= null ;
let g= 789456888812365;
let h= undefined ;

console.log(typeof a,typeof b,typeof c,typeof d,typeof e,typeof f,typeof g,typeof h)

let me = {
    "Name" : "Bhuvanesh Jagtap",
    "College Name" : "PICT",
    "age": 20,
    "Placement Scope": "NONE"
}
me.Expected_Salary = 9000000 ;

console.log(me);
console.log(typeof me);