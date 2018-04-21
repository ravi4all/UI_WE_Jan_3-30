window.addEventListener("load",init);

function init(){
    // document.getElementById("btn").addEventListener("click",function(){
    //     console.log("Hello user");
    //     var username = document.getElementById("username");
    //     document.getElementById("hello").innerHTML = username.value;
    // });
    document.getElementById("btn").addEventListener("click",hello);
}


// document.getElementById("btn").addEventListener("click",hello);

function hello(){
    console.log("Hello user");
    var username = document.getElementById("username");
    document.getElementById("hello").innerHTML = username.value;
}