<svelte:head>
	<link rel="stylesheet" href="//cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css">
</svelte:head>

<script lang="ts">
	import { onMount } from 'svelte'

	 // router
	 import { Route } from 'svelte-router-spa'

	// Dialog parameters
    import { paramsDlg } from '../../stores/dialog'

	// settings & media queries
    import { settings } from '../../settings'
    
	// materialify
	import { MaterialApp } from 'svelte-materialify'
	
	// header + footer
	import Header from './Header.svelte'
	import Footer from './Footer.svelte'

	// properties from Router
    export let currentRoute: any 
	export let params: any 

	//
    let ctrlHeader
    let hasHeader = true
    let headerHeight = 0

    let ctrlFooter
    let hasFooter = true
    let footerHeight = 0

	let title = ""
	
	// responsitiv
    $ : if ($paramsDlg.title) {
		title = $paramsDlg.title
		
		// set header & footer
        hasHeader = $paramsDlg.hasHeader
        hasFooter = $paramsDlg.hasFooter
		
        if (ctrlHeader && hasHeader) {
            headerHeight = ctrlHeader.height
		}
		else {
			headerHeight =  0	
		}

        if (ctrlFooter && hasFooter) {
            footerHeight = ctrlFooter.height
		}
		else {
			footerHeight = 0
		}
    }
	
	// on init
    onMount( async() => { 
		console.log("create Main Page...")
    })
	
</script>

<style>
    main {
       overflow: hidden
    }
</style>

<!-- Material APP -->
<MaterialApp theme={settings.layout?.theme || 'dark'} >
	<div>
		<!-- Header -->
		{#if hasHeader}
			<Header
				bind:this="{ctrlHeader}"
				color="{settings.layout?.header_color}"
				hasBackBtn={false}
				hasMenuBtn={true}
				appName="{settings.layout?.header_title}"
				title="{title}"
			>
			</Header>
		{/if}

		<!-- our current content from routes-->
        <main style="height: calc(100vh - {(headerHeight + footerHeight)}px">
            <Route {currentRoute} {params}/>
        </main>

		<!-- Footer -->
		{#if hasFooter}
			<Footer
				bind:this="{ctrlFooter}"
				color="{settings.layout?.footer_color || settings.layout?.header_color}"
				text="{settings.layout?.footer_title}"
			>
			</Footer>
		{/if}

	</div>
</MaterialApp >
