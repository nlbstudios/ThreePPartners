//The purpose of this jquery document is to add the hiding functionality to the portions of text the user may want to view more of upon a button click

//This is to initially hide the information to be later shown upon button clicks
$("#welcome-more").hide();
$("#add-bio").hide();
$("#add-bio2").hide();
$("#add-bio3").hide();



// Welcome content

$(document).ready(function(){
  $("#morewelcome").click(function(){
    $("#welcome-more").fadeToggle(500);
  });
});

$(document).ready(function(){
  $("#morewelcome").click(function(){
    $("#morewelcome").fadeToggle(0);
  });
});

$(document).ready(function(){
  $("#morewelcome").click(function(){
    $(".welcome-content").animate({"font-size":"28px", "line-height":"39px"}, 0)
  })
})


//first bio button

$(document).ready(function(){
  $("#morebio").click(function(){
    $("#add-bio").fadeToggle(500);
  });
});

$(document).ready(function(){
  $("#morebio").click(function(){
    $("#morebio").fadeToggle(0);
  });
});

//second bio button function

$(document).ready(function(){
  $("#morebio2").click(function(){
    $("#add-bio2").fadeToggle(500);
  });
});

$(document).ready(function(){
  $("#morebio2").click(function(){
    $("#morebio2").fadeToggle(0);
  });
});

//third bio button function

$(document).ready(function(){
  $("#morebio3").click(function(){
    $("#add-bio3").fadeToggle(500);
  });
});

$(document).ready(function(){
  $("#morebio3").click(function(){
    $("#morebio3").fadeToggle(0);
  });
});

// Portfolio jquery
//
// $('.portfolio-item1').click(function() {
//     // var loc = $(this).attr('src');
//     $('#portfoliomain').attr('src','.portfolio-item1');
//     // var loc = $(this).attr("src");
//     // $('.portfolio-item').attr("src",loc);
// });

$('.portfolio-item1').on({
  'click' : function(){
    $('.mainport').attr('src','img/portfolio/portfolio1.png');
  }
});

$('.portfolio-item2').on({
  'click' : function(){
    $('.mainport').attr('src','img/portfolio/portfolio2.png');
  }
});

$('.portfolio-item3').on({
  'click' : function(){
    $('.mainport').attr('src','img/portfolio/portfolio3.png');
  }
});

$('.portfolio-item4').on({
  'click' : function(){
    $('.mainport').attr('src','img/portfolio/portfolio4.png');
  }
});

$('.portfolio-item5').on({
  'click' : function(){
    $('.mainport').attr('src','img/portfolio/portfolio5.png');
  }
});

$('.portfolio-item6').on({
  'click' : function(){
    $('.mainport').attr('src','img/portfolio/portfolio6.png');
  }
});

$('.portfolio-item7').on({
  'click' : function(){
    $('.mainport').attr('src','img/portfolio/portfolio7.png');
  }
});

$('.portfolio-item8').on({
  'click' : function(){
    $('.mainport').attr('src','img/portfolio/portfolio8.png');
  }
});
