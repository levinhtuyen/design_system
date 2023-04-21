import router from '@/router'

router.addRoute({
  path: '/hotel/sadmin/chartjs',
  name: 'chartjs',
  component: () => import('./View.vue')
})
