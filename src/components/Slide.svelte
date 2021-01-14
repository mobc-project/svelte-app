<script>

	//  https://svelte.dev/repl/0add35f59c6148cc8e5a415b2e38c83a?version=3.12.1
	// slide
	import { slide, fly, crossfade } from 'svelte/transition';
	import { quintOut, quintIn, quintInOut, elasticInOut, backInOut, cubicOut } from 'svelte/easing';
	
</script>

<style> 
 
 
</style> 

<div out:fly="{{delay: 0, duration: 400, x: 2000, y:0, opacity: 0.9, easing: quintInOut}}">
	<slot />
</div>
