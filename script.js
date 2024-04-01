let divUsers = document.getElementById("users");

let request = new XMLHttpRequest(); 
request.open("GET","https://reqres.in/api/unknown")

request.addEventListener("load",function () {
    let response = (this.responseText);
    let responseJS = JSON.parse(response);
    console.log(responseJS);

    let ul = document.createElement("ul");
    responseJS.data.forEach((item) =>{         
        let li = document.createElement("li");
        li.textContent = `${item.name} ${item.year}`
        ul.appendChild(li);
    })

    let li = document.createElement("li")  // კონკრეტული ობიექტის ამოღება.
    li.textContent = responseJS.data[4].color;
    ul.appendChild(li);

    divUsers.appendChild(ul);
})

request.addEventListener("error",function () {   
    let p = document.createElement("p");
    p.innerText = "server error";
    divUsers.appendChild(p);
})


request.send()
