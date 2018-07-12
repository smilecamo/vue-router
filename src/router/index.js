import Vue from 'vue' // 引入vue
import Router from 'vue-router' // 引入vue-router
import HelloWorld from '@/components/HelloWorld' // 引入我们开发组件(页面)
import Fond from '@/components/Fond' // 同上,这里初始时没有,是我又加的后来
import Load from '@/components/Load'

Vue.use(Router) // 使用Router

export default new Router({
  mode: 'history', // 取消导航中的#
  routes: [ // 我们的路由所在地
    {
      path: '/', // 路由的路径
      name: 'HelloWorld', // 路由的名称,以后会有其他用途
      component: HelloWorld // 在当前路径下引入哪个组件
    },
    {
      path: '/Fond', // 这里就是我们第二个页面了
      name: 'Fond',
      component: Fond,
      children: [ // 子路由放到children 中
        {
          path: 'Load',
          name: 'Load',
          component: Load
        }
      ]
    }
  ]
})
