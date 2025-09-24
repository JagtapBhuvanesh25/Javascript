let a = Math.random()
if ((a>0) && (a <= (0.2))) {
    first_word = "Steller";
}
else if ((a>(0.2)) && (a <= (0.4))) {
    first_word = "Radiant";
}
else if ((a <= (0.4)) && (a <= (0.6))) {
    first_word = "Vibrant";
}
else if ((a <= (0.6)) && (a <= (0.8))) {
    first_word = "Resilient";
}
else if ((a <= (0.8)) && (a <= (1))) {
    first_word = "Dynamic";
}
else{
    alert("There is some eror due to some technical issue");
}


let b = Math.random()
if ((b>0) && (b <= (0.2))) {
    second_word = "Solution";
}
else if ((b>(0.2)) && (b <= (0.4))) {
    second_word = "Tech";
}
else if ((b <= (0.4)) && (b <= (0.6))) {
    second_word = "Innovate";
}
else if ((b <= (0.6)) && (b <= (0.8))) {
    second_word = "Crafty";
}
else if ((b <= (0.8)) && (b <= (1))) {
    second_word = "Venture";
}
else{
    alert("There is some eror due to some technical issue");
}


let c = Math.random()
if ((a>0) && (c <= (0.2))) {
    third_word = "Hub";
}
else if ((c>(0.2)) && (c <= (0.4))) {
    third_word = "Forge";
}
else if ((c <= (0.4)) && (c <= (0.6))) {
    third_word = "Nexus";
}
else if ((c <= (0.6)) && (c <= (0.8))) {
    third_word = "Sphere";
}
else if ((c <= (0.8)) && (c <= (1))) {
    third_word = "Gateway";
}
else{
    alert("There is some eror due to some technical issue");
}

alert(`${first_word} ${second_word} ${third_word}`)