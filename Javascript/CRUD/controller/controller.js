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
    var cart_btn = document.createElement("button");
    cart_btn.innerHTML = "Add to cart";

    li.setAttribute('class','list-group-item');
    cart_btn.className = 'btn btn-success';

    obj.addItem(p_name.value,p_price.value,p_desc.value);

    li.innerHTML = obj.id + " " + p_name.value + " " + p_price.value + " " + p_desc.value;
    li.appendChild(cart_btn);
    ul.appendChild(li);
    li.addEventListener("click", markItem);
}

function markItem(){
    event.srcElement.classList.toggle("marked");
    var current_id = event.srcElement.innerHTML.split(" ")[0];
    obj.toggleItem(current_id);
}