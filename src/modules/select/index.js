import router from '@/router'

router.addRoute({
  path: '/hotel/sadmin/select',
  name: 'select',
  component: () => import('./View.vue')
})
