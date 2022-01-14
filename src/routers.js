import { createRouter, createWebHistory } from "vue-router"
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import Services from './components/Services.vue'
import Logout from './components/Logout.vue'
import Signup from './components/Signup.vue'

const routes = [
    {// different objects of the routes
        
        name: "Home",
        component: Home,
        path: "/",
    },  
    {
        name: "Services",
        component: Services,
        path: "/services",
    },
    {
        name: "Signup",
        component: Signup,
        path: "/signup",
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
    {
        name: "Logout",
        component: Logout,
        path: "/logout",
    },

];

//create router is a function which has 2 parametrs
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;