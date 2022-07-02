import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SongView from '../views/SongView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/search', component: SongView }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
