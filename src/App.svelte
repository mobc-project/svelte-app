<script lang="ts">
	import HelloWorld from './components/HelloWorld.svelte'

	export let name: string

	

	// register service-worker
	if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js');
	}

	
	
</script>

<style>
	
</style>

<main>
	<HelloWorld {name}/>
</main>
