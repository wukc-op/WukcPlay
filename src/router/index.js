import { createRouter, createWebHashHistory } from "vue-router";
import local from "@/utils/local"
function load (component){
    return () => import(`../components/${component}.vue`)
}

const routes = [
    {path:'/page1',component: load('pageA')},
    {path:'/reg',component: load('reg')},
    {path:'/',component: load('login')}
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// 路由的前置守卫
router.beforeEach((to, from, next) => {
    const isLogin = local.get('tk') ? true : false
    // 判断有没有token，没有的话，去登录
    if (isLogin) {
      next() // 放行
    } else {
      // 是否跳转登录页面
      if (to.path === '/') {
        next() // 放行
      } else {
        // 不是的话，跳转登录页面
        next({
          path: '/'
        })
      }
    }
  })

export default router;