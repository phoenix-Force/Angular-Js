function put() {
	var x = document.getElementById("msgname");
	var y = document.getElementById("msgmail");
	var z = document.getElementById("msg");
	if((x.value === ""||x.value === "null") ||( y.value === "" ||y.value === "null") ||(z.value === "")||z.value === "null"){
		
		alert("Invalid Submission");
	}
	else{
		alert("Your Comment Has Submitted Successfully");
	}
};