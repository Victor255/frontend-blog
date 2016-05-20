// Javascript Code.
$(document).ready(function () {
//this shows and hides the searchbox
  $("#search").click(function(){
    $("#input").toggle("slow");
  });
});


// Javascript Code.
$(document).ready(function () {
  // $.get("_posts/2014-11-09.json", function(data){
  //
  //   var posts = JSON.parse(data);
  //   $(".posts").html(posts['posts'][0]['title']);
  //
  // });

  $(this).load("_posts/posts.json", function(data){
    var posts = JSON.parse(data);

    order_date(posts["posts"]); 
    function order_date(myArray){
      var size = myArray.length;
      for(var pass = 1; pass < size; pass++){
        for( var up = 0; up < (size - pass); up++){
          var down = up + 1;
          if(myArray[up]['date'] < myArray[down]['date']){
            swap(myArray, down, up);
          }
        }
      }
    }

    function swap(myArray, indexOne, indexTwo) {
      var tmpVal = myArray[indexOne];
      myArray[indexOne] = myArray[indexTwo];
      myArray[indexTwo] = tmpVal;
    }

    $("#titulo_1").html(posts['posts'][0]['title']);
    $(".paragraph_1").html(posts['posts'][0]['content']);
    $(".date_1").html(posts['posts'][0]['date']);

    $("#titulo_2").html(posts['posts'][1]['title']);
    $(".paragraph_2").html(posts['posts'][1]['content']);
    $(".date_2").html(posts['posts'][1]['date']);

    $("#titulo_3").html(posts['posts'][2]['title']);
    $(".paragraph_3").html(posts['posts'][2]['content']);
    $(".date_3").html(posts['posts'][2]['date']);

    $("#titulo_4").html(posts['posts'][3]['title']);
    $(".paragraph_4").html(posts['posts'][3]['content']);
    $(".date_4").html(posts['posts'][3]['date']);
  });

  $(".post_1").hide();
  $(".post_2").hide();
  $(".post_3").hide();
  $(".post_4").hide();

  $("#titulo_1").click(function() {
    $(".post_1").addClass("current");
    $(".current").toggle();
    $(".post_1").removeClass("current");
  });

  $("#titulo_2").click(function() {
    $(".post_2").addClass("current");
    $(".current").toggle();
    $(".post_2").removeClass("current");
  });

  $("#titulo_3").click(function() {
    $(".post_3").addClass("current");
    $(".current").toggle();
    $(".post_3").removeClass("current");
  });

  $("#titulo_4").click(function() {
    $(".post_4").addClass("current");
    $(".current").toggle();
    $(".post_4").removeClass("current");
  });

  $("#button_1").click(function() {
    var comment = $("input[name=comment_1]").val();
    $("#comments_area_1").append("<p>" + comment + "</p>");
    $("input[name=comment_1]").val("");
  });

  $("#button_2").click(function() {
    var comment = $("input[name=comment_2]").val();
    $("#comments_area_2").append("<p>" + comment + "</p>");
    $("input[name=comment_2]").val("");
  });

  $("#button_3").click(function() {
    var comment = $("input[name=comment_3]").val();
    $("#comments_area_3").append("<p>" + comment + "</p>");
    $("input[name=comment_3]").val("");
  });

  $("#button_4").click(function() {
    var comment = $("input[name=comment_4]").val();
    $("#comments_area_4").append("<p>" + comment + "</p>");
    $("input[name=comment_4]").val("");
  });
});
