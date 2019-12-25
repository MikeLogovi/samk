<template>
<u-animate-container>
    <u-animate
      name="tada"
      delay="1s"
      duration="2s"
      :iteration="1"
      :offset="0"
      animateClass="animated"
      :begin="false" 
    >
    <section class="clients" id="clients">
        
        <div class="container text-center">
           <h1 class='section-title'>What people think about us</h1>
        </div>
        <div class="container">
            
                <div  id="testimonial-slider">
                    <carousel :perPageCustom="[[1199,3],[920,3],[420,2],[0,1]]"  :mouse-drag="true" :autoplay="true">
                        <slide v-for="comment in comments" :key="comment.id">
                            <div class="testimonial" >
                                    <span class="icon fa fa-quote-left"></span>
                                    <p class="description">
                                        {{comment.comment}}
                                    </p>
                                    <div class="testimonial-content">
                                        <div class='pic'>
                                            <img :src="`${backendEndpoint()}storage/${comment.source}`" alt="">
                                        </div>
                                        <h1 class="title">coucou</h1>
                                        <span class="post">{{comment.author_function}}</span>
                                    </div>
                                </div>
                        </slide>
                    </carousel>
                <!--
                  <carousel :autoplay="true" :responsive="{0:{items:1,nav:true},600:{items:2,nav:true},900:{items:3,nav:true}}">
                       

                    
                        <div class="testimonial" v-for="comment in comments" :key="comment.id">
                            <span class="icon fa fa-quote-left"></span>
                            <p class="description">
                                {{comment.comment}}
                            </p>
                            <div class="testimonial-content">
                                <div class='pic'>
                                    <img :src="`${backendEndpoint()}storage/${comment.source}`" alt="">
                                </div>
                                <h1 class="title">coucou</h1>
                                <span class="post">{{comment.author_function}}</span>
                            </div>
                        </div>
                    
                                     
                   </carousel>-->
                 </div>
            </div>
         
    </section>
    </u-animate>
    </u-animate-container>
</template>
<script>
import {Carousel,Slide} from 'vue-carousel'
import {UAnimateContainer, UAnimate} from 'vue-wow'
import {mapState} from 'vuex'
export default {
    components:{Carousel,Slide,UAnimateContainer, UAnimate},
    computed:{
        ...mapState([
            'comments'
        ])
    },
    mounted(){
        this.loadComments()
        Echo.channel('my-channel').listen('.comment-crud',(data)=>{
            this.loadComments()
        })
    },
    methods:{
        loadComments(){
            this.$store.dispatch('loadComments')
        }
    }
}
</script>
<style scoped>
.clients{
    background-color:#eee;
  
}

.testimonial{
    background:white;
    text-align:center;
    padding:30px 30px 50px;
    margin:0 15px 100px;
    position:relative;
}
.testimonial:before,.testimonial:after{
    content:"";
    border-top:40px solid white;
    border-right:125px solid transparent;
    position:absolute;
    bottom:-40px;
    left:0;
}
.testimonial:after{
    border-right:none;
    border-left:125px solid transparent;
    left:auto;
    right:0;
}
.testimonial .icon{
    display:inline-block;
    font-size:80px;
    color:#00D320;
    margin-bottom:20px;
    opacity:0.8;
}

.testimonial .description{
    font-size:16px;
    color:#777;
    text-align:justify;
    margin-bottom:30px;
    
    letter-spacing:-1px;
}
.testimonial .testimonial-content{
    width:100%;
    position:absolute;
    left:0;
}
.testimonial .pic{
    display:inline-block;
    border:6px solid white;
    border-radius:50%;
    box-shadow:0 0 2px 2px #00D320;
    overflow:hidden;
    z-index:1;
    position:relative;
}
.testimonial .pic img{
    width:100%;
    height:auto;
}
.testimonial .title{
    font-size:20px;
    font-weight:bold;
    text-shadow: 5px #eee;
    color:red;
    text-transform:capitalize;
    margin:0 0 5px 0;
}
.testimonial .post{
    display:block;
    font-size:14px;
    color:#00D320;

}
.pic img{
    width:100px!important;
    height:50px;
}

</style>