<template>
   <div class="navbar">
      <a href="/" >Home</a>
        <a href="/RegisterPage">Register</a>
        <a href="/LoginPage"  class="active">Login</a>
        <a href="/about">About Us</a>
        <a href="/findingDoc">Doctor</a>
        <a href="/findingHosp">Hospital</a>
        <a href="/findingPharmacy">Pharmacy</a>
        <a href="/findingInsurance">Insurance</a>
        <a href="/ProfilePatient" class="active">Profile</a>
    </div>
   <div class=start><h1>PROFILE PAGE</h1></div>
   <div>
       <div class="prof1">
   <p>Name:{{ name }}
   <input type=text v-model="name" placeholder="Enter your First Name" />
   </p>
   <p>Age:{{ age }}
   <input type=text v-model="age" placeholder="Enter your Age" />
   </p>
   <p>Email: {{ email }}
    <!-- FROM DB -->
   <!-- <input type=text v-model="fname" placeholder="Enter your Last Name" /> -->
   </p>
   <p>Password:{{ password }}
   <input type=text v-model="password" placeholder="Set your password" />
   </p>
   <p>Contact Number:{{ contact }}
   <input type=text v-model="contact" placeholder="Enter your Contact Number" />
   </p>
   <p>Wallet:{{ wallet }}
   </p>

       <p>Upload your documents: {{ doc }}</p>
     <upload-files></upload-files>
   </div>
</div>
</template>
   <script>
       
import UploadFiles from "./UploadFiles.vue";
   export default {
       name: "ProfileHosp",
       components:{
           UploadFiles
       },
     props: {
       msg: String,
     },
     data(){
       return {
     users: null,
   };
},
   }
   </script>

<style scoped>
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

body {
 font-family: Arial, Helvetica, sans-serif;
}
.prof1 {
   text-align: left;
   padding: 5rem;
   font-size: 1.5rem;
   font-weight:bold;
   border-style: solid;
   border-radius: 5px
}
.start{
   background-color: #82c8f7;
   font-weight:bolder;
   
   color: white;
}
input[type="text"]{
   width:50%;
   padding: 12px 20px;
    margin: 8px 0;
   box-sizing: border-box;
}

input[type=text]:focus {
 background-color: hsl(0, 0%, 95%);
}


</style>