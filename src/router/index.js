import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import GalleryView from '../views/GalleryView.vue'
import GalleryDetails from '../components/gallery/GalleryDetails.vue'
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
		component: GalleryView,
		children: [
			{
				path: ':index',
				component: GalleryDetails,
				props: true,
				meta: {
					showModal: true
				}
			}
		]
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

