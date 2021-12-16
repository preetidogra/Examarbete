<template>
  <h3>Log In</h3>

    <form class="form">
    <label> Email:  </label> <br/> <br/>
    <input type="text" placeholder="Enter Email" v-model="form.email"/>
    <br />  <br /> 

    <label> Password:  </label> <br/> <br/>
    <input type="password" placeholder="Enter Password" v-model="form.password" />
    <br />  <br /> 
    
    <button v-on:click="login" type="button">  Login </button>
 
  </form>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      form:{
        email: '',
        password:''
      }
    }
  },
  methods:{
    login()
    {
      console.warn("login is confirmed", this.form);
      
    }
  }
};
</script>
<style scoped>
body{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.form{
  padding:20px;
  margin:20px;
  width:190px;
  color:white;
  background-color: black;
  border-radius: 20px;
}
.form button {
  margin:10px;
  padding:10px; 
  color: black;
  background-color: white;
  width:90px;
  border:turquoise;
   
}
.form button-1:hover {
cursor: pointer;
color: black;
}

</style>


