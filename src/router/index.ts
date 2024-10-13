import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import LoadingView from '@/views/LoadingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/loading',
      name: 'loading',
      component: LoadingView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

router.beforeEach(async (to, from) => {
  const isAuthenticated = !!localStorage.getItem('isAuthenticated')
  if (
    // 检查用户是否已登录
    !isAuthenticated &&
    // ❗️ 避免无限重定向
    to.name !== 'login'
  ) {
    // 将用户重定向到登录页面
    return { name: 'login' }
  }
})

export default router
