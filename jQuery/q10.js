$(function(){
  $("#regForm").submit(function(e){
    e.preventDefault();
    let valid=true;
    let name=$("#name").val().trim();
    let email=$("#email").val().trim();
    let password=$("#password").val();
    $("#name,#email,#password").css("border","");
    if(name===""){ $("#name").css("border","2px solid red"); valid=false; }
    let emailPattern=/^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if(!emailPattern.test(email)){ $("#email").css("border","2px solid red"); valid=false; }
    if(password.length<8){ $("#password").css("border","2px solid red"); valid=false; }
    if(valid){ $("#result").text("Registration successful!"); }
    else { $("#result").text("Please correct highlighted fields."); }
  });
});
