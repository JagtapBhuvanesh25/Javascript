//**************L1****************

//**************L2****************
// alert("Hello");
// alert("World");

//**************L3****************
// alert(typeof("Hello"));
// alert(typeof(123));
// alert(typeof(true));

//**************L4****************
// var myname = prompt("Your Name is?");
// alert(myname);
// myname = "Bhuvanesh";
// alert(myname);

//**************L5****************
// var a = 5;
// var b = 10;
// alert("Value Of 'a' is: " + a + " and value Of 'b' is: " + b);

// function test(){
//     var c = a;
//     a = b;
//     b = c; 
//     alert("Value Of 'a' is: " + a + " and value Of 'b' is: " + b);
// }
// test();

//**************L6****************
//**************L7****************
//**************L8****************
//variable names cannot start using Number

//**************L9****************
//**************L10****************
// var myname = "Bhuvanesh";
// var yourname = prompt("Your Name is?");
// alert("My Name Is " + myname + " And Your Name Is " + yourname + ".");

//**************L11****************
// var messege = prompt("Enter Your Message: ");
// alert("Length Of Your Message Is " + messege.length + " Characters And You Have " + (150-messege.length) +" Characters Remaining.")

//**************L12****************
// alert(prompt("Enter Your Message").slice(0,140));

//**************L13****************
// var myname = prompt("Enter Your Name?");
// alert(myname.slice(0,1).toUpperCase() + myname.slice(1,myname.length).toLowerCase());

//**************L14****************
//**************L15****************
// alert(2+3);
// alert(7/3);
// alert(9%2);
// alert(8-9);
// alert(4*5);
// alert(((prompt("Enter Dog Age: ") - 2)*4)+21);

//**************L16****************
// var temp = 60;
// alert(temp += 5);
// alert(temp -= 5);
// alert(temp /= 5);
// alert(temp *= 5);
// alert(temp--);
// alert(temp++);
// alert(--temp);
// alert(++temp);

//**************L17****************
//**************L18****************
//normal funtions same as cpp

//**************L19****************
//https://stanford.edu/~cpiech/karel/ide.html

//**************L20****************
/*
function main(){
   putthree();
}

function moveupleft(){
   turnLeft();
   move();
   turnLeft();
   puttwo();
}

function putthree(){
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   moveupleft();
}

function puttwo(){
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   moveupright();
}

function moveupright(){
   turnRight();
   move();
   turnRight();
   putthree();
}
*/

//**************L21****************
//**************L22****************
// function changes(money,cost){
//    return money%cost;
// }
// function bottles(money){
//    var cost_per_bottle = 7.2;
//    return ("You Will Be Able To Buy "+ Math.floor(money/cost_per_bottle) + " And The Remaining Change Is Of Ruppees " + changes(money,cost_per_bottle) + " .");
// }
// var money = 500;
// alert(bottles(money));


//**************L23****************
//**************L24,L25****************
// function life(Age) {
//    var Remaining_life = 90-Age;
//    var days = Remaining_life*365;
//    var weeks = Remaining_life*52;
//    var months = Remaining_life*12;
//    return ("You Have " + days + " Days, " + weeks +" Weeks And " + months + " Months With " + Remaining_life + " Years Reamaining In Hand.")
// }

// alert(life(56));

//**************L26****************
//**************L27****************
//**************L28****************
// function bmi_calculator(weight, height) {
//     var bmi = (weight / (Math.pow(height,2)));
//     return Math.round(bmi);
// }

// alert(bmi_calculator(75,1.8));

//DONE*