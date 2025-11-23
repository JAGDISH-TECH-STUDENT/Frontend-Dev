$(function(){
  $("#search").keyup(function(){
    let val=$(this).val().toLowerCase();
    let count=0;
    $("#courses li").each(function(){
      let text=$(this).text().toLowerCase();
      if(text.includes(val)){ $(this).show().css("background","yellow"); count++; }
      else $(this).hide();
    });
    $("#count").text(count+" matched");
  });
});
