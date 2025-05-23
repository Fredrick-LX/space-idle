import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/start/Login.vue';
import Register from '../components/start/Register.vue';
import ResetPassword from '../components/start/ResetPassword.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/reset-password',
            name: 'ResetPassword',
            component: ResetPassword
        },
        {
            path: '/game',
            name: 'Game',
            component: () => import('../views/Game.vue'),
            meta: { requiresAuth: true }
        }
    ]
});

// 路由守卫
router.beforeEach((to, _, next) => {
    const isAuthenticated = localStorage.getItem('user');

    if (to.meta.requiresAuth && !isAuthenticated) {
        next('/login');
    } else {
        next();
    }
});

export default router; 