const requestUrl = 'https://api.github.com/users/JagtapBhuvanesh25'
const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        console.log(typeof this.responseText);
        console.log(this.responseText);
        const data = JSON.parse(this.responseText) //this.anything gives full response
        console.log(typeof data);
        console.log(data.followers);
    }
}
xhr.send();