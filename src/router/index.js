import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '../views/Login.vue'
import home from '../views/MainHome.vue'

import greet from '../views/Greet.vue'

Vue.use(VueRouter)




const routes = [
     {
        path:'/',
        component:login
     },
     {
         path:'/home',
         name:'home',
         component:home,
         children:[
           {
               path:'',
               name:greet,
               component:greet
           }
         ]
     },
     

]








const router = new VueRouter({
    routes
})



export default router