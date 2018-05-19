window.addEventListener("load", initEvents);

var p_name;
var p_price;
var p_desc;

function initEvents(){
    p_name = document.querySelector("#p_name");
    p_price = document.querySelector("#p_price");
    p_desc = document.querySelector("#p_desc");

    document.querySelector("#add").addEventListener("click", addItem);
    document.querySelector("#delete").addEventListener("click",deleteItem);
    document.querySelector("#save").addEventListener("click", saveData);
    document.querySelector("#load").addEventListener("click",loadData);
}

function saveData(){
    if(window.localStorage){
        var json = JSON.stringify(obj.itemList);
        localStorage.setItem('data',json);
    }
    else {
        alert("Localstorage not supported");
    }
}

function loadData(){
    var data = localStorage.getItem('data');
    obj.itemList = JSON.parse(data);
    printItems();
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
    clear_boxes();
}

function clear_boxes(){
    p_name.value = "";
    p_desc.value = "";
    p_price.value = "";
}

function markItem(){
    event.srcElement.classList.toggle("marked");
    var current_id = event.srcElement.innerHTML.split(" ")[0];
    obj.toggleItem(current_id);
}

function deleteItem(){
    obj.deleteItem();
    printItems();
}

function printItems(){
    var ul = document.querySelector("#itemList");
    ul.innerHTML = "";

    obj.itemList.forEach(function(x){
        var li = document.createElement("li");
        var cart_btn = document.createElement("button");
        cart_btn.innerHTML = "Add to cart";
    
        li.setAttribute('class','list-group-item');
        cart_btn.className = 'btn btn-success';
    
        obj.addItem(p_name.value,p_price.value,p_desc.value);
    
        li.innerHTML = x.id + " " + x.name +" " +x.price + " "+x.desc;
        li.appendChild(cart_btn);
        ul.appendChild(li);
        li.addEventListener("click", markItem);
    });
}