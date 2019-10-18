<template>
    <footer>
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-xs-12 segment-one">
                        <h3>SAM K TRAVEL & TOUR</h3>
                        <p>
                              We love travelling.<br>We love visiting place in Algeria and so many places all around the world.<br/>Stay here with us,see our awesome gallery,videos and events!
                        </p>
                    </div>
                    <div class="col-lg-3 col-md-6 col-xs-12 segment-two">
                         <h2>Useful links</h2>
                         <ul>
                            <li><i class="icon-ios-arrow-right"></i><a href="/">Home</a></li>
                            <li><i class="icon-ios-arrow-right"></i><router-link to="/gallery" >Gallery</router-link></li>
                            <li><i class="icon-ios-arrow-right"></i><router-link to="/videos">Videos</router-link></li>
                            <li v-if="showRoute"><i class="icon-ios-arrow-right"></i><a href="#events" v-smooth-scroll>Events</a></li>
                            <li v-if="showRoute"> <i class="icon-ios-arrow-right"></i><a href="#portfolio" v-smooth-scroll>Portfolio</a></li>
                             <li v-if="showRoute"><i class="icon-ios-arrow-right"></i><a href="#parteners" v-smooth-scroll>Partners</a></li>
                             <li v-if="showRoute"><i class="icon-ios-arrow-right"></i><router-link to="/about">About</router-link></li>
                            <li v-if="showRoute"><i class="icon-ios-arrow-right"></i><a href="#contact" v-smooth-scroll>Contact</a></li>

                         </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 col-xs-12 segment-three">
                        <h2>Follow us</h2>
                        <a href="#" class="twitter" ><i class="fa fa-twitter"></i></a>
                        <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                        <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                        <a href="#" class="youtube"><i class="fa fa-youtube"></i></a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-xs-12 segment-four">
                        <h2>Our newsletter</h2>
                        <p>In order to inform you in time for all our future trips,traveelling,SAM K Travel &Tour would like you to subscibe to our newsletter</p>
                        <form action="" method="post">
                            <input type="email" name="email" placeholder="Your email adress">
                            <input type="submit" value="subscribe">
                         </form>
                    </div>
                </div>
            </div>
        </div>
        <p class="copyright footer-bottom-text">Copyright &copy;-SAM K Travel & Tour-All right reserved</p>
     </footer>
</template>
<script>
export default {
    name:'Footer',
    computed:{
         showRoute(){
            return this.$router.currentRoute.name=="Home"
        }
    }
     ,
    mounted(){

    }
}
</script>
<style scoped>
p{
    color:whitesmoke;
    line-height:25px;
}
h2,h3{
    color:#fff;
}
h2{
    font-size:18px;
}
.mylogo{
    width:250px;
    height:100px;
}
.footer-top{
      background-image:linear-gradient(25deg,#A64EAE,#4683B7);

    padding:80px 0;
}
.segment-one h3{
    font-family:'Roboto Condensed';
    color:#00D320;
    letter-spacing:3px;
    margin:10px 0;
}
.segment-two h2{
    font-family:'Oswald';
    text-transform:uppercase;

}
.segment-two h2:before{
    content:'|';
    padding-right:10px;
  color:#00D320;
}
.segment-two ul{
    margin:0;
    padding:0;
    list-style:none;
}
.segment-two ul li{
    border-bottom:1px solid rgba(255,255,255,0.3);
    line-height:40px;
}
.segment-two ul li:hover{
    border-bottom:1px solid #00D320;
    line-height:40px;
    
}
.segment-two ul li a{
    color:white;
    text-decoration:none;
}
.segment-two ul li a:hover{
    color:#00D320;
    text-decoration:none;
}
.segment-three h2{
    color:#fff;
    font-family: 'Oswald';
    text-transform:uppercase;
}
.segment-three h2:before{
   content:'|';
   color:#00D320;
   padding-right:10px;
}
.segment-three a{
    background: white;
    width:40px;
    height:40px;
    display:inline-block;
    border-radius:50%;
}
.segment-three a:hover{
    color: #00D320!important;
    
}
.segment-three a i{
    font-size:20px;
    color:black;
    padding:10px 12px;
}
.segment-three a i:hover{
   color:#00D320;
}
.segment-four h2{
    color:#fff;
    font-family:'Oswald';
    text-transform:uppercase;
}
.segment-four h2:before{
   content:'|';
   color:#00D320;
   padding-right:10px;
}
.segment-four form input[type='submit']{
    background:#00D320;
    border-radius:25px;
    padding:10px 15px;
    margin-left:-5px;
    color:#fff;
    text-transform:uppercase;
    margin-top:15px;
}
.segment-four form input[type='email']{
    background:white;
    border:none;
    border-radius:25px;
    padding:5px 15px;
    margin-left:-5px;
    color:black;
    
}
.footer-bottom-text{
    text-align:center;
    background:#000;
    line-height:75px;
}
</style>