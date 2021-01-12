<script lang="ts">
	// Router
	import { Router } from 'svelte-router-spa'

	// all APP settings + mainRoute
	import { settings, mainRoute } from './settings'
	
	// router options
	let options = {
		prefix: '', // Route prefix
		gaPageviews: false, // Google Analytics
		lang: '', // Localisation
	}

	// fixed window size for PWA installed on Desktop
	if (settings.is_pwa && settings.is_fixed) {
		window.addEventListener('resize', () => {
			window.resizeTo(settings.fixed_w || 360, settings.fixed_h || 640)
		})
	}
			
	// register service-worker
	if (settings.is_pwa && settings.serviceworker) {
		if ('serviceWorker' in navigator) {	
			  navigator.serviceWorker.register(settings.serviceworker);
		}
	}

	// get main routes for APP
	let routes = mainRoute 

</script>

<style>
	
</style>

<div >
    <Router {routes} {options} />
</div>
