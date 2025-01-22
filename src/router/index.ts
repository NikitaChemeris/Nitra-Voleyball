import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Team from '@/views/Team.vue'
import News from '@/views/News.vue'
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
      path: '/news',
      name: 'news',
      component: News,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    }
  ],
})

export default router
