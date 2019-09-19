<template>
<div>

<TopBar/>

<main role="main">
  <div class="container marketing">
    


    <!-- START THE FEATURETTES -->

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">ABOUT SAM K TRAVEL & TOUR</h2>
        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
      </div>
      <div class="col-md-5">
          <img src="/static/logo3.png" width="500" height="500"/>
      </div>
    </div>

    <hr class="featurette-divider">
      <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">Our vision</h2>
        <p class="lead ">Our vision is to build the biggest tourism campagny in West Africa and beyond</p>
      </div>
      <div class="col-md-5">
         <img src="/static/images/vision.jpg" width="500" height="500"/>
      </div>
    </div>
    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7 order-md-2 ajust-content" >
        <h2 class="featurette-heading">Our Missions</h2>
        <p class="lead">
             <ul>
                 <li>
                   Promoting African tourism through development 
                   of the sites and implementation of a more secured safety measures
                 </li>
                
                 <li>Also exposing the Awesome touristes in Africa by making it more Attractive and fun</li>
             </ul>
        </p>
      </div>
      <div class="col-md-5 order-md-1">
          <img src="/static/images/mission.jpg" width="500" height="500"/>
      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-7 order-md-2 ajust-content">
        <h2 class="featurette-heading">THE CEO</h2>
        <p class="lead">
             SAMUEL KODJO AGODOA
        </p>
      </div>
      <div class="col-md-5 order-md-1">
          <img src="/static/images/ceo.jpg" width="500" height="500" style="border-radius:50%"/>
      </div>
    </div>

    <hr class="featurette-divider">

    
  </div>
<Team/>
</main>
 <Footer/>

        </div>
</template>
<script>
import TopBar from './TopBar'
import Footer from './Footer'
import Team from './AboutComponents/Team'
export default {
    components:{TopBar,Footer,Team},
}
</script>
<style scoped>
/* GLOBAL STYLES
-------------------------------------------------- */
/* Padding below the footer and lighter body text */

@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");


/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 32rem;
}
.carousel-item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 32rem;
}


/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing h2 {
  font-weight: 400;
}
.marketing .col-lg-4 p {
  margin-right: .75rem;
  margin-left: .75rem;
}


/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
.featurette-heading {
  font-weight: 300;
  line-height: 1;
  letter-spacing: -.05rem;
}


/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}

.featurette-heading{
  font-family:'Fredoka One';
  color:transparent;
  background-clip:text;
  -webkit-background-clip:text;
  background-image:linear-gradient(25deg,#A64EAE,#4683B7);;
}
.ajust-content{
  padding-left:170px;
}
.lead{
  font-size:1.5em;
  font-family:'Roboto Condensed';
  
  line-height:30px;
  letter-spacing:0.025rem;
}
.lead ul li{
  font-size:1.5em;
  font-family:'Roboto Condensed';
  line-height:30px;
  letter-spacing:0.025rem;
  padding-bottom:15px;
}
</style>