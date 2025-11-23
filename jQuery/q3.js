$(function(){
  $(".answer").hide();
  $(".question").click(function(){ $(this).find(".answer").toggle(); });
  $(".question").hover(function(){ $(this).css("color","blue"); });
  $(".question").dblclick(function(){ $(".answer").hide(); });
  $(".ansInput").focus(function(){ $(this).closest(".question").css("background","lightyellow"); });
  $(".ansInput").blur(function(){ $(this).closest(".question").css("background",""); });
});
