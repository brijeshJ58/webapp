
			
			function display()
			{
				var principalAmount = 0;
			var rateOfInterestPerMonth = 0;
			var numberOfMonths=0;
			principalAmount = document.getElementById("pa").value;
			numberOfMonths = document.getElementById("duration").value * 12;
				
			if(principalAmount == "" || numberOfMonths == "" || document.getElementById("fName").value == "")
			{
				alert("Please fill the form");
				return;
			}
				var loginstr = `
						<label>EMI: </label>	 <br>
						<input type="text" id="emi" placeholder="" name="emi" disabled> <br> <br> 
						`
				document.getElementById("d1").innerHTML = loginstr;
					//document.getElementById("l1").innerText = "HIDE";
					//document.getElementById("l1").style.color = "RED";
					
			//	E = P x r x ( 1 + r )n / ( ( 1 + r )n - 1 ) 
			var EMI = 0 ;
			
			var xyz = document.getElementById("roi").value;
			xyz = xyz.replace("%","")
			rateOfInterestPerMonth = xyz /(12*100);
			var abc = 1 +rateOfInterestPerMonth;
			EMI = (principalAmount * rateOfInterestPerMonth * Math.pow(abc,numberOfMonths))/
					(Math.pow(abc,numberOfMonths)-1);
					
			document.getElementById("emi").value =  EMI.toFixed(2);
			document.getElementById("emi").style.color = "BLUE";
				
			}
			
			function resetForm()
			{
				document.getElementById("loanForm").reset();
				
					document.getElementById("d1").innerText = "";
					//document.getElementById("l1").innerText = "LOGIN";
					//document.getElementById("l1").style.color = "BLUE";
			}
			
			
			
			function changeType()
			{
				var typeValue = document.getElementById("loanType").value;
				//alert(typeValue);
				if(typeValue == "Home")
					document.getElementById("roi").value = "7%";
				else if(typeValue == "Car")
					document.getElementById("roi").value = "9%";
				else if(typeValue == "Personal")
					document.getElementById("roi").value = "12%";
				else
					document.getElementById("roi").value = "";
				
			}
			
			
			
			function displayfd()
			{
				var maturityAmount = 0 ;
			var principalAmount = 0;
			var rateOfInterestPerMonth = 0;
			var numberOfYears=0;
			principalAmount = document.getElementById("fpa").value;
			numberOfYears = document.getElementById("fdDuration").value;
			
			if(numberOfYears == "" ||numberOfYears == "")
			{
				alert("Please fill the form");
				return;
			}				
				var loginstr = `
						<label>Maturity Amount: </label>	 <br>
						<input type="text" id="maturity" placeholder="" name="maturity" disabled> <br> <br> 
						`
				document.getElementById("w1").innerHTML = loginstr;
					//document.getElementById("l1").innerText = "HIDE";
					//document.getElementById("l1").style.color = "RED";
					
			//	MA = P x ( 1 + r )n 
			
			var xyz = document.getElementById("froi").value;
			xyz = xyz.replace("%","")
			rateOfInterestPerMonth = xyz /100;
			var abc = 1 +rateOfInterestPerMonth;
			maturityAmount = parseInt(principalAmount) + parseInt(principalAmount * rateOfInterestPerMonth * Math.pow(abc,numberOfYears));
					
			document.getElementById("maturity").value =  maturityAmount;
			document.getElementById("maturity").style.color = "BLUE";
				
			}
			
			function resetfdForm()
			{
				document.getElementById("fdForm").reset();
				
					document.getElementById("w1").innerText = "";
					//document.getElementById("l1").innerText = "LOGIN";
					//document.getElementById("l1").style.color = "BLUE";
			}
			
			function fdDurationChange()
			{
				var typeValue = document.getElementById("fdDuration").value;
				//alert(typeValue);
				if(typeValue == "1" || typeValue == "2")
					document.getElementById("froi").value = "5%";
				else if(typeValue == "3" || typeValue == "4" || typeValue == "5")
					document.getElementById("froi").value = "6%";
				else if(typeValue == "6" || typeValue == "7" || typeValue == "8" || typeValue == "9" || typeValue == "10")
					document.getElementById("froi").value = "7%";
				else
					document.getElementById("froi").value = "";
				
			}