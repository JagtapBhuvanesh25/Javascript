let a1= [9, 10, 3, 45, 5, 6]
const  a2= [1, 8, 9, 4, 7, 11]
let a3= [45, 2, 3, 9, 5, 45]

//10. Convert array to string.
console.log(a1.toString());
//11. Join elements by(if left blank then joined b the commas).
console.log(a1.join(" and "));
//12. Concatinate (combine) a1,a2 and a3.
console.log(a1.concat(a2,a3));

//LOOPING THROUGH ARRAYS

let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
}

//For...of loop
for (const i of a1) {
    console.log(i);
}

//For...in loop

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element);
    }
}

for (const key in a1) {
    if (Object.hasOwnProperty.call(a1, key)) {
        const element = a1[key];
        console.log(element);
    }
}

// Array from string
console.log(Array.from("Bhuvanesh"));

// Reduce array to a single value by performing a same funtion from index=0 to last
Syntax- arrayname.reduce(functionname)
function add(a,b){
    return(a+b);
}
console.log(a1.reduce(add));

// Filter array based on certain condition.
Syntax- arrayname.filter(function_name)
function filt(a){
    if(a>7){
        return a;
    }
}
console.log(a1.filter(filt))

//For Each loop- Calls fuction each time for every array element
a2.forEach((value , index, array)=> {
    console.log((value , index, array))
});

//Map- Make new array by performing certain operation on each element os that array
let arr= a3.map(e=>{
    return e**2;
})
console.log(arr);
