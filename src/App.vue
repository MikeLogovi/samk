<template>
  
     
    <router-view/>
  
</template>

<script>
import './assets/global.css'
import './assets/animate.css'
import {mapState} from 'vuex'
export default {
  name: 'App'
}
</script>

<style>
.section-title{
  font-family:'Fredoka One';
  color:#00D320;
  font-size:5vw!important;
  font-weight:bold;
  padding:15px 0;
  position:relative;
  margin-bottom:3vw;
}
.section-title:before{
   content:"";
   background-color:#00D320;
   position:absolute;
   height:2px;
   width:33.3%;
   bottom:0;
   left:33.3%;
}
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
