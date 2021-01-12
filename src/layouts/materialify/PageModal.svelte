<svelte:head>
	<link rel="stylesheet" href="//cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css">
</svelte:head>

<script lang="ts">
    import { onMount } from 'svelte'

    import { paramsDlg } from '../../stores/dialog'

    // router
    import { Route } from 'svelte-router-spa'
    
	// settings & media queries
    import { settings } from '../../settings'
    
    // materialify
	import { MaterialApp, Dialog } from 'svelte-materialify'
	
	// header + footer
	import Header from './Header.svelte'
	import Footer from './Footer.svelte'

	// properties from Router
    export let currentRoute: any 
    export let params: any 
    
    // flag for active 
    let active = true;

    let hasHeader = true

    // overlay settings
    let overlay = {
        opacity: 0 
    }

    /*
    // responsitiv
    $ : if (currentRoute) {
        
    }
    */

    //
    onMount( async() => { 
        console.log('init Modal ....', $paramsDlg.hasHeader)

        hasHeader = $paramsDlg.hasHeader

    })
	
</script>

<style>
    
</style>

<MaterialApp theme={settings.layout?.theme || 'dark'}>
    <Dialog 
        
        fullscreen={true}
        bind:active
        overlay={overlay}
    >

        <!-- Header -->
        {#if hasHeader}
        <Header
            hasBackBtn={true}
            backToHome={true}
            hasMenuBtn={false}
            color="{settings.layout?.header_color}"
            appName="{settings.layout?.header_title}"
            title="{currentRoute.component.name}"
        >
        </Header>
        {/if}

        <!-- our current content from routes-->
        <main style="height: calc(100vh - {(settings.layout?.footer + settings.layout?.header)}px">
            <Route {currentRoute} {params}/>
        </main>

        <!-- Footer -->
        <Footer
            color="{settings.layout?.footer_color || settings.layout?.header_color}"
            text="{settings.layout?.footer_title}"
        >
        </Footer>

</Dialog>
</MaterialApp >