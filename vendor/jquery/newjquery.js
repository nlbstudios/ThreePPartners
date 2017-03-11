$("#welcome-more").hide();

$(document).ready(function(){
  $("#morewelcome").click(function(){
    $("#welcome-more").fadeToggle(1000);
  });
});

$(document).ready(function(){
  $("#morewelcome").click(function(){
    $(".welcome-content").animate({"font-size":"16px", "line-height":"16px"})
  })
})


// $("#add-bio").hide();
// $("#add-bio2").hide();
// $("#add-bio3").hide();
//
//
// $(document).ready(function(){
//   $("#morebio").click(function(){
//       $("#add-bio").fadeToggle(1000);
//   });
// });
//
// $(document).ready(function(){
//   $("#morebio2").click(function(){
//       $("#add-bio2").fadeToggle(1000);
//   });
// });
//
// $(document).ready(function(){
//   $("#morebio3").click(function(){
//       $("#add-bio3").fadeToggle(1000);
//   });
// });

//
//
//
//
//
//
//
//
