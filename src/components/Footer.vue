<template>
    <footer>
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-xs-12 segment-one">
                        <h3>SAM K TRAVEL & TOUR</h3>
                        <p>
                              We are passionate about travelling and exploring new places.<br>Why don't you try Sam K T&T and have amazing experiences and stories to tell.
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
                         <a v-for="social_media in social_medias" :key="social_media.id" :href="social_media.url" target="blank"><i :class="social_media.icon"></i></a>
                    </div>
                    <div class="col-lg-3 col-md-6 col-xs-12 segment-four">
                        <h2>Our newsletter</h2>
                        <p>In order to be informed in time concerning all our future trips and travels Sam K TRAVEL AND Tour would like you to subscribe to our newsletter</p>
                        <form @submit.prevent="storeEmail">
                            <input type="email" name="email" placeholder="Your email adress" v-model="form.email" :class="{ 'is-invalid ': form.errors.has('email') }">
                            <has-error :form="form" field="email"></has-error>
                            <input type="submit" value="subscribe">
                         </form>

                          <notifications group="new_email" position="bottom right"/>
                    </div>
                </div>
            </div>
        </div>
        <p class="copyright footer-bottom-text">Copyright &copy;-SAM K Travel & Tour-All right reserved</p>
     </footer>
</template>
<script>
import {Form} from 'vform'
export default {
    name:'Footer',
    computed:{
         showRoute(){
            return this.$router.currentRoute.name=="Home"
        }
    },
    data(){
        return {
             form:new Form({
                 email:''
             })
        }
    }
     ,
    mounted(){

    },
    methods:{
         storeEmail(){
               this.form.post(backend_endpoint+'api/newsletters/storeEmail',this.form).then(data=>{
                      this.$notify({
                        group: 'new_email',
                        type: 'success',
                        text: 'Thank you for registering to our newsletter.You will now be informed for each new event',
                        duration: 2500,
                    
                     })
                     this.form.email=""
               }).catch(error=>{
                   console.log(error)
               })
         }
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