<svelte:head>
	<title>Home</title>
</svelte:head>

<script lang="ts">

    import Page from '../layouts/Type01.svelte'

    import { Navigate, navigateTo} from 'svelte-router-spa'

    // app settings and media-queries
    import { setting } from '../stores/setting'
    
    // from Router
    export let currentRoute
    export let params
    //export let title = "Home"

    let h = 96

    function goto(name: string): any {
        //console.log('clicked ...')
        navigateTo(name)
    }

    function test(evt) {
        console.log("event is",evt)
    }
    // height: `calc(100vh - 96}px`);
    
</script>

<style>

    .test {
        
        height: 100%;
        
    }
</style>

<div class="test" >
    <Page transition="slides">
    Home
<!--
    <Navigate to="/about">About </Navigate>
-->
    <button on:click="{() => goto('/info' )}">Info</button>
   
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
</div>