<template>
    <h3> Our Services </h3>
  
      
      <div class="card">
        <div class="card-image"></div>
        <div class="card-text"></div>
        <h4>Industries we cater to</h4>         
        <h5><li>Healthcare</li>
        <li>E-Commerce</li>
        <li>Retail</li>
        <li>Entertainment</li>
        <li>Tourism</li> </h5>
      </div>

      <div class="card1">
        <div class="card-image1"></div>
        <div class="card-text1"></div>
        <h4>Our Expertise</h4>         
        <h5><li>Project management</li>
        <li>Backend</li>
        <li>FrontEnd</li>
        <li>QA / Testing</li>
        <li>DevOps</li> </h5>
      </div>

      <div class="card2">
        <div class="card-image2"></div>
        <div class="card-text2"></div>
        <h4>Product Development</h4>         
        <h5>We build and secure applications of the Future !
        <li>React</li>
        <li>Angular/vue</li>
        <li>Java</li> </h5>
      
      </div>
      
      <div class="card3">
        <div class="card-image3"></div>
        <div class="card-text3"></div>
                
        <h4>Our Partners </h4>
        <h5><li>IB*M</li>
        <li>Fijits*u</li>
        <li>Nexe*r</li>
        <li>Qre*W</li> 
        <li>Queens L*B</li> </h5>
      </div>

</template>

<script>

export default {
    name:"Services"
}
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
  border: 2px solid black;
  display: grid;
  margin: 15px;
  padding: 2px;
  border: 2px solid black;
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
  background: url("../assets/vision.jpg");
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
}
.card-image1 {
  grid-area: image;
  background: url("../assets/expertise.jpg");
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
}
.card-image2 {
  grid-area: image;
  background: url("../assets/products.jpg");
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
}
.card-image3 {
  grid-area: image;
  background: url("../assets/partners.jpg");
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
