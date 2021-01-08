<script lang="ts">
    import { Route } from 'svelte-router-spa'

    // from Router
    export let currentRoute
    export let params = {}

</script>

<style>
    :global(body) {
        display: flex;
        flex-direction: column;
        overscroll-behavior-y: contain; 
    }
    
    main {
        margin: 10px;
        height: 100%;
    }
</style>

<div>

    <!-- our current content from routes -->
    <main >
        <Route {currentRoute} {params}/>
    </main>

</div>