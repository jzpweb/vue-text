import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import goods from '@/components/goods/goods'
import sell from '@/components/sell/sell'
import ratings from '@/components/ratings/ratings'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
  //   {
  //     name: '',
  //     path: '/',
  //     component: goods
  //   },
  //   {
  //     name: 'goods',
  //     path: '/goods',
  //     component: goods
  //   },
  //   {
  //     name: 'sell',
  //     path: '/sell',
  //     component: sell
  //   },
  //   {
  //     name: 'ratings',
  //     path: '/ratings',
  //     component: ratings
  //   },
  ]
})
