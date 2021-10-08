const btnCreateList = document.querySelector("#btn-create-list");
const desk = document.querySelector("#desk");

btnCreateList.addEventListener("click",function (){
    let list = document.createElement("div");
    let listName = document.getElementById("list-name").nodeValue;
    list.innerHTML = listName;
    desk.append(list);
})