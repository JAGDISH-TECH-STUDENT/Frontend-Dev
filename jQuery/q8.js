$(function(){
  $("#add").click(()=>$("#posts").append("<li>New Post</li>"));
  $("#prepend").click(()=>$("#posts").prepend("<li>Featured Post</li>"));
  $("#remove").click(()=>$("#posts li:last").remove());
  $("#posts").before("<p>Tags:</p>").after("<p>End of Posts</p>");
  $("#posts li:contains('keyword')").css("color","red");
});
