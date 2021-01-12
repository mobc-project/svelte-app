<script lang="ts">

    // Router
    import { Navigate, navigateTo} from 'svelte-router-spa'

    // app settings and media-queries
    import { settings, media } from '../settings'

    // Pagetype
    import Page from '../layouts/Type01.svelte'
    
    // set by Router
    export let currentRoute
    export let params

    //
    function handleCreate(evt) {
        console.log("create", evt.detail.title)
    }

</script>

<style>

</style>


<Page 
    transition="slides" 
    title="Home"
    style1="background-color: red;"
    on:create={handleCreate}
>
    Home

<!--
    <Navigate to="/about">About </Navigate>
-->
    <button on:click="{() => navigateTo('/info' )}">Info</button>
   
<!--
    <button on:click="{ test }">Link Test</button>
    
    <button on:click="{ navigateTo }">Link Test</button>
    {JSON.stringify(currentRoute)}
     Du bist in {currentRoute.queryParams.id}
-->
<!--
    <button on:click="{() => goto('/info/show/333')}">Info (333)</button>
-->
</Page>


