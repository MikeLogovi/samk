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
                     <img src="/static/images/img11.JPG" class="img-fluid my-img"> 
               </div>
               <div class="col-1"></div>
               <div class="col-5 text-center parallax2-content">
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
@media only screen and (max-width: 895px){
     .parallax2-content p{
         font-size:1.4vw;
     }
      .parallax2-content h2{
         font-size:20px;
     }
     .parallax2 h2:before{
    left:35%;
}
}

@media only screen and (max-width: 705px){
     .parallax2-content p{
         font-size:1.5vw;
     }
      .parallax2-content h2{
         font-size:25px;
     }
     .parallax2 h2:before{
    left:35%;
}
}
@media only screen and (max-width: 579px){
     .parallax2-content p{
         font-size:1.5vw;
     }
      .parallax2-content h2{
         font-size:18px;
     }
     .parallax2 h2:before{
    left:27%;
}
}
@media only screen and (max-width: 494px){
     .parallax2-content p{
         font-size:1.8vw;
     }
      .parallax2-content h2{
         font-size:18px;
         margin-top:10px;
     }
     .parallax2 h2:before{
         left:27%;
     }
     .my-img{
         margin-top:50px;
     }
}
@media only screen and (max-width: 437px){
     .parallax2-content p{
         font-size:1.8vw;
     }
      .parallax2-content h2{
         font-size:14px;
         margin-top:10px;
     }
     .parallax2 h2:before{
         left:20%;
     }
     .my-img{
         margin-top:50px;
     }
}
@media only screen and (max-width: 418px){
     .parallax2-content p{
         font-size:1.8vw;
         display:none;
     }
      .parallax2-content h2{
         font-size:18px;
         margin-top:35px;
     }
     .parallax2 h2:before{
         left:20%;
         display:none;
     }
     .my-img{
         margin-top:20px;
     }
}
@media only screen and (max-width: 335px){
    
     .my-img{
         margin-top:29px;
     }
}
</style>