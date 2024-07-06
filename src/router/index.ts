import { createWebHashHistory, createRouter } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import { store } from '@/store'

import Layout from '@/layout/Layout.vue'
import Login from '@/pages/Login.vue'
import Home from '@/pages/Home.vue'
import { App } from 'vue'

const routes: RouteRecordRaw[] = [
  { path: '/login/:pathMatch(.*)*', component: Login, props: { auth: false } },
  {
    path: '/',
    component: Layout,
    children: [
      { path: 'home', component: Home },
    ]
  },
  { path: '/:pathMatch(.*)*', component: Login, props: { auth: false } },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const isLogin = store.state.auth.isLogin
  const requireAuth = to?.matched?.[0].props?.default?.auth ?? true
  const isLoginPage = to.path === '/login'

  if (requireAuth && isLogin) { next() }
  else if (isLoginPage) { isLogin ? next('/') : next() }
  next('/login')
})

const applyRouter = (app: App) => app.use(router)

export default applyRouter
