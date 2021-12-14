<!-- template tag has the HTML files or objects -->
<template>
  <Header />
  <div class="main">
    <span class="heading1"> <h2>Welcome to K-Solutions !</h2> </span>
    <span class="heading2"><h4>RESHAPING THE 'IT' WORLD !</h4> </span>
    <p class="text">
        <b>Established in 2021, we have quickly expanded our operations globally and
      served customers from Europe, Asia and many others. <br/>
      We strive to provide you with the best solutions to your business system needs. 
      As our client, we place great emphasis and focus on your problems and goals and
      develop solutions that best fits your needs. We offer strong and effective
      solutions to your business with an enduring impact. We think of ourselves
      as your long-term partner. As partners, we will ensure your business needs
      are carefully evaluated and will decide the best methods to represent your
      company, and develop a strong and effective solution for your business
      that will have an enduring impact.! </b>
    </p>
    <div>
      <div class="card">
        <div class="card-image"></div>
        <div class="card-text"></div>
        <h4>Our Vision</h4>
        Go Digital: <br/> Every business must become digital
      </div>

      <div>
        <div class="card1">
          <div class="card-image1"></div>
          <div class="card-text1"></div>
          <h4>Our Mission</h4>
          Enhance business growth of our customers with creative design and
          development
        </div>

        <div>
          <div class="card2">
            <div class="card-image2"></div>
            <div class="card-text2"></div>
            <h4>Our Values</h4>
            Team Work, Ethics, Responsibility 
            <br/> and Transparency
          </div>
        </div>

        <div>
          <div class="card3">
            <div class="card-image3"></div>
            <div class="card-text3"></div>
            <h4>Our Goals and Objectives</h4>
           Innovation, Best customer Service and <br/> ensure 100% Compliance
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- the template objects are exported in the script tags -->
<script>

import Header from "./Header.vue";

export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>

<style scoped>

body {
  background-color: grey;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;    
}
.main p {  
  color:black ;
  text-align:justify;
}

.heading2,
.heading1 {
  color: black;
  font-size: large;
  text-align: center;
  text-shadow: 1px 1px 1px skyblue;
}

.card,
.card1,
.card2,
.card3 {
  float: left; 
  display: grid;
  margin: 15px;
  padding: 2px;
  border: 2px solid grey;
  grid-template-columns: 240px;
  grid-template-rows: 120px 30px;
  grid-template-areas: "image" "text";
  border-radius: 18px;
  background: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  width: 240px;
}

.card-image,
.card-image1,
.card-image2,
.card.image3 {
  grid-area: image;
}
.card-text,
.card-text1,
.card-text2,
.card-text3 {
  grid-area: text;
}
.card-image {
  grid-area: image;
  background: url("../assets/services1.jpg");
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
}
.card-image1 {
  grid-area: image;
  background: url("../assets/services.jpg");
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
}
.card-image2 {
  grid-area: image;
  background: url("../assets/values.jpg");
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
}
.card-image3 {
  grid-area: image;
  background: url("../assets/services.jpg");
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
  transition: 0.5s ease;
  cursor: pointer;
  margin: 20px;
}

.card-text,
.card-text1,
.card-text2,
.card-text3 {
  grid-area: text;
}
</style>
