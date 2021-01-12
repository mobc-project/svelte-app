// import all layouts
import Main from "./layouts/materialify/PageMain.svelte"
import Modal from "./layouts/materialify/PageModal.svelte"
//import Layout from "./layouts/materialify/Main.svelte"

// import all pages
import Home from "./pages/Home.svelte"
import Info from "./pages/Info.svelte"
import About from "./pages/About.svelte"

// all routes
export const main = [
    {
        name: '/',
        layout: Main,
        component: Home,
    },

    {
        name: '/info',
        layout: Main,
        component: Info,

        nestedRoutes: [
            {
                name: 'show/:id',
                layout: Main,
                component: Info,
            }
           
        ]
    },

    {
        name: 'about',
        params:"willi from Dialog",
        layout: Modal,
        component: About,
        
    },
    
]
