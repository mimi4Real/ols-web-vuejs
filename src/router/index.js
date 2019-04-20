import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import Listing from '@/components/Listing'
import Nav from '@/components/Nav'
import CreateCamp from '@/components/CreateCamp'
import Camp from '@/components/Camp'

Vue.use(Router)

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
      children: [{
        path: 'listing',
        component: Listing
      },{
        path: 'createCamp',
        name: 'CreateCamp',
        component: CreateCamp
      },{
        path: 'camp',
        name: 'Camp',
        component: Camp
      }]
    }
  ]
})
