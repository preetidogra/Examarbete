<template>
  <h3>Login</h3>

  <div class="login">
    <input type="text" placeholder="Enter Email" />
    <input type="password" placeholder="Enter Password" />
    <button v-on:click="signin">Login</button>
    <p>
      <router-link to="/signin"> SignIn</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>


