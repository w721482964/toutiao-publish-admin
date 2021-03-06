import Vue from 'vue'
import VueRouter from 'vue-router'
// 在 VueCLI 创建的项目中 @ 表示 src 目录
// 他是 src 目录的路径别名
// 好处：它不受当前文件路径影响
// 建议：如果加载的资源路径就在当前目录下，那就正常写
//       如果需要进行父级路径查找的都要用@
import Login from '@/views/login/index.vue'
Vue.use(VueRouter)

// 路由配置表
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
