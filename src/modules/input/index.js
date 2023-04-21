import router from '@/router'

router.addRoute({
  path: '/hotel/sadmin/input',
  name: 'input',
  component: () => import('./View.vue')
})
