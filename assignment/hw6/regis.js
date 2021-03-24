window.onload = pageLoad;
var Input_regis = [];


function pageLoad(){
	var form = document.getElementById("myform");
 	form.onsubmit = validateForm;
    
}




function validateForm() {
    var pass = document.forms["myform"]["password"];
    var repass = document.forms["myform"]["retypepassword"];
    
    if(pass.value == repass.value)
    {
        // myFormfunction();
        alert("ถูกต้อง");
    }
    else if(pass.value != repass.value)
    {
        alert("ผิด");
        
        return false;
        
    }
}
