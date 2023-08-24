function vaidation(){
var user= document.getElementById("user").value;
if(user==""){
    document.getElementById("username").innerHTML="Fill Your Details properly";
    return false
}
}