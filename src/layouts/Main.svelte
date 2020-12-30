<script lang="ts">

    import { Route } from 'svelte-router-spa'

    // import layout controls
    import Header from './Header.svelte'

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
    }
</style>

<div>

    <!-- Header: NavBar -->
    <Header />

    <!-- our current content from routes -->
    <main >
        <Route {currentRoute} {params}/>
    </main>

</div>