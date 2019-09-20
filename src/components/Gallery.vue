<template>
<div>
      <TopBar/>
<div class="rowli"> 
  <div class="column images" v-viewer="{movable: false}">
    <img src='/static/images/img1.JPG' style="width:100%; height:20%">
    <img src='/static/images/img2.JPG' style="width:100%; height:10%">
    <img src='/static/images/img1.JPG' style="width:100%; height:20%">
    <img src='/static/images/img1.JPG' style="width:100%; height:40%">
    <img src='/static/images/img1.JPG' style="width:100%; height:29%">
    <img src='/static/images/img1.JPG' style="width:100%; height:18%">
    <img src='/static/images/img1.JPG' style="width:100%; height:15%">
  </div>
     
    <div class="column">
    <img src='/static/images/img1.JPG' style="width:100%; height:20%">
    <img src='/static/images/img2.JPG' style="width:100%; height:10%">
    <img src='/static/images/img1.JPG' style="width:100%; height:40%">
    <img src='/static/images/img1.JPG' style="width:100%; height:18%">
    <img src='/static/images/img1.JPG' style="width:100%; height:29%">
    <img src='/static/images/img1.JPG' style="width:100%; height:15%">
    <img src='/static/images/img1.JPG' style="width:100%; height:20%">
  </div>
   
   <div class="column">
    <img src='/static/images/img1.JPG' style="width:100%; height:20%">
    <img src='/static/images/img2.JPG' style="width:100%; height:10%">
    <img src='/static/images/img1.JPG' style="width:100%; height:40%">
    <img src='/static/images/img1.JPG' style="width:100%; height:15%">
    <img src='/static/images/img1.JPG' style="width:100%; height:20%">
    <img src='/static/images/img1.JPG' style="width:100%; height:18%">
    <img src='/static/images/img1.JPG' style="width:100%; height:29%">
  </div>
    <div class="column">
    <img src='/static/images/img2.JPG' style="width:100%; height:10%">
    <img src='/static/images/img1.JPG' style="width:100%; height:20%">
    <img src='/static/images/img1.JPG' style="width:100%; height:15%">
    <img src='/static/images/img1.JPG' style="width:100%; height:40%">
    <img src='/static/images/img1.JPG' style="width:100%; height:20%">
    <img src='/static/images/img1.JPG' style="width:100%; height:18%">
    <img src='/static/images/img1.JPG' style="width:100%; height:29%">
  </div>
</div>
<Footer/>
 <button type="button" @click="show">Show</button>
</div>
</template>
<script>
import TopBar from './TopBar'
import Footer from './Footer'
export default {
   name:'Gallery' ,
   components:{ TopBar,Footer},
   data(){
       return{
       
       }
   },
   methods:{
     show(){
        const viewer = this.$el.querySelector('.images').$viewer
        viewer.show()
      }
   }
}
</script>
<style scoped>
.rowli {
    margin-top:120px;
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
}

.column img {
  margin-top: 8px;
  vertical-align: middle;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media (max-width: 800px) {
  .column {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media (max-width: 600px) {
  .column {
    flex: 100%;
    max-width: 100%;
  }
}
</style>