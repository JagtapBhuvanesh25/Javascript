let a = "Bhuvanesh"
for (let i = 0; i < 9; i++){
    console.log(a[i]);
}

b=" Dhruv "

console.log(a + " is a very good person and" + b + "is a very bad person");
console.log(`${a } is a very good person and ${b } is a very bad person`);

console.log("Bhuvi's knowledge of everything is so damm good");
console.log('Bhuvi\'s knowledge of everything is so damm good');
console.log("Bhuvi\"s knowledge of everything is so damm good");

console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(b.length);
console.log(a.slice(3,6)); //index=3 included but 6 not included
console.log(a.slice(2)); //index=2 onwards
console.log(a.replace("van" , "can")); //replace only first value 
console.log(a.replace("h", "Bh")); //replace only first value not second
console.log(b.trim(b));
console.log(a.slice(2)); //removes whitespaces
console.log(a.concat(b, "hahaha", "hi")); //adds strings

console.log(a,b)

console.log(a.charAt(3));
console.log(a.indexOf("h")); //pehli he index dega
console.log(a.indexOf("an")); 
console.log(a.indexOf("x")); //neg ans as not in string
console.log(a.startsWith("Bh"));
console.log(a.startsWith("sh"));
console.log(a.endsWith("sh"));
console.log(a.endsWith("Bh"));