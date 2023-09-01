/**
 * 
 */
function clearErrors() {

	errors = document.getElementsByClassName('error');
	for (let item of errors) {
		item.innerHTML = "";
	}


}
function validate() {
	clearErrors();
	var returnval = true;

   // Validation for Employee Code
	//let EmpCode = document.getElementById("EmployeeCode");//compare
	var empcode = document.getElementById("EmployeeCode").value;
	var regx = /^[C]{1}[I]{1}[0-9]{5}$/;

	if (regx.test(empcode)) {
	
		returnval = true;
	}
	else if (empcode == "") {
		document.getElementById("errorcode").innerHTML = " Employee code is empty";
		returnval = false;
	}
	else {

		document.getElementById("errorcode").innerHTML = " Employee code is invalid";
		returnval = false;
	}
	
	// Validation for Employee Name
	//let empName = document.getElementById("name");
	var EmpName = document.getElementById("name").value;
	var Nameregx = /^([A-Z]{1}[a-z]+)\s([A-Z]{1}[a-z]+)$/;
	if (Nameregx.test(EmpName)) {
		returnval = true;
	}
	else if (EmpName == "") {
		document.getElementById("errorname").innerHTML = " Employee Name is empty";
		returnval = false;
	}
	else {

		document.getElementById("errorname").innerHTML = " Employee Name is not in proper format";
		returnval = false;
	}

    // Validation for Employee Number
	
	var number = document.getElementById("Phone").value;
	var nregx = /^[7-9]{1}[0-9]{9}$/;
	if (nregx.test(number)) {
		returnval = true;
	}
	else if (number == "") {
		document.getElementById("ephone").innerHTML = " Mobile number is empty";
		returnval = false;
	}
	else {
		document.getElementById("ephone").innerHTML = " Mobile number is invalid";
		returnval = false;
	}
	
	// Validation for Employee Password
	//let pass = document.getElementById("epass");
	var Pass = document.getElementById("epass").value;
	var pregx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	if (pregx.test(Pass)) {
		returnval = true;
	}

	else if (Pass == "") {
		document.getElementById("errorpass").innerHTML = " Password is empty";
		returnval = false;
	}
	else if (Pass < 8) {
		document.getElementById("errorpass").innerHTML = " Password should have minimum 8 character";
		returnval = false;
	}
	else {
		document.getElementById("errorpass").innerHTML = " Password should have Atleast 1 special character ,UpperCase,LowerCase and Number";
		returnval = false;
	}
	
	// Validation for Employee Confirm Password
	//let cpass = document.getElementById("ecpass");
	var CPass = document.getElementById("ecpass").value;
	 if (CPass == "") {
		document.getElementById("errorcpass").innerHTML = " Confirm Password is empty";
		returnval = false;
	}
	if (Pass.match(CPass)) {
		returnval = true;
	}
	
	else {
		document.getElementById("errorcpass").innerHTML = "Please enter same Password";
		returnval = false;
	}
	
	
	
	// Validation for Employee Email
	//let Mail = document.getElementById("Email");
	var mail = document.getElementById("Email").value;
	var eregx = /^[a-z]+.[a-z]+@cloverinfotech.[a-z]{3}$/;
	if (eregx.test(mail)) {
		returnval = true;
	}
	else if (mail == "") {
		document.getElementById("erroremail").innerHTML = "Email-id is empty";
		returnval = false;
	}

	else {
		document.getElementById("erroremail").innerHTML = "invalid email";
		returnval = false;
	}


}




