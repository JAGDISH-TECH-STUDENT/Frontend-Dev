$(document).ready(function(){
  let hour = new Date().getHours();
  let greet = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";
  $("#greeting").text(greet);
  $("#change").click(()=>$("#greeting").text("Stay motivated and keep learning!"));
  $("#toggle").click(()=>$("#message").toggle());
  $("#greeting").click(()=>alert("Greeting clicked!"));
});
