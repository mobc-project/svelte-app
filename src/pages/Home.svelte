<svelte:head>
	<title>Home</title>
</svelte:head>

<script lang="ts">

    import { Navigate, navigateTo} from 'svelte-router-spa'
    
    // from Router
    export let currentRoute
    export let params

    function goto(name: string): any {
        console.log('clicked ...')
        navigateTo(name)
    }

    function test(evt) {
        console.log("event is",evt)
    }
    
</script>

<div>
    Home

    <Navigate to="/about">About </Navigate>

    <button on:click="{() => console.log('click')}">Link 1</button>
    
    <!--
    <button on:click="{ test }">Link Test</button>
    
    <button on:click="{ navigateTo }">Link Test</button>
    {JSON.stringify(currentRoute)}
     Du bist in {currentRoute.queryParams.id}
    -->
    <button on:click="{() => goto('/info/show/333')}">Link 2</button>
 

    
     
</div>