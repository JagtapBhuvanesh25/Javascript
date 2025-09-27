const hello = document.querySelector('h1');
const stoper = document.getElementById('stop');
const txt_chnge = setTimeout(function(){
    hello.innerHTML = "Bye Bye World";
},2000);

// industry code way
// const chng_txt = function(){
//     hello.innerHTML = "Bye Bye World";
// }
// setTimeout(chng_txt,2000);

stoper.addEventListener('click', function(){
    clearTimeout(txt_chnge);
});