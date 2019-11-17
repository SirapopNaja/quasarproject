
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/login',
    name:'login',
    component: () => import('../pages/login.vue')
  },
  {
    path: '/register',
    name:'register',
    component: () => import('../pages/register.vue')
  },
  {
    path: '/homeadmin',
    name:'homeadmin',
    component: () => import('../pages/homeadmin.vue')
  },
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
