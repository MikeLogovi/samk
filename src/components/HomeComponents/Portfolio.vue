<template>
<u-animate-container>
    <u-animate
      name="fadeIn"
      delay="0s"
      duration="1s"
      :iteration="1"
      :offset="0"
      animateClass="animated"
      :begin="false" 
    >
      <section class="portfolio section-padding" id="portfolio">
         <div class="container text-center">
            <h1 class="section-title">Our portfolio</h1> 
        </div>
           <div class="container-fluid">
               <div class="row ">
                   <div class="filtering text-center col-sm-12 mb-30">
                           <div class="filter">
                                <span class="filters" v-bind:class="{ active: currentFilter === 'ALL' }" v-on:click="setFilter('ALL')">ALL</span>
                                 <span v-for="category in imageCategories" :key="category.id" class="filters" v-bind:class="{ active: currentFilter === category.id }" v-on:click="setFilter(category.id)">{{category.name.toUpperCase()}}</span>
                     </div>
                   </div>
                   <div class="clearfix"></div>
                   <br> <br> <br> <br>
                
           <transition name="slide-fade" >
         <div class="container-fluid gallery full-width " >
                    <div  v-for="project in projects.slice(0,11)" v-bind:key="project.title">
                        <div class="col-lg-3 col-md-6 col-xs-12 items no-padding"  v-if="currentFilter == project.portfolio_category_id|| currentFilter === 'ALL'" >
                            <div class="item-img">
                           
                                   <img class="image gallery-images" :src="`${backendEndpoint()+'storage/'+project.source}`" :key="project.id">
                        
                                 <div class="item-img-overlay"  @click="onClick(project.index)">
                                     <div class="overlay-info full-width">
                                         <p>Logo|Branding</p> 
                                         <h3>{{project.title}}</h3>
                                         <a  class="popimg" href="javascript:void(0);">
                                           <span class="icon"  @click="onClick(project.index)">
                                               <i class='fa fa-search-plus'></i>
                                           </span>
                                         </a>
                                     </div>
                                 </div>
                            </div>
                          </div>
                      </div>
                       <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>     
                   </div>
                </transition>    
                </div>
           </div>
       </section>

    </u-animate>
  </u-animate-container>
</template>
<script>
import VueGallerySlideshow from 'vue-gallery-slideshow'
import {UAnimateContainer, UAnimate} from 'vue-wow'
import FadeTransition from 'vue2-transitions'
import {mapState} from 'vuex'
export default {
    name:"Portfolio",
    components:{ VueGallerySlideshow, UAnimateContainer, UAnimate,FadeTransition},
     computed:{
        ...mapState([
            'imageCategories'
         
        ]),
         ...mapState([
          
            'images'
            
        ]),
         ...mapState([
            'projects'
        ])
    },
    mounted(){
          this.loadImages() 
          Echo.channel('my-channel').listen('.portfolio-category-crud',(data)=>{
            this.loadImages()
        })
         Echo.channel('my-channel').listen('.portfolio-image-crud',(data)=>{
            this.loadImages()
        })
    },
    data(){

        return{
                index: null,
                currentFilter: 'ALL',
              
                
                }
   
  },
   methods: {
    onClick(i) {
      this.index = i;
    },
    setFilter(filter) {
      this.currentFilter = filter;
    },
    loadImages(){
            this.$store.dispatch('loadImages')
     }
  },
  
}
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.portfolio,.container-fluid{
  background-color:#eee;
  margin-right:0;
  margin-left:0;
  padding-right:0;
  padding-left:0;
}
.portfolio .filtering .filter{
    display:inline-block;
    padding:29px 15px;
    box-shadow:0px 10px 30px rgba(0,0,0,0.3);
    border-radius:30px;
    background-color:white;
}
.portfolio .filtering span{
    margin:0 5px;
    padding: 8px 20px;
    font-size:12px;
    font-weight:bold;
    border-radius:30px;
    cursor:pointer;
    transition:all 0.5s ease-in-out;
}
.portfolio .section-title{
  font-family:'Fredoka One';
  color:#00D320;
  font-size:5vw!important;
  font-weight:bold;
  padding:15px 0;
  position:relative;
  margin-bottom:3vw;
}
.portfolio .section-title:before{
   content:"";
   background-color:#00D320;
   position:absolute;
   height:2px;
   width:33.3%;
   bottom:0;
   left:33.3%;
}
.portfolio .filtering span:hover{
    color:black;
    background-image:linear-gradient(linear,left top,right top,from(#1a237e),to(#2576fd));
    background:linear-gradient(to right,#1a237e,#2576fd);
}
.portfolio .filtering .active{
    background:#1a237e;
    background:linear-gradient(linear,left top,right top,from(#1a237e),to(#2576fd));
    background:linear-gradient(to right,#1a237e,#2576fd);
    color:white;
}
.portfolio .item-img{
    position:relative;
    margin-top:30px;
}
.portfolio .item-img:hover .item-img-overlay{
    visibility:visible;
    opacity:1;
    transform:scale(1,1);
}
.portfolio .item-img-overlay{
   background:rgba(0,0,0,0.5);
   bottom:0;
   left:0;
   opacity:0;
   padding:30px;
   position:absolute;
   right:0;
   text-align:center;
   top:0;
   transform:scale(0,0);
   transition:all 0.5s ease-in-out;
}
.portfolio .item-img-overlay .icon{
  position:absolute;
  right:30px;
  bottom:30px;
  width:30px;
  height:30px;
  line-height:40px;
  text-align:center;
  font-size:30px;
  color:#eee;
}
.portfolio .item-img-overlay p{
  color:#f2f2f2;
  font-weight:400;
  margin-bottom:0;
}
.portfolio .item-img-overlay h3{
  color:white;
  margin:0;
  font-size:25px;
  line-height:1.3;
  font-weight:500;
  letter-spacing:1px;
  border-bottom:3px solid white;
  display:inline-block;
  padding-bottom:5px;
  margin-bottom:20px;
}
.portfolio .gallery-images{
    width:100%;
    height:300px;
}
.portfolio .gallery{
  padding-left:0;
  padding-right:0;
  margin-bottom:0;
}
.portfolio .larg-padding{
  padding:0 15px;
}
.portfolio .larg-padding .item-img{
  border:10px solid white;
  margin-top:30px;
}
.portfolio .no-padding{
  padding:0;
}
.portfolio .no-padding .item-img{
  margin-top:0;
}
</style>