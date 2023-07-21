import Test from '@/views/Test.vue'

export const routes = [
  { path: '/', redirect: '/test' },
  { path: '/test', component: Test },
]