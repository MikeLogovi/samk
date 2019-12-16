
export default{
    data(){
        return{
            social_medias:[
              {id:1,"social_media":"facebook","url":"https://www.facebook.com/AgodoaSamuel/?__tn__=%2Cd%2CP-R&eid=ARC8aiewlw6mVWDxCsEOegLDmKeGP3E9xf-eh8qry-TqoGKg6SZtvU47o3uOZz61uIm37iuQAP4ND1zU","icon":"fa fa-facebook"},
              {id:2,"social_media":"youtube","url":"https://www.youtube.com/channel/UCcAApHUPIazq6bcXnjuwNKQ","icon":"fa fa-youtube"},
              {id:3,"social_media":"instagram","url":"https://www.instagram.com/samktravel/?hl=fr","icon":"fa fa-instagram"},
              {id:4,"social_media":"twitter","url":"https://twitter.com/SamKTravelTour1","icon":"fa fa-twitter"}
            ],
            slides:[
                {id:1,src:"/static/slider/slide1.jpg",title:"WELCOME TO SAM K TRAVEL & TOUR"},
                {id:2,src:"/static/slider/slide2.jpg",title:"AKWAABA !!! SAMK K TRAVEL & TOUR"},
            ],
            videoss:[
                {id:5,src:"/static/videos/video1.mp4",title:"WELCOME TO SAM K TRAVEL & TOUR"},
                {id:6,src:"/static/videos/video2.mp4",title:"WELCOME hum TO SAM K TRAVEL & TOUR"},
            ]
             
        }
    },
    methods:{
        backendEndpoint(){
            return 'http://localhost:8000/'
        },
        scrolling(ancre){
         var target=$(ancre)
         $('.full-nav').removeClass("open");
         if( target.length ) {
             $("html, body").stop().animate( { scrollTop: target.offset().top }, 1500);
         }
       
     
},
        fileExtension(filename){
           return filename.split(".").pop()
        },
        isImage(filename){
          
          var extensions=['png','jpg','jpeg','bmp','gif']
          return extensions.indexOf(this.fileExtension(filename))>=0
           
        },
        isVideo(filename){
         
         var extensions=['mp4','avi','quicktime']
         return extensions.indexOf(this.fileExtension(filename))>=0
        
      }
   }
}