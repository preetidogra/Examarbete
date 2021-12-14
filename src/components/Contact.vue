<template>
  <br/>
  <h3>Kindly contact us for any Queries/ Business Enquiries</h3>

  <div class="card">
    <div class="card-image"></div>
    <div class="card-text"></div>
    <span class="contact">Mobile </span>
    <h4>0046764******</h4>
  </div>

  <div class="card1">
    <div class="card-image1"></div>
    <div class="card-text1"></div>
    <span class="contact"> Email</span>
    <h4>info@ksolutions.com</h4>
  </div>

  <div class="card2">
    <div class="card-image2"></div>
    <div class="card-text2"></div>
    <span class="contact"> Instagram</span>
    <h4> @K-Solutions  </h4>   
  </div>

  <div class="card3">
    <div class="card-image3"></div>
    <div class="card-text3"></div>
    <span class="contact"> Twitter</span>
    <h4> @K-Solutions  </h4>
   
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style>
body {
  font-family: Georgia, "Times New Roman", Times, serif;
}
h3 {
 
  color: white;
  background-color: black;
  text-shadow: 1px 1px 1px lightblue;
  font-size: large;
  text-align: center;
  padding:18px;
 }

.card,
.card1,
.card2,
.card3 {
  float: left;
  border: 1px solid black;
  display: grid;
  margin: 30px;
  padding: 0px;
  grid-template-columns: 240px;
  grid-template-rows: 120px 30px;
  grid-template-areas: "image" "text";
  border-radius: 18px;
  background: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-align: center;
  width: 240px;
}

.card-image,
.card-image1,
.card-image2 {
  grid-area: image;
}
.card-text,
.card-text1,
.card-text2 {
  grid-area: text;
}
.card-image {
  grid-area: image;
  background: url("../assets/mobile.jpg");
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
}
.card-image1 {
  grid-area: image;
  background: url("../assets/email.jpg");
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
}
.card-image2 {
  grid-area: image;
  background: url("../assets/insta.jpg");
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
}.card-image3 {
  grid-area: image;
  background: url("../assets/twitter.jpg");
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
}
.card:hover,
.card1:hover,
.card2:hover,
.card3:hover {
  transform: scale(0.75);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
}
.card,
.card1,
.card2,
.card3 {
  float: left;
  transition: 0.5s ease;
  cursor: pointer;
  margin: 20px;
}
.card-image,
.card-image1,
.card-image2,
.card-image3 {
  grid-area: image;
}
.card-text,
.card-text1,
.card-text2,
.card-text3 {
  grid-area: text;
}
</style>
