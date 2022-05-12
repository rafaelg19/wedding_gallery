import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ImageView from '../views/ImageView.vue'
import UploadView from '../views/UploadView.vue'
import ApproveView from '../views/ApproveView.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
	{
		path: '/',
		name: 'login',
		component: LoginView
	},
	{
		path: '/register',
		name: 'register',
		component: RegisterView
	},
  {
    path: '/gallery',
    name: 'gallery',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/GalleryView.vue')
  },
	{
		path: '/upload',
		name: 'upload',
		component: UploadView
	},
	{
		path: '/approve',
		name: 'approve',
		component: ApproveView
	},
	{
		path: '/image/:id',
		name: 'image',
		component: ImageView,
		props: true
	},
	{
		path: '/:catchAll(.*)',
		name: 'not-found',
		component: NotFound
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

export default router

