<template>
<div class="text-center cover-wrapper">

<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
  <header class="masthead mb-auto">
    <div class="inner">
      <h3 class="masthead-brand"><img src="/static/logo2.PNG"  width="100px" height="50px" class="img img-responsive"/></h3>
      <nav class="nav nav-masthead justify-content-center">
        <a class="nav-link active" href="#">Home</a>
        <a class="nav-link" href="#">Events</a>
        <a class="nav-link" href="#">Gallery</a>
        <a class="nav-link" href="#">Videos</a>
        <a class="nav-link" href="#">Contact</a>
      </nav>
    </div>
  </header>

  <main role="main" class="inner cover">
    <h1 class="cover-heading logo__text ">SAM K TRAVEL & TOUR.</h1>
    <span class="lead message">WELCOME</span>
   
  </main>

  <footer class="mastfoot mt-auto" style="opacity:0">
    <div class="inner">
      <p >SAM K Travel & TOUR</a>, made by <a href="https://twitter.com/mikeLaravel">Mike LOGOVI</a>.</p>
    </div>
  </footer>
</div>
</div>

</template>

<script>
import '../../assets/cover.css'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted(){
   function redimensionnement(){ 
 
    var $image = $('img.banner');
    var image_width = $image.width(); 
    var image_height = $image.height();     
     
    var over = image_width / image_height; 
    var under = image_height / image_width; 
     
    var body_width = $(window).width(); 
    var body_height = $(window).height(); 
     
    if (body_width / body_height >= over) { 
      $image.css({ 
        'width': body_width + 'px', 
        'height': Math.ceil(under * (body_width)) + 'px', 
        'left': '0px', 
        'top': Math.abs((under * body_width) - body_height) / -2 + 'px' 
      }); 
    }  
     
    else { 
      $image.css({ 
        'width': Math.ceil(over * (body_height)) + 'px', 
        'height': body_height + 'px', 
        'top': '0px', 
        'left': Math.abs((over * body_height) - body_width) / -2 + 'px' 
      }); 
    } 
} 

   $(document).ready(function(){
     /*redimensionnement();
     $(window).resize(function(){
       redimensionnement();
     })*/
     $('.logo__text').animate({opacity:1},3000);
     var sliderText=[{
                      text:'AKWAABA',
                      animationClass:'message_anime_2'
                     },
                      {text:'WELCOME',
                      animationClass:'message_anime_3'
                      }
                      ,{text:'BIENVENU',
                      animationClass:'message_anime_1'}
                    
                    ]
    var count=0;
    setTimeout(slidingWelcome,1005);
    function slidingWelcome(){

       setInterval(toSlide,3000);
       function toSlide(){
             if(count==sliderText.length)
                   count=0;
              
               $('span.message').text(sliderText[count].text);
               if(count%2==0){
                 $('.cover').css({
                   animationName:'fadeOutLeftBig',
                   animationDuration:'2s'
                 })
               }
               else{
                  $('.cover').css({
                   animationName:'fadeOutRightBig',
                   animationDuration:'2s'
                 })
               }
              if(count==0){
                $('h1.logo__text').removeClass(sliderText[sliderText.length-1].animationClass).addClass(sliderText[count].animationClass);
              }
              else{
                $('h1.logo__text').removeClass(sliderText[count-1].animationClass).addClass(sliderText[count].animationClass);
              }
             count++;
       }
    }
   })
  
  },
  methods:{
    move(){
        $( ".area" ).animate({ "left" : "+=50px" }, "slow" );
    },
     fadeIn(){
         $('.area').fadeIn();
     },
     fadeOut(){
         $('.area').fadeOut(1000,function(){
              alert('I faded out');
         });
     },
     fadeToggle(){
        $('.area').fadeTog();
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Archivo+Narrow|Karla|Kaushan+Script|Oswald|Satisfy|Source+Sans+Pro&display=swap');


@import url('https://getbootstrap.com/docs/4.3/dist/css/bootstrap.min.css');

.bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
}

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
.message{
  color:white;
  font-size:35px;
  position: relative;
  font-family:'Archivo';
  
}
.message_anime_1{
    animation:jackInTheBox 3s infinite ease ;
}
.message_anime_2{
    animation:bounce 3s infinite ease ;
}
.logo__text{
  font-family:'Kaushan Script';
  opacity:0;
}




/*
.cover {
  animation: fadeInLeftBig 1s infinite;
}
*/
  /*.logo__text {
    color: #f35626;
    background-image: linear-gradient(92deg, #f35626 0%,#feab3a 100%);
    -webkit-background-clip: text;
            background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: hue 10s infinite linear;
  }*/

.site__content {
  animation: bounceInUp 1s;
  animation-delay: .1s;
}

  .site__content form {
    animation: bounceInUp 1s;
    animation-delay: .1s;
  }

/*-----------------------------------*\
  $ANIMATIONS
\*-----------------------------------*/

@keyframes hue {
  from {
    filter: hue-rotate(0deg);
  }
  
  to {
    filter: hue-rotate(-360deg);
  }
}

/*-----------------------------------*\
  $REDUCED MOTION BANNER
\*-----------------------------------*/

.motionless__banner {
  display: none;
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  padding: 1rem;

  background: #333;
  color: #fff;
  border-top: 2px solid #FF5722;
}

.motionless__paragraph {
  margin-bottom: 0;
}

@media (print), (prefers-reduced-motion: reduce) {
  .motionless__banner {
    display: block;
  }
}
</style>
