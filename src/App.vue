<template>
  <div id="app">
    <router-view /> 
      
    <Footer/>
  </div>
</template>

<script>
import Footer from "./components/Footer.vue";
//import SignIn from './components/SignIn.vue'

export default {
  name: "App",
  components: {
    Footer
  },
}
   
</script>


<style scoped>
.register input, login input {
  width: 300px;
  padding-left: 20px;
  height: 30px;
  margin: 10px 20px 20px 10px;
  margin-bottom: 30px;
  padding: 3px;
  border: 1px solid skyblue;
  display: block;
  text-align: center;
  border-radius: 10px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
.register button, login button {
  background-color: skyblue;
  color: black;
  padding: 10px;
  margin: 5px;
  text-decoration: underline;
  border-radius: 10px;
  width: 300px;
  height: 40px;
  text-align: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  cursor: pointer;
}
</style>