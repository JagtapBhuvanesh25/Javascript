    // old ways
    // attachEvent()
    // jQuery - on
    // same same but diff from html
    // document.getElementById('owl').onclick = function(){
    //     alert("owl clicked");
    // }

    // Best Way Example
    // document.getElementById('owl').onclick = function(e){
    //     console.log(e);
    // }

    // type, timestamp, defaultPrevented
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode

    /*
    Event Propogation ->  1. Event Bubbling (false)
    (Third Parametre)        inner to outer elements
    (default is false)    2. Event Capturing (true)
                            outer to inner elements
    */
    
    // document.getElementById('images').addEventListener('click' , function(e){
    //     console.log(`image was clicked`);
    // } , true); // <= try switching it to true/false
    // const photos = document.getElementsByClassName('photo');
    // for (let i = 0; i < photos.length; i++) {
    //     photos[i].addEventListener('click', function(e) {
    //         console.log(`${e.target.id} was clicked`);
    //     }, true); // <= try switching it to true/false
    // }

    // document.getElementById('google').addEventListener('click' , function(e){
    //     e.preventDefault();
    //     e.stopPropagation(); // will not propogate to child or parent depending on case
    //     // e.stopImmediatePropagation(); // Also prevents any other listeners of the same event on the same element from running. Even if you attached multiple click listeners to the same button, only the one before stopImmediatePropagation() will fire.
    //     console.log(`Google was clicked`);
    // });

    document.querySelector('#images').addEventListener('click',function(e){
        console.log(e.target.tagName);
        if(e.target.tagName === 'IMG') e.target.parentNode.remove();
    });