
<script lang="ts">
    
    // Router
    import { Navigate, navigateTo, routeIsActive } from 'svelte-router-spa'

    // app settings and media-queries
    import { settings, media, mainRoute, mainMenu, } from '../settings'
    
    // Pagetype
    import Page from '../layouts/Type01.svelte'

    // from Router
    export let currentRoute
    export let params

    function handleCreate(evt) {
        console.log("create", evt.detail.title)
    }

</script>

<style>
   
</style>


<Page 
    transition="slide"
    title="Info über"
    on:create={handleCreate}
>

        <!--
        {JSON.stringify(currentRoute?.childRoute?.namedParams?.id)}
        Info{JSON.stringify(params)}
         -->
        Info{JSON.stringify(params)}

        <Navigate to="/" >Home</Navigate>

        <!--
        <a href="/#" class:active={routeIsActive('/info')} class:inactive={routeIsActive(`/info/show/${currentRoute?.childRoute?.namedParams?.id}`)}>
            Say hello
        </a>
        -->

</Page>
