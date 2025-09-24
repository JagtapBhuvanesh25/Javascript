//for loop (sasta mast and tikau)
for (let i=1; i<=100 ; i++){
    console.log(i);
}
let obj = {
    "Name" : "Bhuvanesh Jagtap",
    "College Name" : "PICT",
    "age": 20,
    "Placement Scope": "NONE"
}

//printing keys of obj{more to come}
//for of
for (const key in obj ) {
    const ele = obj[key];
    console.log(key , ele);
}

//printing char in string {more to come}

for (const c of "Bhuvanesh") {
    console.log(c)
}


let a=7;

//While Loop

while(a<=6){
    console.log("Yes");
    a++;
}

//Do-While loop(works at least once if cond isn't satisfied)

do{
    console.log("no");
    a++;
}while(a<=6);