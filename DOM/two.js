
    // Add Way 1
    function addlang1(lang){
        const lan = document.querySelector(".languages");
        const addlan =  document.createElement("li");
        addlan.innerHTML = lang;
        lan.appendChild(addlan);
    }
    addlang1("Python");
    addlang1("TypeScript");
    
    // Add way 2 (Optimised)
    function addlang2(lang){
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(lang));
        document.querySelector(".languages").appendChild(li);
    }
    addlang2("C++");

    // Edit
    const sec_lang = document.querySelector("li:nth-child(2)");
    // sec_lang.innerHTML = "Ruby";
    const temp = document.createElement("li");
    temp.appendChild(document.createTextNode("Ruby"));
    sec_lang.replaceWith(temp);

    // Remove
    document.querySelector("li:last-child").remove();