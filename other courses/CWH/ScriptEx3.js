//Method 1

// function facto(n) {
//     if (n<=1){
//         return 1;
//     }
//     else{
//         return (n*(facto(n-1)));
//     }
// }
// a = prompt("Enter the number you want factorial of")

// alert((facto(a)))

//Method 2

function factorial(a){
    let b = []
    for (let i = 1; i <= a ; i++) {
        b.push(i);
    }
    function mult(x,y){
        return x*y;
    }
    console.log(b.reduce(mult));
}