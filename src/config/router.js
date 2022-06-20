/* 
    路由表
    meta:简单来说就是路由元信息，也就是每个路由身上携带的信息
    当一个路由匹配成功后，它可能匹配多个路由记录
*/

import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Main',
        component: () => import('@/view/Main.vue'),
        children:[
            {
                path: 'item-library',
                name: 'Item Library',
                component: () =>
                    import('@modules/material-management/item-management/item-library.vue'),
                meta: {
                    menuActive:'item-library',
                    bread: [{ name: 'itemManagement', path: '/item-library' }, { name: 'itemLibrary', path: '/item-library' }],
                    routerParent: 'Item Management',
                    name: 'itemLibrary',
                    tabId: '15',
                    permission:'fe21dbf8-0a6a-4fd6-8db0-3f0a28a9906b',
                    path: 'item-library',
                    isKeep: true,
                },
            },
            {
                path: 'nodata',
                name: 'noData',
                component: () => import('@modules/nodata'),
                meta: {
                    menuActive:'nodata',
                    name: 'nodata',
                    tabId: '0',
                    path: 'nodata',
                },
            },
            /* {
                path: 'details-item',
                name: 'Item Details',
                component: () =>
                    import(
                        '@modules/material-management/item-management/item-category-detail/details-item'
                    ),
                meta: {
                    menuActive:'item-library',
                    permission:'fe21dbf8-0a6a-4fd6-8db0-3f0a28a9906b',
                    bread: [{ name: 'itemManagement', path: '/item-library' }, { name: 'itemLibrary', path: '/item-library' },{name:'',path:'/details-item'}],

                },
            }, */
            {
                path: 'group-library',
                name: 'Group Library',
                component: () =>
                    import('@modules/material-management/item-management/group-library.vue'),
                meta: {
                    menuActive:'group-library',
                    bread: [{ name: 'itemManagement', path: '/item-library' }, { name: 'groupLibrary', path: '/group-library' }],
                    // routerParent: 'Group Management',/* TODO */
                    routerParent: 'Item Management',
                    name: 'groupLibrary',
                    tabId: '16',
                    permission:'c60ced38-924f-4e7d-83a1-6a8ae89e1486',
                    path: 'group-library',
                    isKeep: true,
                },
            },
            /* {
                path: 'details-group',
                name: 'Group Details',
                component: () =>
                    import(
                        '@modules/material-management/item-management/item-category-detail/details-group'
                    ),
                meta: {
                    menuActive:'group-library',
                    permission:'c60ced38-924f-4e7d-83a1-6a8ae89e1486',
                    bread: [{ name: 'itemManagement', path: '/item-library' }, { name: 'groupLibrary', path: '/group-library' },{name:'',path:'/details-group'}],
                },
            }, */
            {
                path: 'category-library',
                name: 'Category Library',
                component: () =>
                    import(
                        '@modules/material-management/item-management/category-library'
                    ),
                meta: {
                    menuActive: 'category-library',
                    bread: [{ name: 'itemManagement', path: '/item-library' }, { name: 'categoryLibrary', path: '/category-library' }],
                    // routerParent: 'Category Management',
                    routerParent: 'Item Management',
                    name: 'categoryLibrary',
                    tabId: '17',
                    permission:'fef7e208-96f7-4f29-936c-7acb270956d9',
                    path: 'category-library',
                    isKeep: true,
                },
            },
            /* {
                path: 'details-category',
                name: 'Category Details',
                component: () =>
                    import(
                        '@modules/material-management/item-management/item-category-detail/details-category'
                    ),
                meta: {
                    menuActive:'category-library',
                    permission:'fef7e208-96f7-4f29-936c-7acb270956d9',
                    bread: [{ name: 'itemManagement', path: '/item-library' }, { name: 'categoryLibrary', path: '/category-library' },{name:'',path:'/details-category'}],
                },
            }, */
            /* {
                path: 'details-texture-accessory',
                name: 'Ratecard Details',
                component: () =>
                    import(
                        '@modules/material-management/item-management/item-category-detail/details-texture-accessory'
                    ),
                meta: {
                    menuActive:'ratecard',
                    permission:'6e5ecd30-5494-4b70-b04a-3b2589900ff4',
                    bread: [{ name: 'itemManagement', path: '/item-library' }, { name: 'ratecard', path: '/item-library' },{name:'Ratecard Details',path:'/details-texture-accessory'}],

                },
            }, */
            {
                path: 'light',
                name: 'Visual Library',
                component: () =>
                    import(
                        '@modules/material-management/item-management/light-library'
                    ),
                meta: {
                    menuActive: 'light',
                    bread: [{ name: 'itemManagement', path: '/item-library' }, { name: 'visualLibrary', path: '/light' }],
                    // routerParent: 'Visual Library',
                    routerParent: 'Item Management',
                    name: 'visualLibrary',
                    tabId: '30',
                    permission:'2f02c98b-88cd-483d-9798-1c085afe192a',
                    path: 'light',
                    isKeep: true,
                },
            },
            {
                path: 'ratecard',
                name: 'Ratecard',
                component: () =>
                    import(
                        '@modules/material-management/item-management/ratecard'
                    ),
                meta: {
                    menuActive: 'ratecard',
                    bread: [{ name: 'itemManagement', path: '/item-library' }, { name: 'ratecard', path: '/ratecard' }],
                    // routerParent: 'Ratecard',
                    routerParent: 'Item Management',
                    name: 'ratecard',
                    tabId: '29',
                    permission:'6e5ecd30-5494-4b70-b04a-3b2589900ff4',
                    path: 'ratecard',
                    isKeep: true,
                },
            },
            /* {
                path: 'details-light',
                name: 'Visual Details',
                component: () =>
                    import(
                        '@modules/material-management/item-management/item-category-detail/details-light'
                    ),
                meta: {
                    menuActive:'light',
                    permission:'2f02c98b-88cd-483d-9798-1c085afe192a',
                    bread: [{ name: 'itemManagement', path: '/item-library' }, { name: 'visualLibrary', path: '/light' },{name:'Visual Detail',path:'/details-light'}],

                },
            }, */
        ]
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