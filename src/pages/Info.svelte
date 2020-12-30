<svelte:head>
	<title>Info</title>
</svelte:head>

<script lang="ts">
    import { routeIsActive } from 'svelte-router-spa'
    import Page from '../components/Slide.svelte'

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

</style>

<Page>
    {JSON.stringify(currentRoute?.childRoute?.namedParams?.id)}
    Info{JSON.stringify(params)}

    <a href="/#" class:active={routeIsActive('/info')} class:inactive={routeIsActive(`/info/show/${currentRoute?.childRoute?.namedParams?.id}`)}>
        Say hello
      </a>

</Page>