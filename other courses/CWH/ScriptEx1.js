let a =  Math.random();
let b = prompt("Enter the value of your first number.") ;
let c = prompt("Enter the operation you want to perform.");
let d = prompt("Enter the value of your second number.") ;
if (Math.random() <= 0.5){
    if (c ==="+"){
        alert(`The Result is ${b-d} `);
    }
    else if (c==="*"){
        alert(`The result is ${b + d}`)
    }
    else if (c==="-"){
        alert(`The Result is ${b*d} `);
    }
    else if (c==="/"){
        alert(`The Result is ${b**d} `);
    }
}
else{
    if (c ==="+"){
        alert(`The Result is ${eval(` ${b} ${c} ${d} `)} `);
    }
    else if (c==="*"){
        alert(`The Result is ${b*d} `);
    }
    else if (c==="-"){
        alert(`The Result is ${b-d} `); 
    }
    else if (c==="/"){
        alert(`The Result is ${b/d} `);
    }
    else{
        alert("Enter valid Inputs To Run program properly")
    }
}