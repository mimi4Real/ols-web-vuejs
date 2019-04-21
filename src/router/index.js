import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import Listing from '@/components/Listing'
import Nav from '@/components/Nav'
import CreateCamp from '@/components/CreateCamp'
import Camp from '@/components/Camp'

Vue.use(Router)

export const navs  = [{
  path: 'account',
  meta: {
    title: '账户',
    showMenu: true,
    belong: 'account',
  }
}, {
  path: 'listing',
  component: Listing,
  meta: {
    title: '训练营',
    showMenu: true,
    belong: 'listing',
  }
},{
  path: 'cards',
  meta: {
    title: '任务卡',
    showMenu: true,
    belong: 'cards',
  }
}, {
  path: 'createCamp',
  name: 'CreateCamp',
  component: CreateCamp,
  meta: {
    title: '新增训练营',
    showMenu: false,
    belong: 'listing',
  }
},{
  path: 'camp/:campId',
  name: 'Camp',
  component: Camp,
  meta: {
    title: '训练营详情',
    showMenu: false,
    belong: 'listing',
  }
}]

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/view/listing'
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/view',
      name: 'View',
      component: Nav,
      children: navs
    }
  ]
})
