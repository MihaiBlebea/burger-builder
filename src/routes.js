import * as component from './containers/exports.js';

console.log(component)
const routes = [
    { linkName: 'Home', link: '/', component: component.Home, show: false },
    { linkName: 'Home', link: '/home', component: component.Home, show: true },
    { linkName: 'Builder', link: '/burger-builder', component: component.BurgerBuilder, show: true },
    { linkName: 'Checkout', link: '/checkout', component: component.Checkout, show: false },
    { linkName: 'Orders', link: '/orders', component: component.Orders, show: true },
    { linkName: 'Contact', link: '/contact', component: component.Contact, show: true }
]

export default routes;
