jq1(function(){
  setInterval(function(){
    let text = jq1("#carousel").text();
    jq1("#carousel").text(text==="Slide 1"?"Slide 2":"Slide 1");
  },2000);
  jq1("#widget").click(function(){ jq1(this).css("background","yellow"); });
});

jq2(function(){
  jq2("#modal").fadeIn(1000).delay(1000).fadeOut(1000);
  jq2("#tooltip").hover(function(){ jq2(this).attr("title","Tooltip active"); });
});
