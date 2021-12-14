<template>
  <div class="header">
    <router-link to="/"> Home </router-link>
    <router-link to="/services"> Services </router-link>
    <router-link to="/contact" > Contact Us </router-link>
    <a v-on:click="logout" href="#"> LogOut </a>
    
  </div>
</template>


<script>
export default  {
      name: "Header" 
      
    }

</script>
<style>
body {
  padding: 0;
  margin: 0;
}
.header {
  color:white;
  background-color: skyblue;
  text-align: right;
  margin: 0;
  padding: 20px;
  text-shadow: 2px 1px 1px grey;
}
.header a:hover {
  background-color: black;
  color:white;
  border-radius: 10px;
}
.header a {
  color: white;
  padding: 15px 15px;
  text-decoration: none;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-align: center;
}
</style>
