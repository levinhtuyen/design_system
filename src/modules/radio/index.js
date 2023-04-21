import router from '@/router'

router.addRoute({
  path: '/hotel/sadmin/radio',
  name: 'radio',
  component: () => import('./View.vue')
})
