const btnCreateList = document.querySelector("#btn-create-list");
const desk = document.querySelector("#desk");
let counter = 1;
const clearBtn = document.querySelector("#clear_desk");
clearBtn.addEventListener("click",function(){
    desk.innerHTML = null;
    counter = 1;
})

btnCreateList.addEventListener("click",function (){
    let list = document.createElement("div");
    list.classList.add("list");
    let listName = document.getElementById("list-name").value;
    let h2 = document.createElement("H2");
    if(listName = " ")
    {
        listName = "New list " + counter;
        counter++;
    }
    h2.innerHTML = listName;
    list.append(h2);
    let img = document.createElement("img");
    img.setAttribute("src","img/pen-solid.svg");
    img.setAttribute("alt","redact list name");
    img.setAttribute("width","30px");
    list.append(img);
    desk.append(list);
    
})