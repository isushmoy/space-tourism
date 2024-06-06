import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './components/Home.vue';
import Destination from './components/Destination.vue';
import Crew from './components/Crew.vue';
import Technology from './components/Technology.vue';
import NotFound from './components/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/destination', component: Destination },
  { path: '/crew', component: Crew },
  { path: '/technology', component: Technology },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
