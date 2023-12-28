function homes()
{   
    $(".about").css("display","none");
    $(".contact").css("display","none");
    $(".cart").css("display","none");


    $("#home").css("color","rgb(23, 180, 180)");
    $("#shop").css("color","black");
    $("#blog").css("color","black");
    $("#contact").css("color","black");
    $("#about").css("color","black");
}
function shops()
{
    $(".main").css("display","none");
    $(".fashion").css("display","none");
    $(".about").css("display","none");
    $(".items").css("display","block");
    $(".contact").css("display","none");
    $(".cart").css("display","none");
    
    
    $("#home").css("color","black");
    $("#shop").css("color","rgb(23, 180, 180)");
    $("#blog").css("color","black");
    $("#contact").css("color","black");
    $("#about").css("color","black");
}
function blogs()
{
    $(".main").css("display","none");
    $(".items").css("display","none");
    $(".about").css("display","none");
    $(".fashion").css("display","block");
    $(".contact").css("display","none");
    $(".cart").css("display","none");

    $("#home").css("color","black");
    $("#shop").css("color","black");
    $("#blog").css("color","rgb(23, 180, 180)");
    $("#contact").css("color","black");
    $("#about").css("color","black");
}

function abouts()
{
    $(".main").css("display","none");
    $(".items").css("display","none");
    $(".fashion").css("display","none");
    $(".about").css("display","block");
    $(".contact").css("display","none");
    $(".cart").css("display","none");

    $("#home").css("color","black");
    $("#shop").css("color","black");
    $("#blog").css("color","black");
    $("#contact").css("color","black");
    $("#about").css("color","rgb(23, 180, 180)");    
}

function contacts()
{
    $(".main").css("display","none");
    $(".items").css("display","none");
    $(".fashion").css("display","none");
    $(".contact").css("display","block");
    $(".about").css("display","none");
    $(".cart").css("display","none");

    $("#home").css("color","black");
    $("#shop").css("color","black");
    $("#blog").css("color","black");
    $("#contact").css("color","rgb(23, 180, 180)");
    $("#about").css("color","black");
}

// cart

function show(img){
    let newImg = document.getElementById("newImg");
    console.log(img);
    newImg.src=img.src;

    $(".main").css("display","none");
    $(".items").css("display","none");
    $(".fashion").css("display","none");
    $(".contact").css("display","none");
    $(".about").css("display","none");
    document.querySelector(".cart").style.display="flex";
}

function addCart()
{
    alert("Added to Cart");
    location.reload();
}