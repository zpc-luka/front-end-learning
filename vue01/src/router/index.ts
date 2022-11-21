import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

import MyVue2 from '../components/MyVue2.vue';
import FormVue from "../components/FormVue.vue";

// 创建路由
const routes: Array<RouteRecordRaw> = [
    {
        path: '/myVue2',  // 匹配的路径，去除主机名
        name: 'myVue2', // 当前RouteRecord的名称
        component: MyVue2 //跳转的组件
    },

    {
        path: '/formVue',  // 匹配的路径，去除主机名
        name: 'formVue', // 当前RouteRecord的名称
        component: FormVue //跳转的组件
    },
]

// 创建路由的对象 
const router = createRouter({
    history: createWebHistory(),  // 历史记录模式
    routes  // 路由条目
})

// 暴露 
export default router