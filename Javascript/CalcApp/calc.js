window.addEventListener("load", init);

var result = 0;

function init(){
    f_num = document.getElementById("f_num");
    s_num = document.getElementById("s_num");
    span = document.getElementById("result");
    document.getElementById("add").addEventListener("click", add);
    document.getElementById("sub").addEventListener("click", sub);
    document.getElementById("div").addEventListener("click", div);
    document.getElementById("mul").addEventListener("click", mul);
}

function add(){
    // console.log(f_num.value,s_num.value);
    result = parseInt(f_num.value) + parseInt(s_num.value);
    // console.log(result);
    span.innerHTML = result;
}

function sub(){
    result = parseInt(f_num.value) - parseInt(s_num.value);
    // console.log(result);
    span.innerHTML = result;
}