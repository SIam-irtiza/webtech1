document.getElementById("myform").addEventListener("Continue", function (e) {
    e.preventDefault(); 

    // Get required input values
    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let zip = document.getElementById("zipcode").value.trim();
    let amount = document.getElementById("amount").value.trim();
    
    

  
    if (fname === "" || lname === "" || email === "" || phone === "") {
        alert("Please fill out all required fields.");
        return;
    } 


    let fnMessage= document.getElementById("fnameMessage");
    let namePattern = /^[A-Za-z]+$/;
       if (!namePattern.test(fname)) {
   fnMessage.textContent = " First Name must  only letters";
   document.getElementById("fname").scrollIntoView({ behavior: "smooth", block: "center" });
    return;
    }


     


    let emailMsg = document.getElementById("emailMessage");
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        emailMsg.textContent = "Invalid email format";
      document.getElementById("email").scrollIntoView({ behavior: "smooth", block: "center" });
        return;
    }



      let phnMsg = document.getElementById("phoneMessage");
    let phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(phone)) {
        phnMsg.textContent = "Please enter a valid phone number (11 digits)";
      document.getElementById("phone").scrollIntoView({ behavior: "smooth", block: "center" });
        return;
    }
       

  let zipMsg = document.getElementById("zipMessage");
  let zipPattern = /^[0-9]{4,5}$/;
  if (!zipPattern.test(zip)) {
    zipMsg.textContent = " Invalid Zip Code must be 4 / 5 digits";
     document.getElementById("zipcode").scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

   let amMsg = document.getElementById("amountMessage");
   let amountPattern = /^[0-9]+$/;
   if(!amountPattern.test(amount)) {
    amMsg.textContent = " Amount  only digits";
    document.getElementById("amount").scrollIntoView({ behavior: "smooth", block: "center" });
    return;
   }



    setTimeout(() => {
        window.location.href = "lab1.html"; // Goes to new page
      }, 1000); // 1 second delay
  
    
    alert("Form submitted successfully!");
       
    

});

