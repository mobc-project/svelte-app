<script lang="ts">

    // router
	import { Route } from 'svelte-router-spa'

    // for Header & Footer
    export let headerHeight: number = 0 // height in Pixel / 0 = no Header
    export let footerHeight: number = 0 // height in Pixel / 0 = no Footer

    // properties for Router
    export let currentRoute: any 
	export let params: any 
    
</script>

<style>
    main {
       overflow: hidden
    }     
</style>

<div>
    <!-- default slot ?? -->
    <slot></slot>

    <!-- Header -->
    {#if headerHeight}
        <slot name="header">
        </slot>
    {/if}

    <!-- our current content from routes-->
    <slot name="content">
        <main style="height: calc(100vh - {(footerHeight + headerHeight)}px">
            <Route {currentRoute} {params}/>
        </main>
    </slot>

    <!-- Footer -->
    {#if footerHeight}
        <slot name="footer">
        </slot>
    {/if}
</div>