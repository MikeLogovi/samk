<template>
    <section class="parteners" id="parteners">
        <div class="container text-center">
            <h1 class="section-title">Parteners</h1>
        </div>
   
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <carousel :autoplay="true">
                        
                            <img src="/static/logo2.PNG" class="logo-parteners " alt=""> 
                        
                         
                            <img src="/static/logo1.PNG" class="logo-parteners " alt=""> 
                        
                         
                            <img src="/static/logo3.png" class="logo-parteners " alt=""> 
                        
                         
                            <img src="/static/logo2.PNG" class="logo-parteners " alt=""> 
                        
                         
                            <img src="/static/logo4.PNG" class="logo-parteners " alt=""> 
                        
                          
                            <img src="/static/logo4.PNG" class="logo-parteners " alt=""> 
                        
                          
                            <img src="/static/logo1.PNG" class="logo-parteners " alt=""> 
                        
                          
                            <img src="/static/logo1.PNG" class="logo-parteners " alt=""> 
                        
                     </carousel>
                </div>
            </div>
        </div>
        </section>
</template>
<script>
import carousel from 'vue-owl-carousel'
export default{
   name:'parteners',
   components:{carousel},
   mounted(){
 
   }
}
</script>
<style scoped>
@import url('../../assets/assetics/owl/assets/owl.carousel.css');
@import url('../../assets/assetics/owl/assets/owl.theme.default.css');
.logo-parteners{
    width:150px!important;
    height:150px!important;
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
</style>