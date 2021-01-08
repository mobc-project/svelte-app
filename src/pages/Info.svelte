<svelte:head>
	<title>Info</title>
</svelte:head>

<script lang="ts">
    import { Navigate, navigateTo, routeIsActive } from 'svelte-router-spa'
    
    import Page from '../layouts/Type01.svelte'

    // from Router
    export let currentRoute
    export let params

</script>

<style>
    .active {
        color: green;
    }

    .inactive {
        color: red;
    }

    .page {
        
        height: 100%;
    }

</style>

<div class="page">
    <Page transition="slide">

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

</div>