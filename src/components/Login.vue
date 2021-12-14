<template>
  <h3>Login</h3>

  <div class="login">
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="signin"> Sign In </button>
    <p>
      <router-link to="/signin"> GoTo Login </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>


