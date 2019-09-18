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
                                <span class="filters" v-bind:class="{ active: currentFilter === 'ART' }" v-on:click="setFilter('ART')">ART</span>
                                <span class="filters" v-bind:class="{ active: currentFilter === 'WORKSHOPS' }" v-on:click="setFilter('WORKSHOPS')">WORKSHOPS</span>
                                <span class="filters" v-bind:class="{ active: currentFilter === 'FUN' }" v-on:click="setFilter('DOODLES')">DOODLES</span>
                               
                            </div>
                   </div>
                   <div class="clearfix"></div>
                   <br> <br> <br> <br>
                
         <div class="gallery full-width" >
           
                       <div  v-for="project in projects" v-bind:key="project.title">
                        <div class="col-lg-3 col-md-6 items no-padding"  v-if="currentFilter === project.category || currentFilter === 'ALL'" >
                            <div class="item-img">
                           
                                   <img class="image gallery-images" :src="project.image" :key="project.id">
                        
                                 <div class="item-img-overlay"  @click="onClick(project.id)">
                                     <div class="overlay-info full-width">
                                         <p>Logo|Branding</p> 
                                         <h3>Creative Web design</h3>
                                         <a  class="popimg" href="javascript:void(0);">
                                           <span class="icon"  @click="onClick(project.id)">
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

export default {
    name:"Portfolio",
    components:{ VueGallerySlideshow, UAnimateContainer, UAnimate,FadeTransition},
    mounted(){

    },
    data(){
        return{
              images: [
                '/static/images/img1.JPG',
                '/static/images/img2.JPG',
                '/static/images/img3.JPG',
                '/static/images/img4.JPG',
                '/static/images/img5.JPG',
                '/static/images/img6.JPG',
                '/static/images/img7.JPG',
                '/static/images/img8.JPG',
                '/static/images/img9.JPG',
                '/static/images/img10.JPG',
                ],
                index: null,
                currentFilter: 'ALL',
                projects: [
                { title: "Artwork", image: '/static/images/img1.JPG', category: 'ART',id:0},
                { title: "Charcoal", image: '/static/images/img2.JPG', category: 'ART',id:1 },
                { title: "Sketching", image: '/static/images/img3.JPG', category: 'DOODLES' ,id:2},
                { title: "Acrillic", image: '/static/images/img4.JPG', category: 'WORKSHOPS',id:3 },
                { title: "Pencil", image: '/static/images/img5.JPG', category: 'DOODLES',id:4 },
                { title: "Pen", image:'/static/images/img6.JPG', category: 'ART',id:5},
                { title: "Inking", image:'/static/images/img7.JPG', category: 'WORKSHOPS',id:6 },
                { title: "mlboss", image:'/static/images/img12.JPG', category: 'WORKSHOPS',id:7 },
                
                ], 
                
                }
   
  },
   methods: {
    onClick(i) {
      this.index = i;
    },
    setFilter(filter) {
      this.currentFilter = filter;
    }
  },
  

}
</script>
<style scoped>
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