<!-- <template>
  <div class="navbar">
        <a href="/" >Home</a>
        <a href="/RegisterPage">Register</a>
        <a href="/LoginPage">Login</a>
        <a href="/about">About Us</a>
        <a href="/findingDoc">Doctor</a>
        <a href="/findingHosp">Hospital</a>
        <a href="/findingPharmacy">Pharmacy</a>
        <a href="/findingInsurance" class="active">Insurance</a>
        <a href="/ProfilePatient">Profile</a>
        
   </div>
    <div class="insurance">
      <div class="location">
          <label for="insurance"><b>Search Location </b></label>
          <select name="location" id="location" @change="show('location')">           
              <option v-for="location in a" :key="location">{{location}}</option>
                  </select>
     
      </div>
      <div class="name">
          <label for="insurance"><b>Search Name </b></label>
          <select class="form-control" name="name">
              <option v-for="name in a" :key="name">{{name}}</option>
                  </select>
      
      </div>
    </div> 
  </template>
  <script>
  export default {
      name: "findingHosp",
      props: {},
      data: function () {
        return {
          isActive:false,
        };
      },
      methods: {
        //Working function to get info from database
        findData: async function(){
            // var name = 
            // var location = 
            // var speciality = 
    
            var params = {"stakeholder":"insurance", "name": "none", "none": "Rohini", "speciality":"none"};
            params = JSON.stringify(params)
            var a = await UserDataService.retrieveUser(params);
            console.log(a.data);
        },
  
        show: function(id){
            var x= document.getElementById(id).value;
        }
      },
  
  }
  </script> -->

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
button{
  background-color: #494949;
  border: thick;
  color: white;
  padding: 15px 32px;
  text-align: center;
  border-radius: 8px;
  text-decoration: none;
  font-size: 26px;
}

input[type=text]:focus {
 background-color: hsl(0, 0%, 95%);
}
button:hover {
    background-color: #05c2f7;
      transition: 0.7s;
  }



</style>