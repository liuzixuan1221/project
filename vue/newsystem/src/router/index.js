import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../components/Home"
import First from "../components/First"
import Com from "@/components/Com"
import Brother from "@/components/Brother"
import News from "@/components/news"
import About from "@/components/about"
import Chat from "@/components/chat"
import Run from "@/components/runrouter"
import Child from "@/components/childRouter"
import One from "@/components/one"
import Two from "@/components/two"
import Three from "@/components/three"
import Router from "@/components/routeview"
import Redirect from "@/components/redirect"
import Nav from "@/components/nav"
import Login from "@/components/login"
import Compar from "@/components/compar"
import Vuex from "@/components/vuex"


Vue.use(VueRouter)      //use   如果涉及到vue内部方法时需要通过use调用
var router = new VueRouter({
    mode: "history",     //hash  匹配#进行跳转     history(html5)   window下面的方法
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/first",
            component: First
        },
        {
            path: "/com",
            component: Com
        },
        {
            path: "/brother",
            component: Brother
        },
        {
            path: "/news",
            component: News
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/chat",
            component: Chat
        },
        {
            path: "/run/:id",
            component:Run,
            query:{

            }
        },
        {
            path: "/child",
            component:Child,
            children:[
                {
                    path:"/child/one",
                    component: One
                },
                {
                    path:"/child/Two",
                    name:"twotwo",
                    component: Two,
                },
                {
                    path:"/child/Three",
                    component: Three
                }
            ]
        },
        {
            path: "/view",
            component:Router,
            children:[
                {
                path:"",
                components:{
                    default:One,
                    a:Two,
                    b:Three
                }}
            ]
            
        },
        {
            path: "/red",
            // path: "/red/:id",
            // redirect:"/",
            // props: true,
            // alias:"/d",
            meta:{
                requireAuth:true
            },
            component:Redirect,
             
            beforeEnter(to,from,next){//路由独享守卫
                console.log(beforeEnter);
                next();
            }
        },
        {
            path:"/nav",
            component:Nav
        },
        {
            path:"/login",
            component:Login
        },
        {
            path:"/compar/:haha",
            props:true, //路由组件传参
            component:Compar
        },
        {
            path:"/vuex",
            component:Vuex
        }   
    ]
})
//全局导航守卫
router.beforeEach((to,from,next)=>{
    //to 路由去向的目标   
    //from  路由从哪里离开
    //next  函数 执行下一步
    // console.log(arguments)
    if(to.path == "/red"){
        if(to.meta.requireAuth==true){
            router.push("/com")
        }else{
            router.push("/")
        }
    }
    
    next()
})
// //全局解析守卫    2.50 增加
// // router.beforeResolve((to,from)=>{

// // })
//全局后置钩子    作用： 销毁  取消销毁状态
// router.afterEach((to,from)=>{
    
//     // console.log(to)
//     // console.log(from)
// })
export default router; 