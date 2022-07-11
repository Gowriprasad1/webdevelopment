function validpassword(){
	var name=document.myform.name1.value;
	var password=document.myform.pass1.value;
	var cpassword=document.myform.pass2.value;
	if(name.length<6){
		alert("user name minimum 6 charcters");
		return false;
	}
   else if(password.length<6){
		alert("password must contain 6 letters");
		return false;
	}
	else if(password==cpassword){
		return true;
	}
	else{
		alert("Does not match password");
		return false;
	}	
}