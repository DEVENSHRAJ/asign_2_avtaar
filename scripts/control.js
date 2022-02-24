function display_registeration_hide_login(){
    document.getElementById("registeration").style.display = "block";
    document.getElementById("login_avtaar").style.display = "none";
    document.getElementById("logedin").style.display = "none";
    document.getElementById("avtaar_band").style.display = "none";
}
function registered_perfectly(){
  /*logic here*/

  document.getElementById("registeration").style.display = "none";
  document.getElementById("logedin").style.display = "none";
  document.getElementById("welcome_login").style.display = "none";
  document.getElementById("login_avtaar").style.display = "block";
  document.getElementById("avtaar_band").style.display = "block";
  document.getElementById("login_page").style.display = "block";
  document.getElementById("registered_login").innerHTML="Registered Successfully, SignUp Now!!!";
  document.getElementById("registered_login").style.display = "block";
}

function hide_regis_login(){
  document.getElementById("registeration").style.display = "none";
  document.getElementById("login_avtaar").style.display = "none";
    document.getElementById("avtaar_band").style.display = "block";
  document.getElementById("logedin").style.display = "block";

}
function logout(){
  registered_perfectly();
  document.getElementById("registered_login").style.display = "none";
  document.getElementById("welcome_login").innerHTML="Logged out!!! Login Again";
  document.getElementById("welcome_login").style.display = "block";
}
function registration_failed(){
  console.log("Enter details correctly, Signup again!!!");
  document.getElementById("registered_login").innerHTML="Signup properly!!!";
  document.getElementById("registeration").style.display = "none";
  document.getElementById("logedin").style.display = "none";
  document.getElementById("welcome_login").style.display = "none";
  document.getElementById("registered_login").style.display = "block";
  document.getElementById("login_avtaar").style.display = "block";
  document.getElementById("avtaar_band").style.display = "block";
  document.getElementById("login_page").style.display = "block";
}
