<!--<template lang="pug">
#app
  #header
   TopBar
  #content
    vue-masonry-gallery(ref="waterfall",:imgsArr="imgsArr", @scrollReachBottom="getData", @click="clickFn")
      .img-info(slot-scope="props")
        //-p.title-info this is number{{props.index+1}} image => Add dinamic title number
        p.title-info {{props.value.title}}
        p.desc-info {{props.value.info}}
    //-Custom loading animation
    div(slot="loading" slot-scope="{isFirstLoad}")
      div(slot="loading" v-if="isFirstLoad") first-loading...
      div(v-else) loading...
    <modal v-if="modalIsVisible" :closeModal="closeModal" :content="modalContent" />
  #footer
 
</template>-->
<template>
  <div>
     <TopBar/>
     <div class="main">
         <div class="gallery">
             <div class="img">
                 <img src="/static/images/img1.jpg"/>
             </div>
             <div class="img">
                 <img src="/static/images/img2.JPG"/>
             </div>
             <div class="img">
                 <img src="/static/images/img3.JPG"/>
             </div>
             <div class="img">
                 <img src="/static/images/img4.JPG"/>
             </div>
             <div class="img">
                 <img src="/static/images/img5.jpg"/>
             </div>
             <div class="img">
                 <img src="/static/images/img6.JPG"/>
             </div>
             <div class="img">
                 <img src="/static/images/img7.JPG"/>
             </div>
         </div>
     </div>
     <Footer/>
     <!--<div class="brick" v-for="image in images" :key="image.id" >
                <img class="galleryImg" :src="`${backendEndpoint()+'storage/'+image.source}`" alt="Cherry plant" title="Cherry plant">
     </div>-->
  </div>
</template>

<script>
import TopBar from './TopBar'
import Footer from './Footer'
import VueMasonryGallery from "vue-masonry-gallery";
import Modal from "./GalleryComponents/Modal.vue";
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      modalIsVisible: false,
      modalContent: "",
      random: false, // randomize thumbs order
      imgsArr: [],
      group: 0 ,
      images:[]// The number of times the currently loaded image is loaded
    };
  },
  components: {
    VueMasonryGallery,
    Modal,
    TopBar,
    Footer
  },
  methods: {
    mansoryHeight(){
       var heights=[200,250,300,400]
       var ind=(Math.random()*10)%4
       return heights[ind]
    },
    getData() {
      // "../../static/data/loadImages.json?group=" + this.group
      //BACKEND_ENDPOINT+'api/gallery?group='+this.group
      axios
        .get(BACKEND_ENDPOINT+'api/gallery') // In the real environment, the backend will return a new image array based on the parameter group. Here I simulate it with a stunned json file.
       .then(res => {
          this.images=res.data
        });
    },
    // Fisher–Yates Shuffle: https://bost.ocks.org/mike/shuffle/
    shuffle(array) {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;

      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // ... and swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },
    clickFn(event, { index, value }) {
      event.preventDefault();

      const target = this.imgsArr[index].target;

      // if srcBig is set use it as href, if not then use href
      const href = this.imgsArr[index].srcBig || this.imgsArr[index].href;

      if (target === "self") {
        window.location.href = href;
      } else if (target === "modal") {
        this.modalIsVisible = true;
        this.modalContent = `<img src="${this.imgsArr[index].srcBig}" alt="${
          this.imgsArr[index].title
        }"/>`;
      } else {
        window.open(href, "_blank");
      }
      if (event.target.tagName.toLowerCase() == "img") {
        console.log("img clicked", index, value);
      }
    },
    closeModal() {
      this.modalIsVisible = false;
    },
    changeImgArr() {
      axios
        .get("./.././static/data/data-change.json") // In the real environment, the backend will return a new image array based on the parameter group. Here I simulate it with a stunned json file.
        .then(res => {
          this.imgsArr = res.data;
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style >
.main{
  position:relative;
  height:100%;
  width:100%;
}
.main .gallery{
   position:relative;
   height:auto;
   width:90%;
   margin:auto;
   padding:45px 0;
   display:grid;
   grid-template-columns:auto auto auto auto;
   grid-gap: 2vh;
   grid-auto-flow:dense;
}
.main .gallery .img{
  position:relative;
  height:100%;
  width:100%;
  overflow:hidden;
  box-shadow:0px 2px 2px rgba(0,0,0,0.9);
  border-radius:2px;

}
.main .gallery .img:first-child{
  grid-column-start: span 2;
  grid-row-start: span 3;
}
.main .gallery .img:nth-child(2n+3){
  grid-row-start: span 2;
}
.main .gallery .img:nth-child(4n+5){
  grid-column-start: span 2;
  grid-row-start: span 2;
}
.main .gallery .img:nth-child(6n+7){
  
  grid-row-start: span 1;
}
.main .gallery .img:nth-child(8n+9){
  grid-column-start: span 1;
  grid-row-start: span 1;
}
.main .gallery .img img{
  height:100%;
  width:100%;
  object-fit: cover;
  filter:brightness(0.5)  grayscale(100);
  transition:0.3s ease-in-out;
}
.main .gallery .img:hover img{
   filter:brightness(1)  grayscale(0);
}
/*Responsive design*/
@media only screen and (max-width: 768px){
   .main .gallery{
      display:grid;
      grid-template-columns: auto auto auto;
   }
}
@media only screen and (max-width: 430px){
   .main .gallery{
      display:grid;
      grid-template-columns: auto auto ;
   }
    .main .gallery .img{
      display:block;
      width:100%;
      height:100%;
      margin:2% 0;
   }
       .main .gallery .img img{
      display:block;
      width:100%;
      height:100%;
      filter:brightness(1) grayscale(0);
   }
}
</style>
