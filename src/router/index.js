import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      component:()=>import("../Home"),
      children:[{
        path:'/index',
        component:()=>import("../components/part3/indexofheader")
      },
        {
          path: '/hello',
          component:()=>import("../components/HelloWorld")
        },
        {
          path: '/test1',
          component:()=>import("../components/part1/test1")
        },
        {
          path: '/test2',
          component:()=>import("../components/part1/test2")
        },
        {
          path:'/test3',
          component:()=>import("../components/part1/test3")
        },
        {
          path:'/category/all',
          component:()=>import("../components/part3/BlogAllCategory")
        },

      ]

    },

    {
      path:'/login',
      component:()=>import("../components/part2/BaseLogin")
    },
    {
      path:'/register',
      component:()=>import("../components/part2/BaseRegister")
    },

  ]
})
