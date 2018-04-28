window.addEventListener("load", initEvents);

var username;
var useremail;
var userpwd;
var confpwd;
var span;

function initEvents(){
    username = document.querySelector("#box_1");
    useremail = document.querySelector("#box_2");
    userpwd = document.querySelector("#box_3");
    confpwd = document.querySelector("#box_4");
    span = document.getElementsByTagName("span");
    username.addEventListener("blur",blankCheck);
    useremail.addEventListener("keyup",validateEmail);
}

function blankCheck(){
    // if(username.value == "") {
    //     span[0].innerHTML = "Please fill this field";
    // }
    // else {
    //     span[0].innerHTML = "";
    // }
    str = username.value;
    if(isEmpty(str)) {
        span[0].innerHTML = "Please fill this field";
    }
    else {
        span[0].innerHTML = "";
    }

}

function isEmpty(str){
    return (str == undefined || str == null || str == "") ? true : false;
}

function validateEmail(){
    var pattern = /([a-z]|[0-9])\w+[@]+\w+[.]\w+{2,}/;
     if(pattern.test(useremail.value)){
         span[1].innerHTML = "Valid Email";
     }
     else {
         span[1].innerHTML = "Invalid Email";
     }
}