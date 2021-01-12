<script>
	import { slide, fly, crossfade } from 'svelte/transition';
	import { quintOut, quintIn, quintInOut, elasticInOut, backInOut } from 'svelte/easing';
	
</script>

<style> 
 
 
</style> 

<div transition:fly="{{delay: 5, duration: 400, x: 2000, y:0, opacity: 0.5, easing: quintInOut}}">
	<slot />
</div>
