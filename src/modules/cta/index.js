import router from '@/router'

router.addRoute({
  path: '/hotel/sadmin/cta',
  name: 'cta',
  meta: { requiresAuth: false },
  component: () => import('./View.vue')
})
