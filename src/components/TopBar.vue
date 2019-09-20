<template>
 <nav class="nav">
                   <ul>
                        <li class='navLi'><router-link to="/">Home</router-link></li>
                        <li class='navLi'><router-link to="/gallery" >Gallery</router-link></li>
                        <li class='navLi'><router-link to="/videos">Videos</router-link></li>
                        <li class='navLi'><a href="#clients"  v-smooth-scroll="{offset:-100}">Clients</a></li>
                        <li class='navLi'><router-link to="/about">About</router-link></li>
                        <li ><a href="#"><img class="mylogo white" src="/static/logo3.png"/><img class="mylogo black" src="/static/logo3.png"/></a></li>
                        <li class='navLi'><a href="#events"  v-smooth-scroll="{offset:-100}">Events</a></li>
                        <li class='navLi'><a href="#portfolio" v-smooth-scroll="{offset:-100}">Portfolio</a></li>
                        <li class='navLi'><a href="#parteners"  v-smooth-scroll="{offset:-100}">Parteners</a></li>
                        <li class='navLi'><a href="#contact"  v-smooth-scroll="{offset:-100}">Contact</a></li>
                   </ul>
                    <a class="nav-icon" href="javascript:void(0);"><span></span><span></span><span></span></a>
               </nav>
</template>
<script>

 
export default {
    name:'TopBar',
    mounted(){
           $(window).scroll(function(){
                   var sc=$(window).scrollTop();
                   if(sc>=100){
                       $(".nav").addClass("sticky");
                   }
                   else if($(".nav").hasClass("sticky")){
                       $(".nav").removeClass("sticky")
                   }
               })
    }
}
</script>
<style scoped>
.nav{
    display:flex;
    justify-content:center;
   padding-top:12px;
   padding-bottom:3px;
    transition:all 0.3s;
    background-color:white;
    z-index:9999;
    position:absolute;
    top:0px;
    width:100%;
}
.nav ul{
    display:flex;
    align-items:center;
    flex-wrap:wrap;
}
.nav ul li{
    list-style:none;
    display:flex;
    height:100%;
    margin-right:10px;
   
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
    height:50px;
    /*margin:0 0.4em; */
}
.nav ul li .black{
    display:none;
}
.nav-icon{
    position:absolute;
    top:35px;
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
}
</style>