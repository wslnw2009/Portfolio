const queryString = window.location.search;
 	
 	const urlParams = new URLSearchParams(queryString);
 	const UsernameCon = urlParams.get('username');
 	const passwordCon = urlParams.get('password');
	
window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("mylogin");
 	form.onsubmit = checkLogin;
}

function checkLogin(){
	var username = document.forms["mylogin"]["username"];
    var password = document.forms["mylogin"]["password"];
	if(username.value != UsernameCon || password.value != passwordCon)
	{
		alert("ผิด");
		return false;
	}
	else
	{
		alert("เข้าสู่ระบบ");
		
	}
}