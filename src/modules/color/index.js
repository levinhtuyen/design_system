import router from '@/router'

router.addRoute({
  path: '/hotel/sadmin/color',
  name: 'color',
  component: () => import('./View.vue')
})
