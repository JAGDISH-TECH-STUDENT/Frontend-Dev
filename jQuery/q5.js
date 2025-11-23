$(function(){
  $(".manager").click(function(){ $(this).find(".employee").css("background","lightblue"); });
  $(".employee").hover(function(){ $(this).next(".info").show(); });
  $(".department").click(function(){ $(this).children().css("background","lightgreen"); });
  $(".employee").click(function(){ $(this).siblings().css("border","2px solid red"); });
  $(".department").click(function(){ $(this).parent().find(".employee").toggle(); });
});
