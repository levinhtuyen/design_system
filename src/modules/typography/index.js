import router from '@/router'

router.addRoute({
  path: '/hotel/sadmin/typography',
  name: 'typography',
  meta: { requiresAuth: false },
  component: () => import('./View.vue')
})
