<template>
  <div>
    <div class="navbar">
    <a href="/" >Home</a>
        <a href="/RegisterPage" class="active">Register</a>
        <a href="/LoginPage" >Login</a>
        <a href="/about">About Us</a>
        <a href="/FindADocPage">Doctor</a>
        <a href="/FindHosp">Hospital</a>
        <a href="/FindPharm">Pharmacy</a>
        <a href="/FindInsurance">Insurance</a>
        <a href="/ProfilePatient">Profile</a>
        </div>
    <form class="modal-content animate" action="/action_page.php" method="post">
      <div class="imgcontainer">
        <img
          src=".././assets/pharm-difficult-logo.png"
          alt="logo"
          class="avatar"
        />
      </div>

      <label for="stakeHolder"><b>Register as</b></label>
      <select name="stakeHolder" id="stakeHolderReg" @change="show('stakeHolderReg')">
        <option value="none">--Select--</option>
        <option value="pharmacy">Pharmacy</option>
        <option value="doctor">Doctor</option>
        <option value="patient">Patient</option>
        <option value="hospital">Hospital</option>
      </select>

      <div class="doctor patient">
        <label for="phoneNo"><b>Enter your Phone Number</b></label>
        <input id = "phoneNo" type="text" placeholder="Enter phone" name="uname" required />
      </div>

      <div class="pharmacy hospital">
        <label for="licenceNo"><b>Enter your Licence Number</b></label>
        <input type="text" placeholder="Enter No" name="uname" required />
        <label for="emailID"><b>Enter associated Email ID</b></label>
        <input id = "emailID" type="email" placeholder="Enter email" name="email" required />
      </div>
      <div class="pharmacy hospital doctor patient">
        <button id="getOTP" type="button" @click="sendEmail()">
          Get O.T.P
        </button>
      </div>

      <div class="afterOTP">
        <label for="otp"><b>Enter OTP</b></label>
        <input type="text" placeholder="Enter OTP" name="otp" required />
        <label for="psw"><b>Set a Password</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />
        <label for="psw"><b>Repeat Password</b></label>
        <input
          type="password"
          placeholder="Re-enter Password"
          name="psw"
          required
        />
      </div>
      <button type="submit">Register</button>

    </form>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
  name: "RegisterPage",
  props: {},
  methods: {
    
    sendEmail: function () {
      
      var phone = document.getElementById("phoneNo").value;
      var email = document.getElementById("emailID").value;
      if(!(phone.length > 0 || email.length > 0)) {
        alert("Please enter phone number or email ID");
            return;
      }
      emailjs.init('86UT13kN15Rcf4Sgo');
      try {
        var templateParams = {
          to_email: email,
          message: "Your OTP is "
        };
        emailjs.send("service_71ouhg8", "template_o5k4ptm", templateParams);
        
      } catch(error) {
          console.log({error})
      }
      var a = document.getElementsByClassName("afterOTP");
      console.log(a);
      for (var i = 0; i<a.length; i++) {
        a[i].style.display = "block";
      }

      var x = document.getElementById("getOTP");
      x.disabled = true;
      x.innerHTML = "OTP Sent";
      setTimeout(function () {
        x.disabled = false;
        x.innerHTML = "Get O.T.P";
      }, 30000);





    }
    ,show: function (id) {
        var x = document.getElementById(id).value;
        if(x == "doctor" || x == "patient"){
            var toHide = document.getElementsByClassName("pharmacy hospital");
            for (var i = 0; i < toHide.length; i++) {
                toHide[i].style.display = "none";
            }
            var toShow = document.getElementsByClassName("doctor patient");
            for (i = 0; i < toShow.length; i++) {
                toShow[i].style.display = "block";
            }
        }
        else if(x == "pharmacy" || x == "hospital"){
            toHide = document.getElementsByClassName("doctor patient");
            for (i = 0; i < toHide.length; i++) {
                toHide[i].style.display = "none";
            }
            toShow = document.getElementsByClassName("pharmacy hospital");
            for (i = 0; i < toShow.length; i++) {
                toShow[i].style.display = "block";
            }

        }
    
      
      //   return "Welcome to this tutorial on " + this.name + " - " + this.topic;
    },
  
      
    },
};
</script>

<style scoped>
body {
  font-family: Arial, Helvetica, sans-serif;
}

.navbar {
  background-color: #333;
  overflow: hidden;
  top: 0;
  width: 100%;
}

/* Style the links inside the navigation bar */
.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.navbar a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.navbar a.active {
  background-color: #05c2f7;
  color: white;
}

/* Full-width input fields */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #0bece8;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

/* Extra styles for the cancel button */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the image and position the close button */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
  position: relative;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  padding-top: 60px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s;
}

@-webkit-keyframes animatezoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}

@keyframes animatezoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
.afterOTP{
  display: none;
}

.doctor{
  display: none;
}

.hospital{
  display: none;
}

.pharmacy{
  display: none;
}

.doctor{
  display: none;
}


</style>
