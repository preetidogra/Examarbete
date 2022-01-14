<template>
  <h3>SignUp with Us</h3>

  <p class="form">
    <label> Name : </label> <br />
    <br />
    <input type="text" placeholder="Enter Name" v-model="name" />
    <br />
    <br />
    <label> Email: </label> <br />
    <br />
    <input type="text" placeholder="Enter Email" v-model="email" />
    <br />
    <br />

    <label> Password: </label> <br />
    <br />
    <input type="password" placeholder="Enter Password" v-model="password" />
    <br />

    <button v-on:click="signup" type="button">Sign Up</button>
  </p>
  <p>
    <router-link to="/login"> Proceed to Login </router-link>
  </p>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      name: "",
    };
  },
  methods: {
    async signup() {
      console.warn("signup done", this.email, this.password, this.name);
      let result = await axios.post("http://localhost:3000/user", {
        email: this.email,
        password: this.password,
        name: this.name,
      });

      console.warn(result);
      if (result.status == 201) {
        alert("Sign up is a success");
        localStorage.setItem("userInfo", JSON.stringify(result.data));
      }
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

.form button:hover {
  background-color: black;
  color: white;
  cursor: pointer;
}
</style>


