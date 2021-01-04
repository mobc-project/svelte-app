<script lang="ts">
	import { Router } from 'svelte-router-spa'
	import { routes } from './routes'
	import { setting } from './stores/setting'

	// fixed window size for PWA installed on Desktop
	if ($setting.is_fixed) {
		window.addEventListener('resize', () => {
			window.resizeTo($setting.fixed_w || 350, $setting.fixed_h || 400)
		})
	}
			
	// register service-worker
	if ($setting.is_pwa && $setting.serviceworker) {
		if ('serviceWorker' in navigator) {	
			  navigator.serviceWorker.register($setting.serviceworker);
		}
	}

</script>

<style>

	:global(body) {
        
        /* no autorefresh by pulling mobile browser */
        overscroll-behavior-y: contain;
	}
	
	
</style>

<div >
    <Router {routes} />
</div>
