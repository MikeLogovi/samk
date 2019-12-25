<template>
    <section class="team-area">
        <div class="container text-center">
             <h1 class="section-title">Our Awesome Team</h1>
        </div>
        <div class="container team-content">
            <carousel :per-page="3"  :mouse-drag="true" :autoplay="true">
                <slide v-for="team in teams" :key="team.id">
                      <div class=" col-sm-12">
                      <div class="team-block">
                          <div class="team-man">
                              <img :src="`${backendEndpoint()+'storage/'+team.source}`">
                         </div>
                         <div class="team-description text-center">
                             <div class="title">
                                 <h3>{{team.name}}</h3>
                                 <span>{{team.country}}</span>
                             </div>
                             <p>
                            {{team.description}}                           
                            </p>
                            <div class="team-social-network">
                                <span v-for="socialite in team.socialites" :key="socialite.id" >
                                 <a :href="socialite.url" target="_blank" v-if="socialite.icon"><i  :class="`fa fa-${socialite.icon}`"></i></a>
                                </span>
                            </div> 
                         </div>
                      </div>
              </div>
                </slide>
             </carousel>
            
            </div>
        
    </section>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
import {mapState} from 'vuex'
export default {
    components:{Carousel,Slide},
    computed:{
        ...mapState([
            'teams',
        ])
    },
    mounted(){
        this.loadTeams()
        Echo.channel('my-channel').listen('.team-crud',res=>{
            this.loadTeams()
        })
    },
    methods:{
        loadTeams(){
            this.$store.dispatch('loadTeams')
        }
    }
}
</script>
<style scoped>
.team-area{
    background-color:#eee;
}
.team-man{
    position:relative;
    left:50%;
    margin-left:-75px;
    top:50px;
    overflow:visible!important;
    min-width:100px;
    min-height:100px;
    width:150px;
    height:150px;
    border:10px solid #00D320;
    border-radius:50%;
}

.team-man img{
    width:100%;
    height:100%;
    min-height:100%;
    min-width:100%;
    border-radius:50%;
}
.team-block h3{
    color:#00D320;
    font-size:20px;
    font-weight:bold;
    text-transform:uppercase;
    padding-top:70px;
    margin-bottom:5px;
}
.team-block span{
    
    color:transparent;
    background-clip:text;
    -webkit-background-clip:text;
    background-image:linear-gradient(25deg,#A64EAE,#4683B7);
    font-size:16px;
    text-transform:uppercase;
    letter-spacing:0.025em;
    font-family:'Fredoka One';
}
.team-block p{
    color:dimgrey;
    font-size:14px;
    padding:25px 15px;
    line-height:24px;
}
.team-description {
    background-color:white;
}
.team-social-network{
    text-align:center;
    padding-bottom:15px;
}
.team-social-network a{
    margin:0 6px;
}
.team-social-network i{
    width:40px;
    height:40px;
    background:#eee;
    color:#00D320;
    text-align:center;
    border-radius:50%;
    border:3px solid #00D320;
    padding-top:10px;
}

/*.team-block:before{
    content:'';
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:40%;
    background:rgba(255,255,255,1);
    z-index:1;
    transform:skewY(-5deg) scale(1.5);
}*/
.team-block:hover .team-description{
    background-color:#00D320;
    color:white;
    transition:0.3s ease;
}
.team-block:hover .title h3,
.team-block:hover .title span{
    color:white;
    transition:.3s ease;
}
.team-block:hover .team-description p{
    color:#f9f9f9;
    transition:0.3 ease;
}
.team-block:hover .team-social-network i{
border-color:#eee;
background:#00D320;
color:#eee;
}
.team-content{
    padding-bottom:40px;
    padding-top:-50px;
}
</style>