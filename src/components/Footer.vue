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
      title: " K-Solutions @2021 .Inc",
    };
  },
};
</script>

<style scoped>
footer {
  margin-top: 400px;
  margin-bottom:40px;
  padding: 10px;
  background-color: black;
  color: white;
  text-align: center;
}
</style>


