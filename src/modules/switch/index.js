import router from '@/router'

router.addRoute({
  path: '/hotel/sadmin/switch',
  name: 'switch',
  component: () => import('./View.vue')
})
