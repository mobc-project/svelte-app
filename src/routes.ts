// import all layouts
//import Layout from "./layouts/Main.svelte"
import Layout from "./layouts/materialify/Main.svelte"

// import all pages
import Home from "./pages/Home.svelte"
import Info from "./pages/Info.svelte"
import About from "./pages/About.svelte"

// all routes
const routes = [
    {
        name: '/',
        layout: Layout,
        component: Home,
    },

    {
        name: '/info',
        layout: Layout,
        component: Info,

        nestedRoutes: [
            {
                name: 'show/:id',
                layout: Layout,
                component: Info,
            }
           
        ]
    },

    {
        name: 'about',
        layout: Layout,
        component: About,
    },
    
]

// export
export { routes }