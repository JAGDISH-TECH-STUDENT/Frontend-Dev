$(function(){
  $("#subscribe").click(function(){ $("#topics").append("<p>Notifications enabled</p>"); });
  $("#unsubscribe").click(function(){ $("#topics").append("<p>Notifications disabled</p>"); });
  $("#topics").on("click",".topic",function(){ $(this).append(" subscribed"); });
  $("#topics").append('<div class="topic">New Topic</div>');
  $(".topic").off("click");
});
