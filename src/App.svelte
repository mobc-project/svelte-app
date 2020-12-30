<script lang="ts">
	import { Router } from 'svelte-router-spa'
  	import { routes } from './routes'

	/*
	const width = 600
	const height = 800

	//
	window.addEventListener('resize', () => {
      window.resizeTo(width, height)
    })
	*/

	// register service-worker
	if ('serviceWorker' in navigator) {
      //navigator.serviceWorker.register('/service-worker.js');
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
