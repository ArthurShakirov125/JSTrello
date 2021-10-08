const btnCreateList = document.querySelector("#btn-create-list");
const desk = document.querySelector("#desk");
let counter = 1;
btnCreateList.addEventListener("click",function (){
    let list = document.createElement("div");
    list.classList.add("list");
    let listName = document.getElementById("list-name").value;
    let h2 = document.createElement("H2");
    if(listName = " ")
    {
        listName = "New list " + counter
    }
    h2.innerText = listName;
    list.append(h2);
    desk.append(list);
    counter++;
})