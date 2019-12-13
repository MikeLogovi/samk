<template>
<u-animate-container>
    <u-animate
      name="jackInTheBox"
      delay="1s"
      duration="2s"
      :iteration="1"
      :offset="0"
      animateClass="animated"
      :begin="false" 
    >
    <div class="container-fluid">
          <div class="parallax">
              <div class="row">
                   <div class="col-md-1"></div>
                   <div class="col-md-5">
                       <h1>IL EST &nbsp;OU</h1>
                   </div>
                   <div class="col-md-1" ></div>
                   <div class="col-md-5" style="padding-left:100px">
                       <h1>TO LIVE IS TO TRAVEL!!</h1>
                   </div>
              </div>
          </div>
    </div>
    </u-animate>
    </u-animate-container>
</template>
<script>
import {UAnimateContainer, UAnimate} from 'vue-wow'
export default {
  components:{UAnimateContainer, UAnimate} ,
}
</script>
<style scoped>
@import url("https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
.container-fluid{
    margin-left:0;
    margin-right:0;
    padding:0;
}
.parallax{
    margin:0;
    padding:0;
    width:100vw;
    height:30vw;
    background-image:linear-gradient(25deg,rgba(0,0,0,0.5),rgba(0,0,0,0.95)),url("../../../static/banner.jpg");
    background-position:center;
    background-attachment: fixed;
    background-repeat:no-repeat;
    display:flex;
    align-items:center;
    
    color:white;
}
h1{
    font-size:5vw;
    font-family:'Roboto Condensed';
    font-weight:bold;
}
</style>