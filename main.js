$(document).ready(function(){
    $("body,html").bind("touchstart touchmove scroll mousedown DOMMouseScroll mousewheel keyup contextmenu", function(e){
        alert("it works !");
    });
}); 