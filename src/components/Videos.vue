<template>
<div>
    <TopBar/>
    <br/><br/><br>
    <section id="videos" class="videos">
      <br>
         <div class="container text-center">
              <h1 class="section-title">Videos</h1>
         </div>
           <sweet-modal ref='modal'>
             <div id="dialog" v-if="crtSelectedItem"
                  style="padding-bottom:0%; position:relative; display:block; width: 100%">
                   <iframe width="100%" height="100%" id="myvid"  :src="crtSelectedItem.source" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                   <a class="btn btn-success" style="color:white" @click.prevent="closeModal" href="#">Stop video</a>
            </div>
     
           </sweet-modal>
         <div class="container marketing">
             <div class="row featurette" v-for="video in videos" :key="video.id">
               <hr>
                  <div class="col-md-7">
                    <div class="video-text">
                      <h2 class="featurette-heading">{{video.title}}</h2>
                      <p class="video-description">{{video.description}}</p>
                    </div>
                  </div>
                  <div class="col-md-5 ">
                        <div class="video_area" :style="`background:url(${backendEndpoint()+'storage/'+video.brand_image}) no-repeat center center`">  
                             <div class="video_button">
                                 <a href="" @click.prevent="openModal(video)">
                                     <span class='profilepicture' ></span>
                                 </a>
                             </div>
                        </div>
                  </div>
                  <hr class="featurette-divider">
        </div> 
             
    </div>

    <hr class="featurette-divider">
     
    </section>
    <Footer/>
</div>
</template>
<script>
import TopBar from './TopBar'
import Footer from './Footer'
import {mapState} from 'vuex'
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
export default {
    components:{TopBar,Footer,SweetModal, SweetModalTab},
     computed:{
        ...mapState([
            'videos'
        ])
    },
     data: () => ({ crtSelectedItem: null }),
    mounted(){
          this.loadVideos() 
          Echo.channel('my-channel').listen('.video-crud',(data)=>{
            
            this.loadVideos()
        })
    },
    methods:{
        loadVideos(){
            this.$store.dispatch('loadVideos')
        },
        openModal (item) {
            this.crtSelectedItem = { ...item };
            this.$refs.modal.open();
        },
        closeModal(){
            var iframe= document.getElementById('myvid');<br/>
            iframe.src = iframe.src;<br/>
            this.$refs.modal.close();
        }
    }
}
</script>
<style scoped>

.video-description{
  text-align:justify;
  text-justify:inter-word;
}

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
    /*margin-top: 7rem;*/
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
.videos{
    position:relative;
}
.videos-content{
    margin-bottom:40px;
}
.videos-content:last-of-type{
    margin-bottom:0;
}
.videos-content h3{
    color:#333;
    font-size:18px;
    font-weight:500px;
    margin-bottom:20px;
}
.videos-content p{
    font-size:16px;
    color:#888;
    line-height:27px;
    margin-bottom:0px;
}
.video_area{
    position:relative;
    width:500px;
    height:300px;
    background-size:cover;
}

.profilepicture{
    position:absolute;
    border-radius:50%;
    border:7px solid #ededed;
    padding:0px;
    width:90px;
    height:90px;
    background:white;
    color:#00d320;;
    margin:auto;
    top:-1px;
    left:0;
    bottom:0;
    right:0;
    display:inline-block;
    text-align:center;
    z-index:888;
   background:url(../../static/images/play.png) no-repeat center center;
    background-size:cover!important;
    transition:all 0.4s ease-in-out;
}
.profilepicture::before{
    content:"";
    position:absolute;
    font-size:24px;
    left:0;
    right:0;
    font-family:'Fredoka One';
    width:100px;
    height:100px;
    text-align:center;
    margin:0 auto;
    top:26%;
}

@media only screen and (min-width: 200px) and (max-width: 600px){
  .video_area{
    background-size:cover!important;
    width:100%;
    height:200px;    
  }
  .profilepicture{
    width:50px;
    height:50px;
  }
}

@media only screen and (min-width: 601px) and (max-width: 740px){

}

@media only screen and (min-width: 993px) and (max-width: 1239px){
  .video-text{
    
  }
}
@media only screen and (min-width: 741px) and (max-width: 1270px){
.video_area{
    background-size:cover!important;
    width:80%;
    height:200px;    
  }
  .profilepicture{
    width:50px;
    height:50px;
  }
}



.video-right-static{
    position: static;
}

.video_button{
    position:absolute;
    top:50%;
    z-index:33;
    left:40%;
}

.raisa-video-btn{
    padding-top:45px;
}
.raisa-video-btn{
    border-bottom:0px ;
    padding-bottom:0px;
    position:relative;
}
.raisa-video-btn button{
    display:inline-block;
    background-image:linear-gradient(25deg,#A64EAE,#4683B7);
    position:absolute;
    z-index:12;
    right:22px;
    padding:8px 40px;
    border-radius:0;
    color:white;
    border:0;
}
.modal-body{
    position:relative;
    flex:1 1 auto;
    padding:1rem;
    margin-top:35px;
}
.modal.show .modal.dialog{
    margin-top:60px;
}
.video-container{
     position:relative;
     padding-bottom:56.25%;
     padding-top:30px;
     height:0;
     overflow:hidden;
}
.video-container iframe{
    position:absolute;
    top:0;
    left:0;
    height:100%;
    width:100%;
}
@media (min-width: 768px){
 .modal-dialog{
     width:760px;
     padding:10px auto;
 }   
 .modal-content{
     position:relative;
     background-color:white;
     background-clip:padding-box;
     border:1px solid #999;
     border-radius:6px;
     outline:0;
     box-shadow:0 3px 9px rgba(0,0,0,0.5);
     margin-top:120px;
 }  

 @media only screen and (min-width: 200px) and (max-width: 479px){
   .positionning_elements{
        margin-right:10px;
        margin-bottom:0;
        padding-bottom:0;
   }
   
   .positionning_elements_left{
        margin-left:100px;
        margin-bottom:0;
        padding-bottom:0;
   }
   .positionning_elements_achievements{
        margin-right:-50px;
        margin-bottom:0;
        padding-bottom:0;
   }
   .push_down{
     margin-top:0px;
   }
   .responsive_position_logo{
     margin-top:30px;
     margin-left:0px;
    
   }
   #mission_img{
     margin-top:30px;
     margin-left:-60px
   }
   .responsive_ceo_img_position{
       margin-left:-5px;
       margin-top:10px;
   }
   .responsive_logo{
       width:100px;
       height:100px;
   }
   .positionning_img_right{
       margin-left:0px;
   }
   .responsive_ceo_img{
     width:125px;
     height:125px;
   }
  
}
@media only screen and (min-width: 480px) and (max-width: 500px){
  .positionning_elements{
        margin-right:100px;
        margin-bottom:0;
        padding-bottom:0;
   }
   
   .positionning_elements_left{
        margin-left:100px;
        margin-bottom:0;
        padding-bottom:0;
   }
   .positionning_elements_achievements{
        margin-right:-50px;
        margin-bottom:0;
        padding-bottom:0;
   }
   .push_down{
     margin-top:0px;
   }
   .responsive_position_logo{
     margin-top:30px;
     margin-left:0px;
    
   }
   #mission_img{
     margin-top:30px;
     margin-left:-60px
   }
   .responsive_ceo_img_position{
       margin-left:20px;
       margin-top:30px;
   }
   .responsive_logo{
       width:200px;
       height:200px;
   }
   .positionning_img_right{
       margin-left:0px;
   }
  
}
@media only screen and (min-width: 500px) and (max-width: 740px){
   .positionning_elements{
        margin-right:100px;
        margin-bottom:0;
        padding-bottom:0;
   }
   
   .positionning_elements_left{
        margin-left:100px;
        margin-bottom:0;
        padding-bottom:0;
   }
   .positionning_elements_achievements{
        margin-right:-50px;
        margin-bottom:0;
        padding-bottom:0;
   }
   .push_down{
     margin-top:0px;
   }
   .responsive_position_logo{
     margin-top:30px;
     margin-left:0px;
    
   }
   #mission_img{
     margin-top:30px;
     margin-left:-60px
   }
   .responsive_ceo_img_position{
       margin-left:20px;
       margin-top:30px;
   }
   .responsive_logo{
       width:200px;
       height:200px;
   }
   .positionning_img_right{
       margin-left:0px;
   }
}
@media only screen and (min-width: 741px) and (max-width: 1203px){
   .push_down{
     margin-top:0px;
   }
   .responsive_position_logo{
     margin-top:-40px;
    
   }
   .responsive_logo{
       width:200px;
       height:200px;
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
}
</style>