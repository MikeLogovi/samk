<template>
<div>

<TopBar/>

<main role="main">
  <div class="container marketing">

    <!-- START THE FEATURETTES -->

    <hr class="featurette-divider">

    <div class="row featurette ajust-content">
      <div class="col-md-7">
        <h2 class="featurette-heading">ABOUT SAM K TRAVEL & TOUR</h2>
        <p >Sam K T&T is a Ghanian company founded in 2017 basically to promote the tourism
          industry in Africa and the world at large
        </p>
      </div>
      <div class="col-md-5 left-img">
          <img class="left-img" src="/static/logo3.png" width="300" height="300"/>
      </div>
    </div>

    <hr class="featurette-divider">
      <div class="row featurette ajust-content">
      <div class="col-md-7">
        <h2 class="featurette-heading">Our vision</h2>
        <p >To be the largest tourism company in Africa and beyond</p>
      </div>
      <div class="col-md-5 ">
         <img class="left-img" src="/static/images/vision.jpg" width="300" height="300"/>
      </div>
    </div>
    <hr class="featurette-divider">

    <div class="row featurette ">
      <div class="col-md-7 order-md-2 ajust-content" style="margin-left:-100px">
        <h2 class="featurette-heading">Our Missions</h2>
        <p >
             <ul>
                 <li>
                   We intend to promote tourism in African countries by exposing it's culture,as well as 
                   the amazing and awesome sites of the continent to the world
                 </li>
                
                 <li>
                   We are also passionate and committed to developing and implementing safety measure to ensure
                   the maximum security of our Dear clients whenever/wherever they travel with us 
                 </li>
                 <li>
                   We believe that tourism is a way of life ,therefore everyone should develop the interest to travel
                   in order to,know,explore,and learn about different surroundings,cultures,and traditions..This is not limites to a particular 
                   class of persons hence we intend to make the industry more attractive,educative,fun and above all economical 
                 </li>
                 <li>
                   Create Job opportunities as a means of contributing to the Continent's development
                 </li>
             </ul>
        </p>
      </div>
      <div class="col-md-5 order-md-1">
          <img src="/static/images/mission.jpg" width="300" height="300"/>
      </div>
    </div>

    <hr class="featurette-divider">
    <div class="row featurette ajust-content">
      <div class="col-md-7"  style="margin-left:-40px">
        <h2 class="featurette-heading">Our Achievements</h2>
        <p>
          The company has embarked on amazing and exciting tours.Remarkable visits include
          Cap Carbon and the fine beaches in Bejaia-Algeria,the beautiful animal park in Jijel
          not forgetting it's fine beaches.A desert safari to the southern part of Algeria(Béchar),a trip
          to the island at Tigzirt, a stress-relief visit to Tipaza and the almighty tour to Oran,Tlemcen and Batna.
          Hospitality is number one.The company partners with well known Hotels and restaurants in providing
          the best services for its clients.Fun and entertainment has never been a miss.Sam K has well trained 
          workers both skilled and not skilled to help brighten your trips.The company never disapoints as it promises great 
          tours in the years ahead,as well as other parts of the world
        </p>
      </div>
      <div class="col-md-5" style="margin-left:40px">
          <img src="/static/logo3.png" width="300" height="300"/>
      </div>
    </div>
    <hr class="featurette-divider">
    <div class="row featurette">
      <div class="col-md-7 order-md-2 ajust-content">
        <h2 class="featurette-heading">THE CEO</h2>
        <p >
             SAMUEL KODJO AGODOA
        </p>
        <blockquote>
             Passions and dreams are like time,nothing can't stop them.
             And it will be like that still there are people to give sense
             to the word freedom.
        </blockquote>
      </div>
      <div class="col-md-5 order-md-1">
          <img src="/static/images/ceo.jpg" width="300" height="300" style="border-radius:50%"/>
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
.featurette{
  margin:0 -110px 0 -20px;
}
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
  padding-left:50px;
   text-align:justify;
  text-justify:inter-word;
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
.featurette h2{
  margin-top:-0.8em;
}
.featurette img{
  margin-top:-1.7em;
  margin-right:40px;
}
blockquote{
  color:#00D320;
}
/*.left-img{
  margin-right:2px;
}*/
</style>