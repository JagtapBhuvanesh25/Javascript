/*
console.log("This is index1.js in CAC")
const accId = 54 // must initialise at declaration
let accName = "shree" //block or local scope
var pass = "123456789" //full global , function scoped , change anywhere changes everywhere
accEmail = "shree54@gmail.com"
let accState; // undefined

//accId = 25 // not allowed
//TypeError: Assignment to constant variable.

console.table([accId , accName , pass , accEmail , accState])

console.log(passw); // undefined (hoisted, but not yet assigned)
var passw = "123";

// console.log(acccEmail); // ReferenceError: acccEmail is not defined
acccEmail = "shree@gmail.com"; // works only in sloppy mode
console.log(acccEmail); // available globally
*/


/*
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


number = 2 to power 53
bigint
string => "I"
boolean = true/false
null = standalone value
undefined => not assigned
symbol = unique
object
*/

/*
let score1 = 33
let score2 = "hi"
let score3 = 0
let score4 = 1
let score5 = true
let score6 = false
let score7 = ""
let score8 = undefined
let score9 = null
let score10 = NaN


console.log(Number(score1))
console.log(Number(score2))
console.log(Number(score3))
console.log(Number(score4))
console.log(Number(score5))
console.log(Number(score6))
console.log(Number(score7))
console.log(Number(score8))
console.log(Number(score9))
console.log(Number(score10))

console.log(typeof(Number(score1)))
console.log(typeof(Number(score2)))
console.log(typeof(Number(score3)))
console.log(typeof(Number(score4)))
console.log(typeof(Number(score5)))
console.log(typeof(Number(score6)))
console.log(typeof(Number(score7)))
console.log(typeof(Number(score8)))
console.log(typeof(Number(score9)))
console.log(typeof(Number(score10)))

console.log(Boolean(score1))
console.log(Boolean(score2))
console.log(Boolean(score3))
console.log(Boolean(score4))
console.log(Boolean(score5))
console.log(Boolean(score6))
console.log(Boolean(score7))
console.log(Boolean(score8))
console.log(Boolean(score9))
console.log(Boolean(score10))

console.log(typeof(Boolean(score1)))
console.log(typeof(Boolean(score2)))
console.log(typeof(Boolean(score3)))
console.log(typeof(Boolean(score4)))
console.log(typeof(Boolean(score5)))
console.log(typeof(Boolean(score6)))
console.log(typeof(Boolean(score7)))
console.log(typeof(Boolean(score8)))
console.log(typeof(Boolean(score9)))
console.log(typeof(Boolean(score10)))

console.log(String(score1))
console.log(String(score2))
console.log(String(score3))
console.log(String(score4))
console.log(String(score5))
console.log(String(score6))
console.log(String(score7))
console.log(String(score8))
console.log(String(score9))
console.log(String(score10))

console.log(typeof(String(score1)))
console.log(typeof(String(score2)))
console.log(typeof(String(score3)))
console.log(typeof(String(score4)))
console.log(typeof(String(score5)))
console.log(typeof(String(score6)))
console.log(typeof(String(score7)))
console.log(typeof(String(score8)))
console.log(typeof(String(score9)))
console.log(typeof(String(score10)))
*/

/*
let val = 3
let negval = -val;
console.log(negval);
console.log(typeof negval);

console.log(3+2);
console.log(3-2);
console.log(3*2);
console.log(3**2);
console.log(3%2);
console.log(3/2);

console.log(typeof(1 + "2"));
console.log(typeof("1" + 2));
console.log(typeof("1" + 2 + 2));
console.log(typeof(1 + 2 + "2"));

console.log(1 + "2");
console.log("1" + 2);
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log(true)
console.log(+true)
console.log(+"")
*/


/*
console. log(2 > 1);
console. log (2 >= 1);
console. log (2 < 1);
console. log (2 == 1);
console. log(2 != 1);

console. log("2" > 1);
console. log ("02" > 1);


console. log (null > 0);
console. log (null == 0);
console. log(null >= 0);


console. log (undefined > 0);
console. log (undefined == 0);
console. log(undefined >= 0);

console.log(2 === 2);
console.log("2" === 2);
*/


/*
The reason is that an equality check == and comparisons >
<= work differently.
Comparisons ce- vert mull ta a sumber irealing il as !.
That's why (3) null >= 0 is true and (1) null> 0 is false. -
Full screen
*/


// Primitive datatypes => stack memory => new variable gets its value as copy from prev one => as it copy change to either wont affect other
// Non-Primitive datatypes => heap memory => new variable gets reference of its val from prev one => so both changes simultanous if one is changed as beasically they are referencing at the same memory spot

let a = 20;
let b = "num"

console.log(b + ": " + a);
console.log(`${b}: ${a}`); // string interpolation

let c = new String("  number  ") // try pasting both in console and print to see diff

console.log(b.toUpperCase());
console.log(b.charAt(2));
console.log(b.indexOf('u'));
console.log(b.slice(0,2));
console.log(c.length);
console.log(c.substring(0,7));
console.log(c.trim());
console.log(c.trimLeft);
console.log(c.trimRight);

let d = c.replace("umb" , "bum");

console.log(d);
console.log(d.includes("umb"));

let e = "ram,shyam,ghanshyam,wyam,dham,nam,sam,kam,aam,bam";
console.log(e.split(','));
