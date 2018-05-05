window.addEventListener("load", initEvents);

var p_name;
var p_price;
var p_desc;

function initEvents(){
    p_name = document.querySelector("#p_name");
    p_price = document.querySelector("#p_price");
    p_desc = document.querySelector("#p_desc");

    document.querySelector("#add").addEventListener("click", addItem);

}

function addItem(){
    var ul = document.querySelector("#itemList");
    var li = document.createElement("li");
    li.innerHTML = p_name.value + " " + p_price.value + " " + p_desc.value;
    ul.appendChild(li);
}