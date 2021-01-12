<svelte:head>
	<link rel="stylesheet" href="//cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css">
</svelte:head>

<script lang="ts">
	// settings & media queries
    import { settings } from '../../settings'
    
	// Main Page global
	import MainPage from '../Main.svelte'

	// materialify
	import { MaterialApp } from 'svelte-materialify'
	
	// header + footer
	import Header from './Header.svelte'
	import Footer from './Footer.svelte'

	// properties from Router
    export let currentRoute: any 
	export let params: any 
	
</script>

<style>
    
</style>

<!-- Material APP -->
<MaterialApp theme={settings.layout?.theme || 'dark'} >
	<MainPage
		currentRoute={currentRoute}
		params={params}
		headerHeight={settings.layout?.header}
		footerHeight={settings.layout?.footer}
	>
		<!-- Header -->
		<div slot="header">
			<Header
				color="{settings.layout?.header_color}"
				hasBackBtn={false}
				hasMenuBtn={true}
				appName="{settings.layout?.header_title}"
				title="{currentRoute.component.name}"
			>
			</Header>
		</div>

		<!-- Footer -->
		<div slot="footer">
			<Footer
				color="{settings.layout?.footer_color || settings.layout?.header_color}"
				text="{settings.layout?.footer_title}"
			>
			</Footer>
		</div>

	</MainPage>
</MaterialApp >
