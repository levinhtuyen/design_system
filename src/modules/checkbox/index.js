import router from '@/router'

router.addRoute({
  path: '/hotel/sadmin/checkbox',
  name: 'checkbox',
  component: () => import('./View.vue')
})
