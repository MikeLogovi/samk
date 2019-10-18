
export default{
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