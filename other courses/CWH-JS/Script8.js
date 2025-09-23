// Get Elements By Class Name

let alpha = document.getElementsByClassName("box")
console.log(alpha);
alpha[2].style.backgroundColor = "red"

// Get Element By Id

document.getElementById("beta").style.backgroundColor = "green"

// Modify only first element with certain class as query  (.classname for class and )

document.querySelector(".box").style.backgroundColor = "black"

// Modify all elements with certain class as query  (.classname for class and )

document.querySelectorAll(".box").forEach(element => {
    element.style.backgroundColor = "orange" ;
});

// Closest[], contains[] and mactches[] dekh lo pdf se