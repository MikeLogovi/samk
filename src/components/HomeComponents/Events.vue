<template>
<u-animate-container>
    <u-animate
      name="rotateInUpLeft"
      delay="1s"
      duration="2s"
      :iteration="1"
      :offset="0"
      animateClass="animated"
      :begin="false" 
    >
    <section class="events" id="events">
         <div class="container text-center">
            <h1 class="section-title">Events</h1>
        </div>
   
            <div class="container">
                 <div class="row">
                     <div class="col-sm-12">
                          <div class="section_title">
                              <div class="section_subtitle">
                                  Events
                              </div>
                              <h2>Upcoming events</h2>
                          </div>
                     </div>
                  </div>
                  <div class="row">
                      <div class="news-active">
                          <div class="col-md-4">
                               <div class="latest-news-wrap">
                                   <div class="news-img">
                                       <img src="/static/images/img9.JPG" class="img-responsive">
                                       <div class="deat">
                                           <span>10</span>
                                           <span>feb</span>
                                        </div>
                                    </div>
                                    <div class="news-content">
                                        <h2>Event1</h2>
                                        
                                        <p>
                                            Who is such a man as does
                                             not want to get success
                                             in their life is not meant for work only
                                        </p><br>
                                        <a href="#">Read more</a>
                                    </div>
                               </div>
                          </div>

                           <div class="col-md-4">
                               <div class="latest-news-wrap">
                                   <div class="news-img">
                                       <img src="/static/images/img10.JPG" class="img-responsive">
                                       <div class="deat">
                                           <span>10</span>
                                           <span>feb</span>
                                        </div>
                                    </div>
                                    <div class="news-content">
                                        <i class="fa fa-facebook"></i>
                                        <i class="fa fa-twitter"></i>
                                        <i class="fa fa-linkedin"></i>
                                        <i class="fa fa-youtube"></i>
                                        <i class="fa fa-whatsapp"></i>
                                        
                                        <p>
                                            Who is such a man as does
                                             not want to get success
                                             in their life is not meant for work only
                                        </p><br>
                                        <a href="">Read more</a>
                                    </div>
                               </div>
                          </div>

                         <div class="col-md-4">
                               <div class="latest-news-wrap">
                                   <div class="news-img">
                                       <img src="/static/images/img1.JPG" class="img-responsive">
                                       <div class="deat">
                                           <span>10</span>
                                           <span>feb</span>
                                        </div>
                                    </div>
                                    <div class="news-content">
                                        <i class="fa fa-facebook"></i>
                                        <i class="fa fa-twitter"></i>
                                        <i class="fa fa-linkedin"></i>
                                        <i class="fa fa-youtube"></i>
                                        <i class="fa fa-whatsapp"></i>
                                        
                                        <p>
                                            Who is such a man as does
                                             not want to get success
                                             in their life is not meant for work only
                                        </p><br>
                                        <a href="">Read more</a>
                                    </div>
                               </div>
                          </div>

                      </div>
                  </div>
            </div>
    </section>
      </u-animate>
  </u-animate-container>
</template>
<script>
import {UAnimateContainer, UAnimate} from 'vue-wow'
import {mapState} from 'vuex'
export default {
    name:'Events',
    components:{UAnimateContainer, UAnimate},
    computed:{
        ...mapState([
            'events'
        ])
    },
    mounted(){
          //this.loadEvents() 
          Echo.channel('event_crud').listen('EventCrud',(data)=>{
            this.loadEvents()
        })
    },
    methods:{
        loadEvents(){
            this.$store.dispatch('loadEvents')
        }
    }
}
</script>
<style scoped>
.section_title .section_subtitle{
    color:#ff5252!important;
}
.section_title h2{
    color:transparent;
    background-image:linear-gradient(25deg,#A64EAE,#4683B7) ;
    background-clip:text;
    -webkit-background-clip:text;
}
  .events{
      margin-top:40px;
      margin-bottom:40px;
  }
  .latest-news-wrap{
      box-shadow:0px 3px 10px rgba(0,0,0,0.1);
  }
  .news-img{
      position:relative;
  }
  .news-img:before{
       position:absolute;
       left:0;
       top:0;
       width:100%;
       height:100%;
       background:#000;
       content:"";
       opacity:0;
       transform:scale(.8);
       transition:all 0.5s;
  };
  .latest-news-wrap:hover  .news-img:before{
      opacity:0.5;
      transform: scale(1);
  }
  .deat{
      background:linear-gradient(25deg,#A64EAE,#4683B7) ;
      height:70px;
      left:0;
      position:absolute;
      text-align:center;
      top:0;
      width:70px;
      padding:10px;
  }
  .deat span{
      display:block;
      color:white;
      font-weight:700;
      font-size:16px;

  }
  .news-content{
      padding:20px;
      margin-left:3px;
  }
  .news-content i{
    display:inline-block;
    font-size:18px;
  }
  .news-content .fa{
      padding:10px 10px;
      cursor:pointer;
  }
  .news-content .fa-facebook{
      color:#0084b4;
  }
  .news-content .fa-twitter{
      color:#0084b4;
  }
  .news-content .fa-linkedin{
      color:#0077b5;
  }
  .news-content .fa-youtube{
      color:red;
  }
   .news-content .fa-whatsapp{
      color:#34af23;
  }
  .news-content p{
      margin-bottom:15px;
      text-align:justify;
      margin-top: 20px;
  }
  .news-content a{
      text-align:center;
      display:inline-block;
      width:50%;
      height:35px;
      font-size:14px;
      padding:8px 15px;
      background-color:#00D320;
      color:white;
      transition:all 0.2s ease-in;
      border-radius:40px;
  }
  .news-content a:hover{
      opacity:0.8;
      text-decoration:none;
  }
</style>