/**
 * 
 */

function clearErrors() {

	errors = document.getElementsByClassName('error');
	for (let item of errors) {
		item.innerHTML = "";
	}


}

// Validation for Employee Name

function myFullName(){

	var FullName = document.getElementById("name").value;

	var Nameregx = /^([A-Z]{1}[a-z]+)\s([A-Z]{1}[a-z]+)\s([A-Z]{1}[a-z]+)$/;
	
	if (Nameregx.test(FullName)) {
			document.getElementById("errorname").innerHTML = " ";
	return true;
	}
	else if (FullName == "") {
		document.getElementById("errorname").innerHTML = "  Name  cannot be empty";
		
		return false;
	}
	
	else{
		document.getElementById("errorname").innerHTML = "  Name is not in proper format";
	
		return false;
	}

}

	// Validation for Employee Number

	function myMobile(){

		var number = document.getElementById("Phone").value;
		
		var nregx = /^[7-9]{1}[0-9]{9}$/;
		if (nregx.test(number)) {
			
			document.getElementById("ephone").innerHTML = " ";
			return true;
		}
		
		else if (number == "") {
			document.getElementById("ephone").innerHTML = " Mobile number is empty";
			return false;
		}
		else{
			document.getElementById("ephone").innerHTML = " Mobile number is invalid";
			return false;
		}
		
		
	}

	// Validation for BirthDate

	function myDOB() {

    var userinput = document.getElementById("DOB").value;
   
    if(userinput==null || userinput=='') {
      document.getElementById("errordate").innerHTML = " Choose your Date of Birth.";  
      return false; 
    } else {
    	document.getElementById("errordate").innerHTML = " ";  
    	return true;
    }
   
}

	// Validation for Employee Email

	function myMail(){

		var mail = document.getElementById("Email").value;
		
		var eregx = /^[a-z]+.[a-z]+@cloverinfotech.[a-z]{3}$/;
		if (eregx.test(mail)) {
			document.getElementById("erroremail").innerHTML = " ";
			return true;
		}
		else if (mail == "") {
			document.getElementById("erroremail").innerHTML = "Email-id is empty";
			return false;
		}
		else {
			document.getElementById("erroremail").innerHTML = "invalid email";
			return false;
		}
	}

		// validation for zipcode

		function myZipCode(){

			var zip = document.getElementById("Zip").value;
			var zregx = /^[0-9]{3}-[0-9]{3}$/;
			
            if (zip.match(zregx)) {
				document.getElementById("ezip").innerHTML = " ";
				return false;
			}
			else if (zip.length == 0) {
				document.getElementById("ezip").innerHTML = "zipcode cannot be empty";
				return false;
			}
			
			else {
				document.getElementById("ezip").innerHTML = "zipcode is invalid";
				return false;
			}
			}

			
	//validation select for city

	function myCity(){

	
		if (document.getElementById("city").selectedIndex == 0) {
			
			document.getElementById("errorcity").innerHTML = "You have not selected City";
			return false;
		}
		else {
		document.getElementById("errorcity").innerHTML = " ";
			
			return true;
		}
	}

	// validation for matiral

	function myMar(){

	var marital = document.getElementsByName("myMarital");
	var m;
	for(i = 0; i < marital.length; i++) {
                if(marital[i].checked){
                	
                	m=marital[i].value;
                }
               
            }
		if (m != null) {
			document.getElementById("errormarital").innerHTML= "";
			return true;
		}
		 else
                {
                	document.getElementById("errormarital").innerHTML= "You have not selected Marital Status";
				return false;
                }
		}

		//validation select for Occupation

	function myOccupation(){

		
		
		if (document.getElementById("occ").selectedIndex == 0) {
			
			document.getElementById("errorocc").innerHTML = "You have not selected your Occupation";
			return false;
		}
		else {
			document.getElementById("errorocc").innerHTML = " ";
			return true;
		}
	}

	// Validation for Employee Password

	function myPassword(){

		var Pass = document.getElementById("epass").value;
		var pregx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
		if (pregx.test(Pass)) {
			document.getElementById("errorpass").innerHTML = " ";
			return true;
		}
	
		else if (Pass == "") {
			document.getElementById("errorpass").innerHTML = " Password is empty";
			return false;
		}
		else if (Pass < 8) {
			document.getElementById("errorpass").innerHTML = " Password should have minimum 8 character";
			return false;
		}
		else {
			document.getElementById("errorpass").innerHTML = " Password should have Atleast 1 special character ,UpperCase,LowerCase and Number";
			return false;
		}
		}
			
	// Validation for Employee Confirm Password

	function myConfirm(){

		var Pass = document.getElementById("epass").value;
		var CPass = document.getElementById("ecpass").value;
	  
		if (CPass == "") {
			document.getElementById("errorcpass").innerHTML = " Confirm Password is empty";
			return false;
		}
		if (Pass.match(CPass)) {
			document.getElementById("errorcpass").innerHTML = " ";
			return true;
		}
	
		else {
			document.getElementById("errorcpass").innerHTML = "Please enter same Password";
			return false;
		}
	}

  // function for all validation
	
 function validate(){

 	//--------------Value print for FullName---------------------//

 	    var FullName = document.getElementById("name").value;
		 var Nameregx = /^([A-Z]{1}[a-z]+)\s([A-Z]{1}[a-z]+)\s([A-Z]{1}[a-z]+)$/;
 	    if(FullName==""){
 	    	
 	    }else{
 	    	console.log("Enter a FullName:" + FullName);
 	    }
 	    
 	//--------------Value print for Mobile Number---------------------//
		
		var number = document.getElementById("Phone").value;
		var nregx = /^[7-9]{1}[0-9]{9}$/;
		if(number==""){

		}
		else{
		console.log("Enter your Mobile Number :" +number);
       }

 //    //------------Value print for BirthDate--------------------//

     var userinput = document.getElementById("DOB").value;
    var dob = new Date(userinput);
  
    if(userinput==null || userinput=='') {
     
    } else {
    	var weekdays = new Array(7);
        weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";
    var day = weekdays[dob.getDay()];
    var dd = dob.getDate();
    var mm = dob.getMonth()+1; 
    var yyyy = dob.getFullYear();
	    if(dd<10) 
	   {
	    dd='0'+dd;
	  } 

	if(mm<10) 
	{
	    mm='0'+mm;
	} 
	dob=day+' ' +dd+'-' +mm+'-' +yyyy;
    	console.log("Enter your Birth Date : " +dob);
    }

    //--------------Value print for Email---------------------//
		
		var mail = document.getElementById("Email").value;
		var eregx = /^([a-z]+.[a-z]+@cloverinfotech.[a-z]{3})$/;
  		if (mail=="") {

  		}
  		else{
		console.log("Enter your Email :" +mail);
        }
     
    //--------------Value print for Zip-Code---------------------//
	
		var zip = document.getElementById("Zip").value;
		var zregx = /^[0-9]{3}-[0-9]{3}$/;
		if(zip==""){

		}
		else{
		console.log("Enter your ZipCode :" +zip);	
		}
		
    //--------------Value print for City Name---------------------//
		
		var select=document.getElementById("city");
		var result=select.options[select.selectedIndex].value;
		if (document.getElementById("city").selectedIndex == 0) {
			
			
		}
		else {
		console.log("Select your City :" +result);
		}

    //--------------Value print for Marital Status---------------------//
		
		var marital = document.getElementsByName("myMarital");
	
	    for(i = 0; i < marital.length; i++) {
                if(marital[i].checked){
                	console.log("Select your Marital Status :" +marital[i].value); 
                
                }
               
            }

    //--------------Value print for Occupation---------------------//
	
		var select = document.getElementById('occ');
        var val = select.options[select.selectedIndex].value;
        if (document.getElementById("occ").selectedIndex == 0) {

        }
        else
        {
       console.log("Enter your Occupation :" +val); 
}

    //--------------Value print for Password---------------------//
		
		var Pass = document.getElementById("epass").value;
		var pregx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
		if(Pass==""){

		}
		else{
			console.log("Enter your Password :" +Pass);
		}
		
	//--------------Value print for Confirm Password---------------------//
		
		var CPass = document.getElementById("ecpass").value;

		if (CPass=="") {

		}
		else
		{
		 console.log("Enter your Confirm Password :" +CPass);
		}
        


    //--------------Condition check field is empty or not---------------------//
		
		if (FullName === '' || mail === '' || number === '' || zip==='' || city==='' || userinput==='' || marital==='' || val==='' || Pass==='' || CPass==='') {
			alert("Please fill all fields...!!!!!!");
		clearErrors();	
		myFullName();
	    myMobile();
	    myDOB();
	    myMail();
		myZipCode();
		myCity();
		myMar();
		myOccupation();
		myPassword();
		myConfirm();
	    
	  
			return false;
			} 

         else if ( (!(eregx).test(mail)) || (!(Nameregx).test(FullName)) || (!(zregx).test(zip)) || (!(pregx).test(Pass)) || (!(CPass).match(Pass)) || (!(nregx).test(number)) )
			{
				alert("You entered wrong data...!!!!!!");
		clearErrors();	
		myFullName();
	    myMobile();
	    myDOB();
	    myMail();
		myZipCode();
		myCity();
		myMar();
		myOccupation();
		myPassword();
		myConfirm();
	    
				return false;
			}
			 else {
			 
			return true;
			}
		
 }

 