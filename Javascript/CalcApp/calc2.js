window.addEventListener("load", init);

var result = 0;

function init(){
    f_num = document.getElementById("f_num");
    s_num = document.getElementById("s_num");
    span = document.getElementById("result");
    var buttons = document.getElementsByTagName("button");
    for(var i=0; i<buttons.length;i++){
        buttons[i].addEventListener("click",calc);
    }
}

function calc(){
    // var elem = event.srcElement;
    // console.log(elem);
    var operator = event.srcElement.value;
    
    var expression = f_num.value + operator + s_num.value;
    // console.log(expression);
    var result = eval(expression);
    span.innerHTML = result;

}