import { createRouter, createWebHistory } from 'vue-router';
import ListView from '../views/ListView.vue';
import CreateView from '../views/CreateView.vue';
import LoginView from '@/views/LoginView.vue';
const routes = [
	{
		path: '/',
		component: ListView,
	},
	{
		path: '/user/add',
		component: CreateView,
	},
	{
		path: '/user/login',
		component: LoginView,
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
