$(document).ready(function(){

    $("button").click(function(){
        // $(this).siblings("img").hide(1000);
        // $(this).parent().hide(1000);
        // $(this).parents().hide(1000);
        // $(this).parentsUntil('#parent_1').hide(1000);
        // $(this).parents("#parent_1").siblings("#parent_2").find("img").hide(1000);
        $(this).parents("#parent_1").siblings("#parent_2").find(".child:last-child img").hide(1000);
    })

})