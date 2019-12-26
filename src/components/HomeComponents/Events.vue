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
    <section class="events" id="events" v-if="past.length>0 || today.length>0 || upcoming.length>0">
         <div class="container text-center">
            <h1 class="section-title">Events</h1>
        </div>
           <div class="container" v-if="past && past.length>0">
                   <div class="row">
                     <div class="col-sm-12">
                          <div class="section_title">            
                              <h2>past events</h2>
                          </div>
                     </div>
                  </div>
                  <div class="row" >
                      <div class="news-active" style="width:100%;">
                          <carousel :perPageCustom="[[1199,3],[920,3],[420,2],[0,1]]" :mouse-drag="true" :autoplay="true" >
                            <slide  v-for="event in past" :key="event.id">
                               <div class="col-md-12"  >
                                 <div class="latest-news-wrap" >
                                   <div class="news-img">
                                       <img :src="`${backendEndpoint()+'storage/'+event.source}`" class="event-img-size  img-responsive">
                                       <div class="deat" style="float:left">
                                           <span>{{event.day}}</span>
                                           <span>{{event.month}}</span>       
                                        </div>
                                    </div>
                                    <div class="news-content">
                                        <h4 style="float:right">{{event.name.replace(/^./, event.name[0].toUpperCase())}}</h4>
                                        <p style="clear:both">
                                            <strong class="price"> {{event.price}} DA</strong> <br><br>
                                           {{event.description |  truncate(100)}}
                                        </p><br>
                                        <a href="#"  @click.prevent="openModal(event)">Read more</a>
                                    </div>
                               </div>
                          </div>
                            </slide>
                         </carousel>
                      </div>
                  </div>
            </div>
           <div class="container" v-if="today&&today.length>0">
                 <div class="row">
                     <div class="col-sm-12">
                          <div class="section_title">
                              
                              <h2>Today's events</h2>
                          </div>
                     </div>
                  </div>
                  <div class="row">
                       <div class="news-active" style="width:100%;">
                          <carousel :perPageCustom="[[1199,3],[920,3],[420,2],[0,1]]" :mouse-drag="true" :autoplay="true" >
                            <slide  v-for="event in today" :key="event.id">
                               <div class="col-md-12"  >
                                 <div class="latest-news-wrap" >
                                   <div class="news-img">
                                       <img :src="`${backendEndpoint()+'storage/'+event.source}`" class="event-img-size  img-responsive">
                                       <div class="deat" style="float:left">
                                           <span>{{event.day}}</span>
                                           <span>{{event.month}}</span>       
                                        </div>
                                    </div>
                                    <div class="news-content">
                                        <h4 style="float:right">{{event.name.replace(/^./, event.name[0].toUpperCase())}}</h4>
                                        <p style="clear:both">
                                            <strong class="price"> {{event.price}} DA</strong> <br><br>
                                           {{event.description |  truncate(100)}}
                                        </p><br>
                                        <a href="#"  @click.prevent="openModal(event)">Read more</a>
                                    </div>
                               </div>
                          </div>
                            </slide>
                         </carousel>
                      </div>
                  </div>
            </div>
 

            <div class="container" v-if="upcoming&&upcoming.length>0">
                 <div class="row">
                     <div class="col-sm-12">
                          <div class="section_title">
                              
                              <h2>Upcoming events</h2>
                          </div>
                     </div>
                  </div>
                  <div class="row">
                      <div class="news-active" style="width:100%;">
                          <carousel :perPageCustom="[[1199,3],[920,3],[420,2],[0,1]]"  :mouse-drag="true" :autoplay="true" >
                            <slide  v-for="event in upcoming" :key="event.id">
                               <div class="col-md-4">
                                 <div class="latest-news-wrap" >
                                   <div class="news-img">
                                       <img :src="`${backendEndpoint()+'storage/'+event.source}`" class="event-img-size ">
                                       <div class="deat" style="float:left">
                                           <span>{{event.day}}</span>
                                           <span>{{event.month}}</span>       
                                        </div>
                                    </div>
                                    <div class="news-content">
                                        <h4 style="float:right">{{event.name.replace(/^./, event.name[0].toUpperCase())}}</h4>
                                        <p style="clear:both">
                                            <strong class="price"> {{event.price}} DA</strong> <br><br>
                                           {{event.description |  truncate(100)}}
                                        </p><br>
                                        <a href="#"  @click.prevent="openModal(event)">Read more</a>
                          </div>
                               </div>
                          </div>
                            </slide>
                         </carousel>
                      </div>
                  </div>
            </div>

           <sweet-modal ref='modal'>
            <div class="dialog" v-if="crtSelectedItem">
                <br/>
                <h1 class="">{{crtSelectedItem.name}}</h1>
                <img :src="`${backendEndpoint()+'storage/'+crtSelectedItem.source}`" class="img-responsive" :loop="true"/>
                <p class="lead">
                    {{crtSelectedItem.description}}
                </p>

               <strong class="text-danger">To secure a spot for this trip,kindly leave a message for us with your details in the contact section</strong>
               <a style="color:white" class="btn btn-warning" @click="closeModal" href="#contact" v-smooth-scroll>Contact</a>
            </div>
           </sweet-modal>

    </section>
      </u-animate>
  </u-animate-container>
</template>
<script>
import {UAnimateContainer, UAnimate} from 'vue-wow'
import {Carousel,Slide} from 'vue-carousel'
import Price from './Price'
import {mapState} from 'vuex'
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
export default {
    name:'Events',
    components:{UAnimateContainer, UAnimate,Carousel,Slide,SweetModal, SweetModalTab},
     data: () => ({ crtSelectedItem: null }),
    computed:{
        ...mapState([
            'upcoming',
            'today',
            'past',
            'events'
        ])
    },
    mounted(){
         console.log(this.$router.currentRoute)
          this.loadEvents() 
          Echo.channel('my-channel').listen('.event-crud',(data)=>{
            this.loadEvents()
        })
    },
    methods:{
        loadEvents(){
            this.$store.dispatch('loadEvents')
        },
          openModal (item) {
            this.crtSelectedItem = { ...item };
            this.$refs.modal.open();
        },
        closeModal(){
            this.$refs.modal.close();
        }
    }
}
</script>
<style scoped>
.event-img-size {
    width:100%;
    height:250px;
}
.section_title .section_subtitle{
    color:#ff5252!important;
}
h4{
    color:#34af23;
}
.dialog h1{
     color:#34af23;
}
.dialog p{
     margin-top:15px;
     font-style:italic;
     text-align:justify;
     text-justify:inter-word;
}
.section_title h2,.price{
    color:transparent;
    background-image:linear-gradient(25deg,#A64EAE,#4683B7) ;
    background-clip:text;
    -webkit-background-clip:text;
}

  .events{
      margin-top:40px;
      margin-bottom:40px;
      width:100vw;
      margin-right:30px;
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