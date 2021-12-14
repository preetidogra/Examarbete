import { createRouter, createWebHistory } from "vue-router"
import SignIn from './components/SignIn.vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import Services from './components/Services.vue'

const routes = [
    {// different objects of the routes
        
        name: "Home",
        component: Home,
        path: "/",
    },
    {
        name: "SignIn",
        component: SignIn,
        path: "/signin",
    },
    {
        name: "Services",
        component: Services,
        path: "/services",
    },
    {
        name: "Contact",
        component: Contact,
        path: "/contact",
    },
    {
        name: "Login",
        component: Login,
        path: "/login",
    },
    

];

//create router is a function which has 2 parametrs
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;