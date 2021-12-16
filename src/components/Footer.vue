<template>
  <footer>
    <p>
      {{ title }}
    </p>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      title: " © K-Solutions Sweden. 2021, All rights reserved.",
    };
  },
};
</script>

<style scoped>
footer {
  margin-top: 450px;
    padding: 10px;
  background-color: black;
  color: white;
  text-align: center;
}
</style>


