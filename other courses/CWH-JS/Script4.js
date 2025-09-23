function damm(name){
    console.log(name + "is Intelligent.");
    console.log(name + "is Handsome.");
    console.log(name + "is Great coder.");
    console.log(name + "knows Cpp & Java-script.");
    console.log(name + "is pursuing web devolopment.");
    console.log(name + "is a Front-end Developer.");
    console.log(name + "is straight.");
}
damm("Bhuvanesh ");

function sum1(a,b){
    return a+b;
}
ans = sum1(3,5);
console.log(ans);

function sum2(a,b){
    console.log(a+b);
}
sum2(3,5);

function sum3(a,b,c=3){
    return a+b+c;
}
ans3= sum3(3,5);
console.log(ans3);


//Arrow Function

const anyname = (x)=>{
    console.log("The value of " + x + " plus 2 is ", x+2);
}
anyname(3)