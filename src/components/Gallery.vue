<template>
<div>
      <TopBar/>
       <div class="rowli"> 
  <div class="column">
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

</div>
</template>
<script>
import VueGridLayout from 'vue-grid-layout';
import TopBar from './TopBar'
export default {
   name:'Gallery' ,
   components:{ TopBar,GridLayout: VueGridLayout.GridLayout,
           GridItem: VueGridLayout.GridItem},
   data(){
       return{
           layout:[
	    {"x":0,"y":0,"w":4,"h":2,"i":"0","source":'/static/images/img1.JPG'},
	    {"x":2,"y":0,"w":2,"h":4,"i":"1","source":'/static/images/img1.JPG'},
	    {"x":4,"y":0,"w":2,"h":5,"i":"2","source":'/static/images/img1.JPG'},
	    {"x":6,"y":0,"w":2,"h":3,"i":"3","source":'/static/images/img1.JPG'},
	    {"x":8,"y":0,"w":2,"h":3,"i":"4","source":'/static/images/img1.JPG'},
	    {"x":10,"y":0,"w":2,"h":3,"i":"5","source":'/static/images/img1.JPG'},
	    {"x":0,"y":5,"w":2,"h":5,"i":"6","source":'/static/images/img1.JPG'},
	    {"x":2,"y":5,"w":2,"h":5,"i":"7","source":'/static/images/img1.JPG'},
	    {"x":4,"y":5,"w":2,"h":5,"i":"8","source":'/static/images/img1.JPG'},
	    {"x":6,"y":3,"w":2,"h":4,"i":"9","source":'/static/images/img1.JPG'},
	    {"x":8,"y":4,"w":2,"h":4,"i":"10","source":'/static/images/img1.JPG'},
	    {"x":10,"y":4,"w":2,"h":4,"i":"11","source":'/static/images/img1.JPG'},
	    {"x":0,"y":10,"w":2,"h":5,"i":"12","source":'/static/images/img1.JPG'},
	    {"x":2,"y":10,"w":2,"h":5,"i":"13","source":'/static/images/img1.JPG'},
	    {"x":4,"y":8,"w":2,"h":4,"i":"14","source":'/static/images/img1.JPG'},
	    {"x":6,"y":8,"w":2,"h":4,"i":"15","source":'/static/images/img1.JPG'},
	    {"x":8,"y":10,"w":2,"h":5,"i":"16","source":'/static/images/img1.JPG'},
	    {"x":10,"y":4,"w":2,"h":2,"i":"17","source":'/static/images/img1.JPG'},
	    {"x":0,"y":9,"w":2,"h":3,"i":"18","source":'/static/images/img1.JPG'},
	    {"x":2,"y":6,"w":2,"h":2,"i":"19","source":'/static/images/img1.JPG'}
	]
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