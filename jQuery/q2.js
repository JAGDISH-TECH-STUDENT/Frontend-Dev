$(function(){
  $(".product").click(function(){ $(this).css("background","yellow"); });
  $(".product").hover(function(){ $(this).append("<span> Details</span>"); });
  $(".favorite").click(function(){ $(this).toggleClass("selected"); });
  $("[discount]").css("color","green");
  $(".product").each(function(){ if($(this).data("stock")==="out") $(this).click(()=>alert("Out of stock")); });
});
