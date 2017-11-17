import { Home, BurgerBuilder } from './containers/exports.js';

const routes = [
    { linkName: 'Home', link: '/', component: Home, show: false },
    { linkName: 'Home', link: '/home', component: Home, show: true },
    { linkName: 'Builder', link: '/burger-builder', component: BurgerBuilder, show: true },
    { linkName: 'Checkout', link: '/checkout', component: Home, show: false },
    { linkName: 'Orders', link: '/orders', component: Home, show: true }
]

export default routes;
