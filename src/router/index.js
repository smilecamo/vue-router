import Vue from 'vue' // 引入vue
import Router from 'vue-router' // 引入vue-router
import HelloWorld from '@/components/HelloWorld' // 引入我们开发组件(页面)
import Fond from '@/components/Fond' // 同上,这里初始时没有,是我又加的后来
import Fond1 from '@/components/Fond1'
import Hi1 from '@/components/Hi'
import Player from '@/components/Player'
import State from '@/components/State'
import Profile from '@/components/Profile'
import Name from '@/components/name'
import Namer from '@/components/namer'
import Age from '@/components/age'

Vue.use(Router) // 使用Router

export default new Router({
  mode: 'history', // 取消导航中的#
  routes: [ // 我们的路由所在地
    {
      path: '/', // 路由的路径
      name: 'HelloWorld', // 路由的名称,以后会有其他用途
      components: {
        default: HelloWorld,
        a: Fond1,
        b: Fond
      }
    },
    {
      path: '/Hi1', // 路由的路径
      name: 'Hi1', // 路由的名称,以后会有其他用途
      component: Hi1,
      children: [
        {
          path: 'Player/:uid',
          name: 'Player',
          component: Player,
          children: [
            {
              path: 'state',
              component: State
            },
            {
              path: 'Profile',
              component: Profile
            }
          ]
        }
      ]
    },
    // 子路由传参
    {
      path: '/Name/:uid',
      name: 'Name',
      component: Name,
      children: [
        {
          path: 'namer',
          component: Namer
        },
        {
          path: 'age',
          component: Age
        }
      ]
    }
  ]
})
