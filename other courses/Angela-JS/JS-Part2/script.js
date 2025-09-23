//************************L1************************
// alert(Math.floor(Math.random()*10000 + 1));
// prompt("Enter Your Name: ");
// prompt("Enter Your Crush Name: ");
// alert(Math.floor(Math.random() * 100 ) + 1);

//************************L2************************
// var opt = prompt(alert("Enter 1 To Generate And Anything Else To Exit"));
// if(opt === 1){
//     alert("Bye Bye");
// }else{
//     var otp = Math.floor(Math.random() * 10000) + 1;
//     if(otp>999){
//         alert("Your OTP Is " + otp + "." );
//     }else{
//         alert("Error Generating OTP.");
//     }
// }

//************************L3************************
/*
=== is equal to (Checks both datatype and magnitude value)
== is equal to (Checks only magnitude value)
!== is not equal to (Checks both datatype and magnitude value)
!= is not equal to (Checks only magnitude value)
baki same as before
*/

//************************L4************************
//same && , || and ! usage as cpp

//************************L5************************
//************************L6************************
//challenge

//************************L7************************
//************************L8************************
//Challenge Answer

// var year = prompt("Enter The Year: ");
// if(year%4 !== 0) alert("It Is Not A Leap Year.");
// else if(year%100 !== 0) alert("It Is A Leap Year.");
// else if(year%400 === 0) alert("It Is A Leap Year.");

//************************L9************************
// var mynames = ["Sudanshu" , "Bhuvanesh" , "Kanha"];
// alert(mynames);
// mynames.push("Sarthak");
// alert(mynames);
// mynames.push("Aditya");
// alert(mynames);
// mynames.pop();
// alert(mynames);
// alert(mynames.includes("Sarthak"));
// alert(mynames.includes("Tejas"));
// alert(mynames[0] + " " + mynames[1] + " " + mynames[2] + " ");

//************************L10************************
// var ans = [];
// function looper(cnt){
//     if(cnt<=100){
//         if(cnt%3===0 && cnt%5===0) ans.push("FuzzBuzz");
//         else if(cnt%3===0) ans.push("Fuzz");
//         else if(cnt%5===0) ans.push("Buzz");
//         else ans.push(cnt);
//         cnt++;
//         looper(cnt,ans);
//     }else{
//         alert(ans);
//     }
// }
            
// looper(1);

//************************L11************************
//************************L12************************
//Challenge Solution
// var mynames = ["Sudanshu" , "Bhuvanesh" , "Kanha"];
// mynames.push("Sarthak");
// mynames.push("Aditya");

// alert("Bill Will Be Paid By " + mynames[Math.floor(Math.random() * mynames.length)] + ".");

//************************L13************************
// var ans = [];
// var i = 1;

// while(i<=100){
//     if(i%3===0 && i%5===0) ans.push("FuzzBuzz");
//     else if(i%3===0) ans.push("Fuzz");
//     else if(i%5===0) ans.push("Buzz");
//     else ans.push(i);
//     i++;
// }
// alert(ans);

//************************L14************************
//Challege Solution
// var i=10;
// var ans = [];
// while(i>0){
//     alert(i + " bottles of beer on the wall, " + i-- + " bottles of beer. Take one down and pass it around. " + i + " bottles of beer on the wall. ")
// }

//************************L15************************
// var ans = [];
// for (let i = 1; i <= 100 ; i++) {
//     if(i%3===0 && i%5===0) ans.push("FuzzBuzz");
//     else if(i%3===0) ans.push("Fuzz");
//     else if(i%5===0) ans.push("Buzz");
//     else ans.push(i);
// }
// alert(ans);

//************************L16************************
//Challege

//************************L17************************
//************************L18************************
//Challege Solution(iterative)

// function fibo(n){
//     var ans = [];
//     if(n>1){
//         ans.push(0);
//     }
//     if(n>2){
//         ans.push(1);
//     }
//     if(n>3){
//         for (let i = 0; i < n ; i++) {
//             ans.push(ans[ans.length -1] + ans[ans.length - 2]);
//         }
//     }
//     return ans;
// }

// alert(fibo(prompt("Enter A Number: ")));

//Recursive
// function fibo(n, ans = [0, 1]) {
//     if (n <= ans.length) return ans.slice(0, n); 
//     ans.push(ans[ans.length - 1] + ans[ans.length - 2]);
//     return fibo(n, ans); // Recursive call
// }

// let n = parseInt(prompt("Value of n is: "));
// let arr = fibo(n);

// alert(arr);
