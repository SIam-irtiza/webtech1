document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myform");
  const messageDiv = document.getElementById("message");

 
  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    messageDiv.textContent = "";

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let zip = document.getElementById("zipcode").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let amount = document.getElementById("amount").value.trim();

    let hasError = false;

   
    const fnameMsg = document.getElementById("fnameMessage");
    const namePattern = /^[A-Za-z]+$/;
    if (!namePattern.test(fname)) {
      fnameMsg.textContent = "First Name only letters";
      document.getElementById("fname").scrollIntoView({ behavior: "smooth", block: "center" });
      hasError = true;
    } else {
      fnameMsg.textContent = "";
    }

    const lnameMsg = document.getElementById("lnameMessage");
    if (!namePattern.test(lname)) {
      lnameMsg.textContent = "Last Name only letters";
      document.getElementById("lname").scrollIntoView({ behavior: "smooth", block: "center" });
      hasError = true;
    } else {
      lnameMsg.textContent = "";
    }

    const zipMsg = document.getElementById("zipMessage");
    if (!/^\d+$/.test(zip)) {
      zipMsg.textContent = "Zip must be digits only";
      document.getElementById("zipcode").scrollIntoView({ behavior: "smooth", block: "center" });
      hasError = true;
    } else {
      zipMsg.textContent = "";
    }

    const phoneMsg = document.getElementById("phoneMessage");
    if (!/^\d+$/.test(phone)) {
      phoneMsg.textContent = "Phone must be digits only";
      document.getElementById("phone").scrollIntoView({ behavior: "smooth", block: "center" });
      hasError = true;
    } else {
      phoneMsg.textContent = "";
    }

    const emailMsg = document.getElementById("emailMessage");
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      emailMsg.textContent = "Enter a valid email";
      document.getElementById("email").scrollIntoView({ behavior: "smooth", block: "center" });
      hasError = true;
    } else {
      emailMsg.textContent = "";
    }


    const amountMsg = document.getElementById("amountMessage");
    if (!/^\d+$/.test(amount)) {
      amountMsg.textContent = "Amount must be digits only";
      document.getElementById("amount").scrollIntoView({ behavior: "smooth", block: "center" });
      hasError = true;
    } else {
      amountMsg.textContent = "";
    }

    if (!hasError) {
        setTimeout(() => {
        window.location.href = "thankyou.html"; 
      }, 1000); 
  
    
      alert("Form submitted successfully!");
    }
  });

  const resetBtn = document.querySelector('button[type="reset"], button:nth-of-type(2)');
  resetBtn.addEventListener("click", function () {
    form.reset();
    messageDiv.textContent = "";
    messageDiv.style.color = "red";
    document.querySelectorAll(".message").forEach(msg => {
      msg.textContent = "";
    });
  });
});
