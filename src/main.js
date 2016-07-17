import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueTouch from 'vue-touch'

import App from './App'
import routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueTouch);

const router = new VueRouter({
  history: true,
  linkActiveClass: 'active'
});

router.map(routes);

window.addEventListener('DOMContentLoaded', () => {
  router.start(App, '#app');
});