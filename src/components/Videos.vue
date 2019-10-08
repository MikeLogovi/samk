<template>
<div>
    <TopBar/>
    <br/><br/><br>
    <section id="videos" class="videos">
         <div class="container text-center">
              <h1 class="section-title">Videos</h1>
         </div>
         <div class="container marketing">
    


    

    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">First video</h2>
        <p class="lead">This is the first video.</p>
      </div>
       <div class="col-md-5 ">

                        <div class="video_area">
                                
                             <div class="video_button">
                                 <a href="" data-toggle="modal" data-target="#myModal">
                                     <span class='profilepicture'></span>
                                 </a>
                             </div>
                        </div>
                        <div class="modal fade"  id="myModal" tabindex="1" role="dialog">
                        <div class="modal-dialog modal-lg" role="document">
                              <div class="modal-content">
                                   <div class='modal-header raisa-video-btn'>
                                       <button type="button" class="btn btn-default" data-dismiss="modal">
                                           Close
                                        </button>
                                  </div>
                                  <div class="modal-body">
                                        <div class="video-container">
                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/bvVb5I2dhIM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                  </div>
                              </div>
                        </div>
                   </div>
        </div>
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
export default {
    components:{TopBar,Footer},
     computed:{
        ...mapState([
            'videos'
        ])
    },
    mounted(){
          //this.loadVideos() 
          Echo.channel('video_crud').listen('VideoCrud',(data)=>{
            this.loadVideos()
        })
    },
    methods:{
        loadVideos(){
            this.$store.dispatch('loadVideos')
        }
    }
}
</script>
<style scoped>



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
  
    background:url(../../static/images/img5.jpg) no-repeat center center;
    background-size:cover;
}
.author-video-section{
    
    border-radius:10px;
    background:url(../../static/images/img5.jpg) no-repeat center center;
    position:absolute;
    left:0;
    top:0;
    height:500px;
    width:50%;
    background-position:center;
}
.video-right-static{
    position: static;
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
    background-size:cover;
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
}
</style>