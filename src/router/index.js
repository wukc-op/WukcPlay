import {createRouter, createWebHistory }from 'vue-router';
import First from "@/views/First";
const router =createRouter({

    history:createWebHistory(),

    routes: [{
        path: '/',
        name: 'First',
        component: First
    }]



})

export default router