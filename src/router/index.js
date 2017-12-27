import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SlotMachine from '@/components/SlotMachine'
import SlotMachine2 from '@/components/SlotMachine2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/slot1',
      name: 'SlotMachine',
      component: SlotMachine
    },
    {
      path: '/slot2',
      name: 'SlotMachine2',
      component: SlotMachine2
    }
  ]
})
