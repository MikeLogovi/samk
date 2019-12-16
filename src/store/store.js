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
        past:[],
        today:[],
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
               
                var date =moment(event.event_date,'DD/MM/YYYY')
                event.day=date.format('D')
                event.month=months[date.format('M')-1]
                var aujourdui=moment().format('DD/MM/YYYY')
                if(moment().diff(date, 'days') >0){
                    event.status='PASSED'
                    state.past.push(event)
                }
                else if(moment().diff(date, 'days') == 0){
                    event.status='TODAY'
                    state.today.push(event)
                }
                else if(moment().diff(date, 'days') <0){
                    event.status='UPCOMING'
                    state.upcoming.push(event)
                }     
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