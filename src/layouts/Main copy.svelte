<script lang="ts">
    import { Route } from 'svelte-router-spa'

    // import layout controls
    import Header from './Header.svelte'
    import Footer from './materialify/Footer.svelte'

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

    <!-- Header -->
    <Header />
    
    <!-- our current content from routes -->
    <main >
        <Route {currentRoute} {params}/>
    </main>

    <!-- Footer -->
    <Footer />
    
</div>