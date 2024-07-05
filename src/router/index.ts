import { createWebHashHistory, createRouter } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Layout from '@/layout/Layout.vue'
import Login from '@/pages/Login.vue'
import Home from '@/pages/Home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    children: [
      { path: 'home', component: Home },
    ]
  },
  { path: '/:pathMatch(.*)*', component: Login },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from) => {
  console.log(to, from)
})

export default router
