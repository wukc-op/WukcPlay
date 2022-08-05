<template>
  <div id="app">

<!--    <p>-->
<!--      &lt;!&ndash; 使用 router-link 组件来导航. &ndash;&gt;-->
<!--      &lt;!&ndash; 通过传入 `to` 属性指定链接. &ndash;&gt;-->
<!--      &lt;!&ndash; <router-link> 默认会被渲染成一个 `<a>` 标签 &ndash;&gt;-->
<!--      <router-link to="/page1">pageA</router-link><br>-->
<!--      <router-link to="/page2">pageB</router-link><br>-->
<!--&lt;!&ndash;      <router-link to="">首页</router-link><br>&ndash;&gt;-->
<!--    </p>-->
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>