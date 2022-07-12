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
            /* 物料管理 start */
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
                    bread: [{ name: 'itemManagement', path: '/item-library' }, { name: 'groupLibrary', path: '/group-library' }],/* 默认第一级面包屑显示管理下面的第一个项目 */
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
            /* 物料管理 end */


            /* Report start*/
            /* --vm dashboard */
            {
                path: 'vm-dashboard',
                name: 'vmDashboard',
                component: () =>
                    import('@modules/report/vm-dashboard'),
                meta: {
                    menuActive:'vm-dashboard',
                    bread: [{ name: 'Dashboard', path: '/vm-dashboard' }],
                    permission:'dc92d02b-a0ab-42f6-923e-4f2d2d8e8a95'
                },
            },
            /* Report end */


            /* 项目管理 start */
            /* --mass production */
            {
                path: 'mass-production',
                name: 'Mass Production',
                component: () =>
                    import(
                        '@modules/progress-management/mass-production/mass-production-list'
                    ),
                meta: {
                    menuActive:'mass-production',
                    permission:'4c673035-3cb5-42fc-a6f3-6a9fc6c619ef',
                    bread: [{ name: 'projectManagement', path: '/mass-production' }, { name: 'massProduction', path: '/mass-production' }],
                    routerParent: 'Mass Production',
                    name: 'massProduction',
                    tabId: '38',
                    path: 'mass-production',
                    pageType: 'list',
                },
            },
            {
                path: 'mass-production-detail',
                name: 'Mass Production Detail',
                component: () =>
                    import(
                        '@modules/progress-management/mass-production/mass-production-detail'
                    ),
                meta: {
                    menuActive: 'mass-production',
                    permission:'4c673035-3cb5-42fc-a6f3-6a9fc6c619ef',
                    bread: [{ name: 'projectManagement', path: '/mass-production' }, { name: 'massProduction', path: '/mass-production' }, { name: 'massProductionDetail', path: '/mass-production-detail' }],
                    routerParent: 'Mass Production',
                    name: 'massProduction',
                    tabId: '38',
                    pageType: 'detail',
                },
            },
            /* --new counter */
            {
                path: 'new-counter',
                name: 'New Opening',
                component: () =>
                    import(
                        '@modules/progress-management/new-counter/new-counter-list'
                    ),
                meta: {
                    menuActive:'new-counter',
                    permission:'4c673035-3cb5-42fc-a6f3-6a9fc6c619ef',
                    bread: [{ name: 'projectManagement', path: '/new-counter' }, { name: 'newOpening', path: '/new-counter' }],
                    routerParent: 'Progrect Management',
                    name: 'newOpening',
                    tabId: '37',
                    path: 'new-counter',
                    pageType: 'list',
                },
            },
            {
                path: 'new-counter-detail',
                name: 'Counter Detail',
                component: () =>
                    import(
                        '@modules/progress-management/new-counter/new-counter-detail'
                    ),
                meta: {
                    menuActive: 'new-counter',
                    permission:'4c673035-3cb5-42fc-a6f3-6a9fc6c619ef',
                    bread: [{ name: 'projectManagement', path: '/new-counter' }, { name: 'newOpening', path: '/new-counter' }, { name: 'counterDetail', path: '/new-counter-detail' }],
                    routerParent: 'Progrect Management',
                    name: 'newOpening',
                    tabId: '37',
                    pageType: 'detail',
                },
            },
            /* 项目管理 end */

            /* Store M start */
            {
                path: 'store-management',
                name: 'Store Management',
                component: () => import('@modules/store-management/store-list'),
                meta: {
                    menuActive: 'store-management',
                    bread: [{ name: 'storeManagement', path: '/store-management' }],
                    // isKeep: true,
                    permission:'d1e4c06f-9ce2-4b0e-86ee-770535e5fb6e',
                    routerParent: 'Store Management',
                    name: 'storeManagement',
                    tabId: '18',
                    path: 'store-management',
                },
            },
            {
                path: 'store-list-storeInformation',
                name: 'Store List StoreInformation',
                component: () => import('@modules/store-management/store-list-storeInformation'),
                meta: {
                    menuActive:'store-management',
                    permission:'d1e4c06f-9ce2-4b0e-86ee-770535e5fb6e',
                    bread: [{ name: 'storeManagement', path: '/store-management' },{ name: 'storeManagementDetail', path: '/store-list-storeInformation' }],
                    name: 'Store Management Detail',
                },
            },
            /* Store M end */


            /* Counter M start */
            {
                path: 'counter-management',
                name: 'Counter Management',
                component: () => import('@modules/counter-management/counter-list'),
                meta: {
                    menuActive: 'counter-management',
                    permission:'0d157751-3f26-4311-ab74-8514050e6091',
                    bread: [{ name: 'counterManagement', path: '/counter-management' }],
                    isKeep: true,
                    routerParent: 'Counter Management',
                    name: 'counterManagement',
                    tabId: '13',
                    path: 'counter-management',
                },
            },
            {
                path: 'counter-list-counterInformation',
                name: 'Counter List CounterInformation',
                component: () =>
                    import('@modules/counter-management/counter-list-counterInformation'),
                meta: {
                    menuActive:'counter-management',
                    permission:'0d157751-3f26-4311-ab74-8514050e6091',
                    bread: [{ name: 'counterManagement', path: '/counter-management' },{ name: 'counterManagementDetail', path: '/counter-managements' }],
                },
            },
            /* Counter M end */

            /* Inventory M start */
            {
                path: 'inventory-management',
                name: 'Inventory Management',
                component: () => import('@modules/inventory-management/inventory-list'),
                meta: {
                    menuActive: 'inventory-management',
                    bread: [{ name: 'inventoryManagement', path: '/inventory-management' }],
                    routerParent: 'Inventory Management',
                    name: 'inventoryManagement',
                    permission:'bb7ed9e0-7112-4ed5-833c-9f4c975a5a41',
                    tabId: '19',
                    path: 'inventory-management'
                }
            },
            {
                path: 'inventory-management-detail',
                name: 'Inventory Management Detail',
                component: () => import('@modules/inventory-management/inventory-detail'),
                meta: {
                    menuActive:'inventory-management',
                    permission:'bb7ed9e0-7112-4ed5-833c-9f4c975a5a41',
                    bread: [{ name: 'inventoryManagement', path: '/inventory-management' }, { name: 'inventoryManagementDetail', path: '/inventory-management-detail' }],
                }
            },
            /* Inventory M end */


            /* Supplier M start */
            {
                path: 'supplier-management',
                name: 'Supplier Management',
                component: () => import('@modules/supplier-management/supplier-list'),
                meta: {
                    menuActive: 'supplier-management',
                    bread: [{ name: 'supplierManagement', path: '/supplier-management' }],
                    routerParent: 'Supplier Management',
                    name: 'supplierManagement',
                    permission:'2e56e15b-a358-4c01-8100-c805de1bbd39',
                    tabId: '28',
                    path: 'supplier-management'
                }
            },
            {
                path: 'supplier-detail',
                name: 'Supplier Detail',
                component: () => import('@modules/supplier-management/supplier-detail'),
                meta: {
                    menuActive:'supplier-management',
                    permission:'2e56e15b-a358-4c01-8100-c805de1bbd39',
                    bread: [{ name: 'supplierManagement', path: '/supplier-management' }, { name: 'Supplier Detail', path: '/Supplier-detail' }],
                }
            },
            /* Supplier M end */

            
            /* User M start */
            {
                path: 'user',
                name: 'User',
                component: () =>
                    import('@modules/user-management/user'),
                meta: {
                    menuActive:'user',
                    isKeep: true,
                    menuActive: 'user',
                    permission:'b5e3faf8-a616-4da5-8e6c-32d5c3ac1736',
                    bread: [{ name: 'userManagement', path: '/user' }, { name: 'userData', path: '/user' }],
                    routerParent: 'User Management',
                    name: 'userData',
                    tabId: '20',
                    path: 'user',
                },
            },
            {
                path: 'user-detail',
                name: 'User Detail',
                component: () =>
                    import('@modules/user-management/user/user-detail.vue'),
                meta: {
                    menuActive: 'user',
                    permission:'b5e3faf8-a616-4da5-8e6c-32d5c3ac1736',
                    bread: [{ name: 'userManagement', path: '/user' }, { name: 'userData', path: '/user' }, { name: 'addUser', path: '/user-detail' }],
                    // routerParent: 'User Management',
                    // name: 'User Detail',
                    // tabId: '21',
                    // path: 'user-detail',
                },
            },
            /* User M end */
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