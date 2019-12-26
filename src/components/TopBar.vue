<template>
<div>
 <nav class="nav">
                   <ul>
                        <li class='navLi' v-if="showRoute"><a href="#portfolio" v-smooth-scroll="{offset:-100}">Portfolio</a></li>
                        
                                               <li class='navLi' v-if="showRoute"><a href="#parteners"  v-smooth-scroll="{offset:-100}">Parteners</a></li>

                        <li class='navLi' v-if="showRoute"><a href="#clients"  v-smooth-scroll="{offset:-100}">Clients</a></li>
                        <li class='navLi' ><router-link to="/gallery" >Gallery</router-link></li>
                        <li  class="logo__brand"><router-link to="/"><img class="mylogo white logo__brand_1" src="/static/logo3.png"/></router-link></li>
                        
                         <li class='navLi'><router-link to="/videos">Videos</router-link></li><li class='navLi' v-if="showRoute"><a href="#events"  v-smooth-scroll="{offset:-100}">Events</a></li>
                                               <li class='navLi' v-if="showRoute"><router-link to="/about">About</router-link></li>

                        <li class='navLi' v-if="showRoute"><a href="#contact"  v-smooth-scroll="{offset:-100}">Contact</a></li>
                   </ul>
                    <a class="nav-icon" href="javascript:void(0);"><span></span><span></span><span></span></a>
               </nav>


                <div class="full-nav">
           
           <!--
          <nav class="nav2">
               <ul>
                   <li><a href=""><span>01.</span>Home</a></li>
                   <li><a href=""><span>02.</span>Gallery</a></li>
                   <li><a href=""><span>03.</span>Videos</a></li>
                   <li><a href=""><span>04.</span>Events</a></li>
                   <li><a href=""><span>05.</span>Portfolio</a></li>
                   <li><a href=""><span>06.</span>Contact</a></li>
               </ul>
              
           </nav>
           -->
       
           <nav class="nav3">
                <div class="menu">
                     <ul class='clear'>
                         <li> 
                             
                             <a href="/" title="home">
                                 <i class="fa fa-home"></i>
                                 <span class="link-text">Home</span>
                             </a>
                             
                         </li>
                         <li> 
                             <router-link to="/gallery">
                             <a href="" title="Gallery">
                                 <i class="fa fa-camera"></i>
                                 <span class="link-text">Gallery</span>
                             </a>
                             </router-link>
                         </li>
                         <li> 
                              <router-link to="/videos">
                             <a href="" title="Videos">
                                 <i class="fa fa-video-camera"></i>
                                 <span class="link-text">Videos</span>
                             </a>
                              </router-link>
                         </li>
                         <li v-if="showRoute" > 
                              
                             <a href="" title="Events" @click.prevent='scrolling("#events")'>
                                 <i class="fa fa-cc"></i>
                                 <span class="link-text">Events</span>
                             </a>
                             
                         </li>
                         <li  v-if="showRoute"> 
                              
                             <a href="" title="Portolio" @click.prevent='scrolling("#portfolio")'>
                                 <i class="fa fa-image"></i>
                                 <span class="link-text">Portfolio</span>
                             </a>
                         </li>
                          <li v-if="showRoute"> 
                             <a href="" title="Parteners"  @click.prevent='scrolling("#parteners")'>
                                 <i class="fa fa-handshake-o"></i>
                                 <span class="link-text">Partners</span>
                             </a>
                         </li>
                          <li  v-if="showRoute"> 
                              <router-link to="/about">
                             <a href="" title="About">
                                 <i class="fa fa-address-card"></i>
                                 <span class="link-text">About</span>
                             </a>
                             </router-link>
                         </li>
                         <li v-if="showRoute"> 
                             <a href="" title="Contact"  @click.prevent='scrolling("#contact")'>
                                 <i class="fa fa-envelope"></i>
                                 <span class="link-text">Contact</span>
                             </a>
                         </li>
                     </ul>
                </div>
          </nav>
           <ul class="social-icons list-inline">
               <li v-for="social_media in social_medias" :key="social_media.id"><a :href="social_media.url" target="blank"><i :class="social_media.icon"></i></a></li>
            </ul>
            <!--<div class="corner-circle">
                <a href="javascript:void(0);" class="nav-close"><span></span><span></span></a>
            </div>-->
       </div>
     </div>          
</template>
<script>

 
export default {
    name:'TopBar',
    computed:{
        showRoute(){
            return this.$router.currentRoute.name=="Home"
        }
    },
    mounted(){
        $(document).ready(function(){
               $(".nav-icon").click(function(){
                   $('.full-nav').addClass("open");
              })
                $(".nav-close").click(function(){
                   $('.full-nav').removeClass("open");
               })
        })
           $(window).scroll(function(){
                   var sc=$(window).scrollTop();
                   if(sc>=100){
                       $(".nav").addClass("sticky");
                   }
                   else if($(".nav").hasClass("sticky")){
                       $(".nav").removeClass("sticky")
                   }
               })

      

    },
    methods:{
     
    }
}
</script>
<style scoped>
.nav{
    display:flex;
    justify-content:center;
   padding-top:12px;
   padding-bottom:0;
    transition:all 0.3s;
    background-color:white;
    z-index:999999;
    position:absolute;
    top:0px;
    width:100%;
    
}
.nav ul{
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    height:100%;
    margin-right:55px;
}
.nav ul li{
    list-style:none;
    display:flex;
    height:100%;
    padding-right:10px;
   
}
.nav ul li a:hover{
   transition:all 0.4s;
    
  
    color:#F44336;;
}
.nav ul li a{
    font-family:'Roboto condensed',sans-serif;
    font-size:1.1em;
    color:#333;
    padding:0.25rem 0;
    margin:10px 1.8rem;
    text-transform:uppercase;
    text-decoration:none;
    transition:all 0.4s ease-in-out;
}
.mylogo{
    width:100px;
    height:30px;
    /*margin:0 0.4em; */
}
.nav ul li .black{
    display:none;
}
.nav-icon{
    position:absolute;
    top:20px;
    right:30px;
    padding:5px;
    width:40px;
    z-index:1;
    cursor:pointer;
}
.nav-icon span{
    background:#333;
    width:30px;
    height:1px;
    display:block;
    transition:300ms linear all;
}
.nav-icon span:nth-child(1),.nav-icon span:nth-child(3){
    width:20px;
    margin:0 auto;
}
.nav-icon span:nth-child(2){
    margin:5px 0;
    width:32px;
}
.nav-icon:hover span:nth-child(1),
.nav-icon:hover span:nth-child(3){
    width:30px;
 
}
.nav.sticky{
    width:100%;
    position:fixed;
    background-image:linear-gradient(25deg,#A64EAE,#4683B7);
    box-shadow:0 10px 50px 10px rgba(0,0,0,0,1);
    animation-name:animationFade;
    animation-duration:1s;
    animation-fill-mode:both;
    z-index:999999;
    
}

/*responsive css*/
@media only screen and (min-width :0px) and (max-width: 1214px){
    .nav ul li{
        display:none;
    }
    .nav ul li.logo__brand{
        display:block;
    }
    .nav ul li .logo__brand_2{
        display:none;
    }
    .nav-icon{
        display:block;
    }
}
@media only screen and (min-width :1215px){
   
    .nav-icon{
        display:none;
    }
}
@media only screen and (min-width :1214px) and (max-width: 1321px){
  
    .nav-icon{
       right:5px;
    }
    .mylogo{
        width:90px;
        height:30px;
        /*margin:0 0.4em; */
   }
}



.full-nav{
    background-image:linear-gradient(25deg,#A64EAE,#4683B7);
    color:#18191d;
    position:fixed;
    left:0;
    top:0;
    height:100%;
    width:100%;
    padding:3.75rem;
    z-index:999999;
    overflow-x:hidden;
    visibility: hidden;
    opacity:0;
    transform:translateY(-100px);
    transition:all .4s ease-in-out;
}
.full-nav.open{
    opacity:1;
    visibility :visible;
    transform:translateY(0);
     transition:all .4s ease-in-out;
     z-index:999999;
}
.full-nav .logo{
    display:flex;
    justify-content:center;
    padding:3rem;
}
.full-nav .nav2{
  display:flex;
  justify-content:center;

}

.full-nav .nav2 ul{
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    max-width:700px;
}
.full-nav .nav2 ul li{
    display:flex;
    flex:50%;
    background-color:#f5f5f5;
    padding:1rem;
    border-bottom:2px solid black;
    border-right:2px solid black;
    transition:all 0.5s;
}
.full-nav .nav2 ul li a{
font-family:'Roboto Condensed',sans-serif;
font-size:1.4rem;
color:#18191d;
}
.full-nav .nav2 ul li a span{
    color:#b9b9b9;
}

.full-nav .nav2 ul li:hover{
    background-color:#00D320;
    transition:all 0.5s ease-in-out;
    cursor:pointer;
}
.full-nav .nav2 ul li:hover a,.full-nav .nav2 ul li:hover a span{
    color:white;
}
/*  NAV 3  */

.full-nav .nav3 .menu{
     z-index:99999999;
    margin-top:20%;
    margin-left:20%;
    display:flex;
    justify-content: center;
  
}
@media only screen and (min-width: 1284px){
  .full-nav .nav3 .menu{
    margin-top:10%;
    margin-left:3%;
    display:flex;
    justify-content: center;
  
}
}
@media only screen and (max-width: 1192px){
  .bx-wrapper .bx-pager{left:70px; top:420px;}
}
@media only screen and (max-width: 1086px){
  .bx-wrapper .bx-pager{left:-20px; top:420px;}
}
@media only screen and (max-width: 990px){
  .bx-wrapper .bx-pager{left:70px; top:420px;}
  .logo__brand{
      height:50px;
  }

}
@media only screen and (max-width: 959px){
  .full-nav .nav3 .menu{
    margin-top:20%;
    margin-left:7%;
    display:flex;
    justify-content: center;
  
}
.nav{
    height:60px;
}
.nav.sticky{
    height:60px;
}

.nav.sticky .logo__brand{
    margin-top:-21px;
}
}
@media only screen and (max-width:781px){
   .full-nav .nav3 .menu{
    margin-top:20%;
    margin-left:6%;
    display:flex;
    justify-content: center;
  
}
}
@media only screen and (max-width:651px){
   .full-nav .nav3 .menu{
    margin-top:20%;
    margin-left:4%;
    display:flex;
    justify-content: center;
  
}
}
@media only screen and (max-width:576px){
     .full-nav .nav3 .menu{
    margin-top:20%;
    margin-left:7%;
    display:flex;
    justify-content: center;
  
}
}
@media only screen and (max-width:541px){
  .bx-wrapper .bx-pager{display:none;}
}
@media only screen and (max-width:700px){
       .full-nav .nav3 .menu{
    margin-top:20%;
    margin-left:15%;
    display:flex;
    justify-content: center;
  
}}
@media only screen and (max-width:464px){
       .full-nav .nav3 .menu{
    margin-top:20%;
    margin-left:15%;
    display:flex;
    justify-content: center;
  
}}
@media only screen and (max-width:402px){
       .full-nav .nav3 .menu{
    margin-top:20%;
    margin-left:30%;
    display:flex;
    justify-content: center;
  
}
}
@media only screen and (max-width:335px){
       .full-nav .nav3 .menu{
    margin-top:20%;
    margin-left:20%;
    display:flex;
    justify-content: center;
  
}
}
.full-nav .nav3 .menu ul {
    list-style:none;
    display:inline-block;
}
.full-nav .nav3 .menu ul li{
    float:left;
    width:124px;
    height:140px;
    border-left:1px solid #e3e3e3;
    background-color:white;
    transition:background-color 0.2s linear 0s;
}
.full-nav .nav3 .menu ul li:last-child{
    border-right:1px solid #e3e3e3;
}
.full-nav .nav3 .menu ul li a{
   display:table;
   width:100%;
   height:100%;
   position:relative;
   text-align:center;
   text-decoration:none;
}
.full-nav .nav3 .menu  a i{
    display:block;
    vertical-align:middle;
    color:#333;
    font-size:23px;
   transition:all 0.2s linear 0s;
    padding:44px 0 10px ;
}
.full-nav .nav3 .menu  a i:before{
    border:2px solid #333;
    border-radius:500px;
    width:41px;
    display:inline-block;
    height:41px;
    line-height:37px;
    transition:color 0.2s linear 0s,
               font-size 0.2s linear 0s,
               border-color 0.2s linear 0.2s,
               height 0.2s linear 0s,
               line-height 0.2s linear 0s;
}
.full-nav .nav3 .menu  a .link-text{
    right:45px;
    color:#333;
    font-size:14px;
    text-transform:uppercase;
    transition:all 0.2s linear 0s;
}
.full-nav .nav3 .menu  ul li:hover{
   background-color:#00D320;;;
    border-color:white;
}
.full-nav .nav3 .menu  ul li:hover + li{
    border-color:black;
}
.full-nav .nav3 .menu  ul li:hover + li:last-child{
    border-right-color:#e3e3e3;
}
.full-nav .nav3 .menu  ul li:hover .link-text{
    opacity:0;
}
.full-nav .nav3 .menu  ul li:hover i{
    color:white;
    font-size:43px;
}

.full-nav .nav3 .menu  ul li:hover i:before{
    border-color:transparent;
    border-radius:500px;
  
    line-height:40px;
    transition:color 0.2s linear 0s,
               font-size 0.2s linear 0s,
               border-color 0.2s linear 0.2s,
               height 0.2s linear 0s,
               line-height 0.2s linear 0s;
}
.nav3 .menu .clear:after{
    content:"";
    display:block;
    clear:both;
}


.corner-circle{
    position:absolute;
    top:0;
    right:0;
    width:120px;
    height:120px;
    background-color:white;
    border-radius:0 0 0 120px;
    z-index:2;
}
.nav-close{
    display:block;
    width:30px;
    height:30px;
    position:absolute;
    top:30px;
    right:30px;
}
.nav-close span{
    background:#18191d;
    width:30px;
    height:1px;
    display:block;
    position:absolute;
    top:14px;
}
.nav-close span:nth-child(1){
    transform:rotate(45deg);
}
.nav-close span:nth-child(2){
    transform:rotate(-45deg);
}
@keyframes animationFade{
    from{
        opacity:0;
        -webkit-transform:translate3d(0,-100%,0);
        transform:translate3d(0,-100%,0);
    }
    to{
        opacity:1;
        transform:none;
        -webkit-transform:none;
    }
}
.nav.sticky a{
    
    color:white!important;
}
.nav.sticky ul li.logo .black{
    display:inline-block;
}
.nav.sticky ul li .logo .white{
    display:none;
}
.nav.sticky .nav-icon span{
    background:#18191d;
}

.social-icons a{
    color:white;
    border:5px solid white;
    width:50px;
    height:50px;
    line-height:40px;
    font-size:20px;
    display:inherit;
    text-align:center;
    border-radius:50px;
    transition:all 1s ease;
    margin-top:10px;
}
.social-icons a:hover i{
    transition:all 0.4s ease-in-out;
    color:white;
    margin-top:-10px;
    border-color:#000;
} 
.social-icons a:hover {
    color:white;
    margin-top:-10px;
    border-color:#000;
} 
ul.social-icons.list-inline{
   text-align:center;
   margin-top:22px;
}
.list-inline >li{
  display:inline-block;
 padding-right:5px;
 padding-left:5px;
}
.full-nav .nav3 .menu .social-icons a:hover {
background-color:#00D320;
    transition:all 0.5s ease-in-out;
}
@media only screen and  (max-width: 1214px) {
     .mylogo{
        width:90px;
        height:30px;
        /*margin:0 0.4em; */
   }
  
   .nav{
    display:flex;
    justify-content:center;
   padding-top:0x;
   padding-bottom:0px;
    transition:all 0.3s;
    background-color:white;
    z-index:9999;
    position:absolute;
    top:0px;
    width:100%;
    
}


}
@media only screen and  (max-width: 950px){
    .nav.sticky .logo__brand{
          position:relative;
          left:20px;
     }
      .nav .logo__brand{
          position:relative;
          left:20px;
     }
}







</style>