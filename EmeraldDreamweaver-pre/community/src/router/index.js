//创建一个路由器，并暴露出去

//第一步 : 引入createRouter
import { createRouter, createWebHistory } from 'vue-router'

//引入一个一个可以能要呈现的组件

import Home from '@/components/home.vue'
import Community from '@/components/community.vue'
import Note from '@/components/noteDetail.vue'
import Monitor from '@/components/monitor.vue'

//第二步 : 创建路由器
const router = createRouter({
    history : createWebHistory(), //路由器的工作模式
    routes : [ //一个个的路由规则
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/community',
            component:Community
        },
        {
            path:'/note',
            component:Note
        },
        {
            path:'/monitor',
            component:Monitor
        }
    ]
})

//暴露出去
export default router
