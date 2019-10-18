import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
Vue.use(Vuex)
export const store =new Vuex.Store({
    state:{
        sliders:{},
        comments:{},
        partners:{},
        events:{},
        upcoming:[],
        videos:{},
        imageCategories:{},
        images:[],
        projects:[],
        teams:{},
    },
    mutations:{
        loadSliders(state,data){
            state.sliders=data
        },
        loadComments(state,data){
            state.comments=data
        },
        loadPartners(state,data){
            state.partners=data
        },
        loadEvents(state,data){
            state.events=data
            var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
            state.events.forEach(event=>{
                var prm= event.event_date.split('-')
                var date =moment.utc([parseInt(prm[2]),parseInt(prm[1])-1,parseInt(prm[0])])
                event.day=date.date()
                event.month=months[date.month()]
                var aujourdhui =new Date(moment().format('YYYY-MM-DD'))
                date=new Date(date.format('YYYY-MM-DD'))
                
                if(date<aujourdhui){
                    event.status='PASSED'
                }
                else if(date==aujourdhui){
                    event.status='TODAY'
                }
                else if(date>aujourdhui){
                    event.status='UPCOMING'
                }
                if(event.status=='UPCOMING')
                  state.upcoming.push(event)
            })
        },
        loadVideos(state,data){
            state.videos=data
        },
        loadImages(state,data){
            state.imageCategories=data
            var index=0;
            data.forEach(category => {
                 category.portfolio_images.forEach(image => {
                     image.index=index++
                     state.images.push(BACKEND_ENDPOINT+'storage/'+image.source)
                     state.projects.push(image)
                 });
            });
        },
        loadTeams(state,data){
            state.teams=data
        },
    },
    actions:{
        loadSliders(context){
            axios.get(BACKEND_ENDPOINT+'api/sliders').then(({data})=>{
                context.commit('loadSliders',data)
            }).catch(error=>{
                console.log(error)
            })
        },
        loadComments(context){
            axios.get(BACKEND_ENDPOINT+'api/comments').then(({data})=>{
                context.commit('loadComments',data)
            }).catch(error=>{
                console.log(error)
            })
        },
        loadPartners(context){
            axios.get(BACKEND_ENDPOINT+'api/partners').then(({data})=>{
                context.commit('loadPartners',data)
            }).catch(error=>{
                console.log(error)
            })
        },
        loadEvents(context){
            axios.get(BACKEND_ENDPOINT+'api/events').then(({data})=>{
                context.commit('loadEvents',data)
            }).catch(error=>{
                console.log(error)
            })
        },
        loadVideos(context){
            axios.get(BACKEND_ENDPOINT+'api/videos').then(({data})=>{
                context.commit('loadVideos',data)
            }).catch(error=>{
                console.log(error)
            })
        },
        loadImages(context){
            axios.get(BACKEND_ENDPOINT+'api/images').then(({data})=>{
                context.commit('loadImages',data)
            }).catch(error=>{
                console.log(error)
            })
        },
        loadTeams(context){
            axios.get(BACKEND_ENDPOINT+'api/teams').then(({data})=>{
                context.commit('loadTeams',data)
            }).catch(error=>{
                console.log(error)
            })
        },

    }
})