import { createApp } from 'vue';
import App from './App.vue';
import './main.css';
import router from './router/index.js';
import store from './store';

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
