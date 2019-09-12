//导入插件
import VueRouter from "vue-router"
import Vue from "vue"

// import Home from "../components/Home"
// import About from "../components/About"
// import User from "../components/User"

const Home = () => import("../components/Home")
const About = () => import("../components/About")
const User = () => import("../components/User")
const HomeNews = () => import("../components/HomeNews")
const HomeMessage = () => import("../components/HomeMessage")
const Profile = () => import("../components/Profile")

//使用插件
Vue.use(VueRouter)
//创建router对象
const routes = [
  {
    //配置默认地址
    // path:'/',
    path:'',
    // component:Home
    //重定向
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
    meta: {
      title:"首页"
    },
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path:'/about',
    component:About,
    meta: {
      title:"关于"
    },
  },
  {
    path: '/user/:userID',
    component: User,
    meta: {
      title:"用户"
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title:"档案"
    },
  }
]
const router = new VueRouter({
  routes,
  //修改格式为H5的history模式 默认为Hash模式
  mode:"history",
  linkActiveClass:"active"
})

router.beforeEach((to,from,next) =>{
  document.title = to.matched[0].meta.title;
  next();
})
export default router
