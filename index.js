// // alert("Working!!");

// // $("h1").css("color", "red");

// console.log($("h1").css("color"));
// console.log($("h1").css("font-size"));

// $("h1").addClass("big-title margin-50");
// // $("h1").removeClass("big-title");
// console.log($("h1").hasClass("margin-50"));

// $("h1").text("Its time to say GoodBye!!"); 
// $("button").html("<em>Hey </em>") //innerhtml type

// $("img").attr("src");
// $("a").attr("href", "https://www.yahoo.com")  //setting attribute
// $("h1").click(()=>{
//     $("h1").css("color","blue");
//     setTimeout( ()=>{
//         $("h1").css("color","black");
//     }, 300);
// })


// $("button").click(()=>{
//     $("h1").css("color", "purple");
// })


// $(document).keypress((event)=>{
//         $("h1").html(event.key);
// })

// $("h1").on("mouseover",()=>{
//     $("h1").css("color","gray");
// })


$("button").on("click",()=>{
    $("h1").slideUp().slideDown().animate({opacity : 0.5});
})