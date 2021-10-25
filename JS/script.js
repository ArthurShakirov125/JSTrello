const btnCreateList = document.querySelector("#btn-create-list");
const desk = document.querySelector("#desk");
let counter = 1;
const clearBtn = document.querySelector("#clear_desk");
const inputListName = document.querySelector("#list-name");



function AddList() {
    let list = document.createElement("div");
    list.classList.add("list");
    let listName = document.getElementById("list-name").value;
    let h2 = document.createElement("H2");
    if (listName == "") {
        listName = "New list " + counter;
        counter++;
    }
    h2.innerHTML = listName;
    list.append(h2);
    let img = document.createElement("img");
    img.setAttribute("src", "img/pen-solid.svg");
    img.setAttribute("alt", "redact list name");
    img.setAttribute("width", "30px");
    img.classList.add("edit-list");
    list.append(img);
    desk.append(list);
}

function EditList(e) {
    if (e.target.classList.contains("edit-list")) {
        let list = e.target.querySelector(".list");
        let h2 = list.querySelector("h2");
        h2.setAttribute("contenteditable", "true");
        h2.focus();

    }
}

btnCreateList.addEventListener("click", AddList);

inputListName.addEventListener("keydown", e => {
    if (e.key == "Enter") {
        btnCreateList.click();
    }
}
);

clearBtn.addEventListener("click", function () {
    desk.innerHTML = null;
    counter = 1;
});

desk.addEventListener("click", e => {
    let obj = e.target;
    if(obj.classList.contains("edit-list")){
        console.log(obj);
        let list = obj.parentNode;
        console.log(list)
        let list_text = list.querySelector("h2");
        console.log(list_text);
        list_text.setAttribute("contenteditable","true");
        list_text.focus();
        
    }
});



