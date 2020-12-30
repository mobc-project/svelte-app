<script>
	import { slide, fly } from 'svelte/transition';
	import { quintOut, quintInOut, elasticInOut, backInOut } from 'svelte/easing';
	
</script>

<style> 
 
 
</style> 

<div transition:fly="{{delay: 0, duration: 1000, x: 1000, y:0, opacity: 0.5, easing: quintInOut}}">
	<slot />
</div>
