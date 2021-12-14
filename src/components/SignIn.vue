<template>
  <img class="logo" src="../assets/pic.jpg" />
  <h3>Sign-in</h3>

  <div class="register">
    <input type="text" placeholder="Enter Username" />
    <input type="text" placeholder="Enter Email" />
    <input type="password" placeholder="Enter Password" />
    <button>Register here</button>
    <p>
      <router-link to="/login"> GoTo Login </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "SignIn",
};
</script>

<style scoped>
.logo {
  width: 300px;
  height: 130px;
}
.register input {
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
.register button {
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