//路由表

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('@/view/Main.vue'),
       
    }
]

const router = new Router({
    mode: 'history',
    routes: routes,
});

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default router;