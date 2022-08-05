import { createRouter, createWebHashHistory } from "vue-router";
import pageA from '@/components/pageA'
import pageB from "@/components/pageB";
import home from "@/components/HelloWorld"

const routes = [
    {path:'/',component: home},
    {path:'/page1',component: pageA},
    {path:'/page2',component: pageB}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;