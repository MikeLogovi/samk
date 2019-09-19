<template>
    <section id="videos" class="videos">
        <div class="default-space"></div>
        <div class="container">
              <div class='row'>
                   <div class="col-lg-12">
                       <div class="default-title">
                           <h4>
                               <b>
                                   Why choose us?
                              </b>
                           </h4>
                        </div>
                    </div>
              </div>
  
              <div class="row">
                   <div class="col-lg-6">
                       <div class="videos-content">
                           <h3>Hire Me</h3>
                           <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                              Repudiandae cupiditate fugit, est beatae deserunt officia quaerat quibusdam temporibus
                              qui iusto quia, nesciunt nihil quo facere laudantium architecto vero quis dolorem!
                            </p>
                        </div>

                        <div class="videos-content">
                           <h3>Which service you get from me?</h3>
                           <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                              Repudiandae cupiditate fugit, est beatae deserunt officia quaerat quibusdam temporibus
                              qui iusto quia, nesciunt nihil quo facere laudantium architecto vero quis dolorem!
                            </p>
                        </div>

                         <div class="videos-content">
                           <h3>Which files I will provide you?</h3>
                           <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                              Repudiandae cupiditate fugit, est beatae deserunt officia quaerat quibusdam temporibus
                              qui iusto quia, nesciunt nihil quo facere laudantium architecto vero quis dolorem!
                            </p>
                        </div>

                   </div>
                   <div class="col-lg-6" id="video-right-static">
                       <div class="author-video-section">
                        </div>
                        <div class="video_area">
                             <div class="video_bitton">
                                 <a href="" data-toggle="modal" data-target="#myModal">
                                     <span class='profilepicture'></span>
                                 </a>
                             </div>
                        </div>
                   </div>
                   <div class="modal fade"  id="myModal" tabindex="1" role="dialog">
                        <div class="modal-dialog modal-lg" role="document">
                              <div class="modal-content">
                                   <div class='modal-header raisa-video-btn'>
                                       <button type="button" class="btn btn-default" data-dismiss="modal">
                                           Close
                                        </button>
                                  </div>
                                  <div class="modal-body">
                                        <div class="video-container">
                                             <iframe width="560" height="315" 
                                             src="https://www.youtube.com/embed/tuTce4gNuMM" 
                                             frameborder="0"
                                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                  </div>
                              </div>
                        </div>
                   </div>
              </div>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.videos{
    position:relative;
}
.videos-content{
    margin-bottom:40px;
}
.videos-content:last-of-type{
    margin-bottom:0;
}
.videos-content h3{
    color:#333;
    font-size:18px;
    font-weight:500px;
    margin-bottom:20px;
}
.videos-content p{
    font-size:16px;
    color:#888;
    line-height:27px;
    margin-bottom:0px;
}
.video_area{
    position:relative;
}
.author-video-section{
    position:hidden;
    border-radius:10px;
    background:url(../../../static/images/img1.jpg) no-repeat center center;
    position:absolute;
    right:0;
    top:0;
    height:100%;
    width:50%;
    background-position:0% 66%;
}
#video-right-static{
    position:static;
}
.profilepicture{
    position:absolute;
    border-radius:50%;
    border:7px solid #ededed;
    padding:10px;
    width:90px;
    height:90px;
    background:white;
    color:#ff6046;
    margin:auto;
    top:-1px;
    left:5px;
    bottom:0;
    right:0;
    display:inline-block;
    text-align:center;
    z-index:888;
    transition:all 0.4s ease-in-out;
}
.profilepicture::before{
    content:"";
    position:absolute;
    left:0;
    right:0;
    background:url(video-icon.png) no-repeat center center;
    width:29px;
    height:34px;
    text-align:center;
    margin:0 auto;
    top:26%;
}
.profilepicture:hover{
    color:#ddd;
    color:white;
}
.video_button{
    position:absolute;
    top:180px;
    z-index:33;
    right:43%;
}
.video_button a img{
    position:absolute;
    right:25%;
    z-index:12;
    top:38%;
}
.raisa-video-btody{
    padding-top:45px;
}
.raisa-video-btn{
    border-bottom:0px ;
    padding-bottom:0px;
    position:relative;
}
.raisa-ideo-btn button{
    display:inline-block;
    background-color:#fab702;
    postion:absolute;
    z-index:12;
    right:22px;
    padding:8px 40px;
    border-radius:0;
    color:white;
    border:0;
}
.modal-body{
    position:relative;
    flex:1 1 auto;
    padding:1rem;

    margin-top:35px;
}
.modal.show .modal.dialog{
    margin-top:60px;
}
.video-container{
     position:relative;
     padding-bottom:230px;
     height:0;
     overflow:hidden;
}
.video-container iframe{
    position:absolute;
    top:0;
    left:0;
    height:100%;
    width:100%;
}
@media (min-width: 768px){
 .modal-dialog{
     width:760px;
     padding:10px auto;
 }   
 .modal-contenu{
     position:relative;
     background-color:white;
     background-clip:padding-box;
     border:1px solid #999;
     border-radius:6px;
     outline:0;
     box-shadow:0 3px 9px rgba(0,0,0,0.5);
     margin-top:120px;
 }   
}
</style>