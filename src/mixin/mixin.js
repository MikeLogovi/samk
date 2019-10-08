
export default{
    methods:{
        backendEndpoint(){
            return 'http://localhost:8000/'
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