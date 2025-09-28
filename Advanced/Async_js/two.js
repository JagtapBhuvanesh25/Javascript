function rndm_col(){
    col = "0123456789ABCDEF";
    ans = "#";
    for (let i=0 ; i<6 ; i++) ans += col[Math.floor(Math.random() * 16)];
    return ans;
}
const col_change = setInterval(function(){
    document.body.style.backgroundColor = rndm_col();
    document.body.style.color = rndm_col();
},1000);

setTimeout(function(){
    clearInterval(col_change);
},5000);