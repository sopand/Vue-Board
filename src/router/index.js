import { createRouter, createWebHistory } from 'vue-router';
import ListView from '../views/ListView.vue';
import CreateView from '../views/CreateView.vue';
const routes = [
	{
		path: '/',
		component: ListView,
	},
	{
		path: '/board/add',
		component: CreateView,
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
