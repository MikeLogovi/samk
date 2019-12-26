<template>
    <section class="parteners" id="parteners">
        <div class="container text-center">
            <h1 class="section-title">Parteners</h1>
        </div>
   
        <div class="container">
               <carousel :perPageCustom="[[1199,3],[920,3],[800,2],[420,1],[0,1]]"  :mouse-drag="true" :autoplay="true" :loop="true">
                        <slide  v-for="partner in partners" :key="partner.id" class="slidePosition">
                           <img  :src="`${backendEndpoint()}storage/${partner.source}`" class="logo-parteners " alt=""> 
                        </slide>
                </carousel>
                <!--<carousel :autoplay="true" :responsive="{0:{item:1,nav:false}, 600:{item:2,nav:true},959:{item:3,nav:true}}">
                     <img  v-for="partner in partners" :key="partner.id" :src="`${backendEndpoint()}storage/${partner.source}`" class="logo-parteners " alt=""> 
               </carousel>-->
         </div>
            
       
        </section>
</template>
<script>
import {Carousel,Slide} from 'vue-carousel'
import {mapState} from 'vuex'
export default{
   name:'parteners',
   components:{Carousel,Slide},
   computed:{
       ...mapState([
           'partners'
       ])
   },
   mounted(){
       this.loadPartners()
       Echo.channel('my-channel').listen('.partner-crud',(data)=>{
           this.loadPartners()
       })
   },
   methods:{
       loadPartners(){
           this.$store.dispatch('loadPartners')
       }
   }
}
</script>
<style scoped>
@import url('../../assets/assetics/owl/assets/owl.carousel.css');
@import url('../../assets/assetics/owl/assets/owl.theme.default.css');
.logo-parteners{
    width:200px!important;
    height:150px!important;
    display:inline-block;
    padding:0 0 0 90px;
}
.section-title{
  font-family:'Fredoka One';
  color:#00D320;
  font-size:5vw!important;
  font-weight:bold;
  padding:15px 0;
  position:relative;
  margin-bottom:3vw;
}
.section-title:before{
   content:"";
   background-color:#00D320;
   position:absolute;
   height:2px;
   width:33.3%;
   bottom:0;
   left:33.3%;
}
.slidePosition{
    margin-right:6px;
}
@media only screen and (max-width: 338px){
  .slidePosition{
       margin-right:1px;
  }
}
@media only screen and (max-width: 430px){
 .slidePosition{
       margin-right:4px;
  }
}
@media only screen and (min-width: 431px) and (max-width: 460px){
 .slidePosition{
       margin-right:15px;
  }
}
@media only screen and (min-width: 461px) and (max-width: 479px){
 .slidePosition{
       margin-right:-5px;
  }
}
@media only screen and (max-width: 499px){
  
  
  
}
@media only screen and (min-width: 500px) and (max-width: 700px){
  .slidePosition{
       margin-right:15px;
  }
   .vidContent{
       top:50px;
   }
  
}
@media only screen and (min-width: 701px) and (max-width: 800px){
   .vidContent h1{
       font-size:2em;
   }
   .vidContent{
       top:100px;
   }
  .slidePosition{
       margin-right:15px;
  }
}
@media only screen and (min-width: 801px) and (max-width: 900px){
   .slidePosition{
       margin-right:20px;
  } 
}
@media only screen and (min-width: 1203px) {
   .vidContent h1{
       font-size:3em;
   }
   .vidContent{
       top:200px;
   }
   
}
</style>