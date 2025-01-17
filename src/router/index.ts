import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Team from '@/views/Team.vue'
import Schedule from '@/views/Schedule.vue'
import Contact from '@/views/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/team',
      name: 'team',
      component: Team,
    },
    {
      path: '/schedule',
      name: 'schedule',
      component: Schedule,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    }
  ],
})

export default router
