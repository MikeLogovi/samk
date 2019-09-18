<template>
<u-animate-container>
    <u-animate
      name="rollIn"
      delay="1s"
      duration="2s"
      :iteration="1"
      :offset="0"
      animateClass="animated"
      :begin="false" 
    >
   <div class="container-fluid">
       <div class="parallax2 text-center">
           <div class="row">
               <div class="col-1"></div>
               <div class="col-4 pt-1">
                     <img src="/static/images/img11.JPG" class="img-fluid"> 
               </div>
               <div class="col-1"></div>
               <div class="col-5 text-center">
                   <h2>Let's go now! We have to explore world!</h2>
                   <p>
                       We make great travel.We make best travel.We love travel and travel again
                       We make great travel.We make best travel.We love travel and travel again
                       We make great travel.We make best travel.We love travel and travel again
                       We make great travel.We make best travel.We love travel and travel again
                       We make great travel.We make best travel.We love travel and travel again
                    </p>
                </div>
           </div>
       </div>
   </div>
    </u-animate>
   </u-animate-container>
</template>
<script>
import {UAnimateContainer, UAnimate} from 'vue-wow'
export default {
components:{UAnimateContainer, UAnimate}  
}
</script>
<style scoped>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
.parallax2{
    height:40vw;
    background-image:linear-gradient(25deg,rgba(0,0,0,0.5),rgba(0,0,0,0.85)),url("../../../static/images/img22.jpg");
    background-position:50%;
    background-repeat:no-repeat;
    background-size:cover;
    background-attachment:fixed;
    color:white;
    display:flex;
    align-items:center;
}
.parallax2,.container-fluid{
  
  margin-right:0;
  margin-left:0;
  padding-right:0;
  padding-left:0;
}
.parallax2 h2{
    color:white;
    padding-bottom:2vh;
    font-weight:bold;
    position:relative;
    font-family:'Roboto Condensed';
    margin-bottom:3vh;
}
.parallax2 h2:before{
    content:'';
    position:absolute;
    height:5px;
    width:100px;
    bottom:0;
    left:40%;
    color:white;
    display:inline-block;
    background-color:white;
}
.parallax2 p{
    color:white;
    font-size:1.3vw;
}

</style>