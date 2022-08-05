import { createRouter, createWebHashHistory } from "vue-router";

function load (component){
    return () => import(`components/${component}.vue`)
}

const routes = [
    {path:'/page1',component: load('pageA')},
    {path:'/page2',component: load('pageB')},
    {path:'/',component: load('login')}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;