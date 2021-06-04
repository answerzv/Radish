import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '../views/Login.vue'
import home from '../views/MainHome.vue'

import Greet from '../views/Greet.vue'
import CoList from '../views/message/CoList.vue'
import CoPosition from '../views/message/CoPosition.vue'

import Article from '../views/Article.vue/index.vue'

import Candidate from '../views/talent/Candidate.vue'
import Talents from '../views/talent/Talents.vue'

import Referrer from '../views/refer/Referrer.vue'
import ReferTste from '../views/refer/ReferTest.vue'

import Module from '../views/backManageList/Module.vue'
import Role from '../views/backManageList/Role.vue'
import Password from '../views/backManageList/Password.vue'
import Account from '../views/backManageList/Account.vue'

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
              name:Greet,
              component:Greet
           },
           {
               path:'CoList',
               name:CoList,
               component:CoList
           },
           {
               path:'CoPosition',
               name:CoPosition,
               component:CoPosition
           },
           {
                path:'Article',
                name:Article,
                component:Article
           },
           {
                path:'Candidate',
                name:Candidate,
                component:Candidate
            },
            {
                path:'Talents',
                name:Talents,
                component:Talents
            },
            {
                path:'Referrer',
                name:Referrer,
                component:Referrer
            },
            {
                path:'ReferTste',
                name:ReferTste,
                component:ReferTste
            },

            {
                path:'Module',
                name:Module,
                component:Module
            },
            {
                path:'Role',
                name:Role,
                component:Role
            },
            {
                path:'Password',
                name:Password,
                component:Password
            },
            {
                path:'Account',
                name:Account,
                component:Account
            }
         ]
     },
     

]








const router = new VueRouter({
    routes
})



export default router