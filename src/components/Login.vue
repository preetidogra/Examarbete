<template>
  <h3>Log In</h3>

<p class="form">
  <label> Email: </label> <br />
  <br />
  <input type="text" placeholder="Enter Email" v-model="form.email" />
  <br />
  <br />

  <label> Password: </label> <br />
  <br />
  <input type="password" placeholder="Enter Password" v-model="form.password" />
  <br /> 
 
  <button v-on:click="login1" type="button">Login</button></p>  

  <br />

  <button v-on:click="logout" type="button">LogOut</button>
 

  <p>
    <router-link to="/"> Redirect to Home Page </router-link>
  </p>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
        login: "",
      },
    };
  },
  methods: {
    login1() {
      alert("login is confirmed", this.form);
      console.warn("login confirmed", this.email, this.password, this.name)
    },
    logout(){
      console.log("you are logged out now");
      alert("you are logged out now");
      
    },
  },
 
 
};
</script>
<style scoped>
body {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

.form {
  padding: 80px;
  margin: 40px;
  width: 400px;
  color: black;
  border-radius: 20px;
  background-color: lightblue;
  align-content: center;
}
.form button,
select {
  margin: 10px;
  padding: 10px;
  color: black;
  background-color: white;
  width: 90px;
  border: turquoise;
}

.form button-1:hover {
  cursor: pointer;
  color: black;
}
</style>


