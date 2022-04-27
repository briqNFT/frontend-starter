import { createApp } from 'vue';
import App from './App.vue';

// Import tailwind
import './index.css';

const app = createApp(App);

// Routing
import { createWebHistory, createRouter } from 'vue-router';
import { routes } from './Routes';
const router = createRouter({
    history: createWebHistory(),
    routes,
});
app.use(router);

app.mount('#app');
