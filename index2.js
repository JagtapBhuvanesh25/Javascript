/*
let arr1 = [2 , 5 , 9 ,10, 1 , 7 , 0 , 3, 8 , 4 , 6];
let arr2 = [7 , 0 , 3, 8 , 4 , 6 , true , false , "sanjay" , 2]; 
// always resizabile , any type of elements , shallow memory(heap)
console.log(arr1);
console.log(arr1[4] , arr2[5]);

arr1.push(16);
console.log(arr1);
arr1.push(61);
console.log(arr1);
arr1.pop();
console.log(arr1);
arr1.pop();
console.log(arr1);

arr1.unshift(15);
console.log(arr1);
arr1.unshift(51);
console.log(arr1);
arr1.shift();
console.log(arr1);
arr1.shift();
console.log(arr1);

console.log(arr1.includes(9));
console.log(arr1.includes(74));
console.log(arr1.indexOf(7));
console.log(arr1.indexOf(77));

let arr3;
//arr3 = arr1.join();
console.log(arr3);
console.log(typeof arr3);


// slice & splice(interveiw)
console.log("A: " + arr1);
arr3 = arr1.slice(2,5);
console.log(arr3);
console.log("B: " + arr1);
arr3 = arr1.splice(3,5);
console.log(arr3);
console.log("C: " + arr1);
*/

/*

let arr1 = [1 , 2 , 3 , 4 , 5];
let arr2 = [6 , 7 , 8 , 9 , 10];
arr1.push(arr2);
console.log(arr1);
arr1.pop();

let arr3 = arr1.concat(arr2);
console.log(arr3);

let arr4 = [...arr1 , ...arr2];
console.log(arr4);

let arr5 = [1 , [2 , [3 , [4 , 5 , 6 ], 7 , 8] , 9 ], 10];
let arr6 = arr5.flat(Infinity); //till what layer in arg
console.log(arr5);
console.log(arr6);

console.log(Array.isArray(arr1));
console.log(Array.from("Bhuvanesh25"));
console.log(Array.of(4 , 6 , 7 , 9 , 6));
console.log(Array.from({name : "jagtap"})); // if dont understand

*/