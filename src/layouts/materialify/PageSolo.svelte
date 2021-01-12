<svelte:head>
	<link rel="stylesheet" href="//cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css">
</svelte:head>

<script lang="ts">
	// settings & media queries
    import { settings } from '../../settings'
    
	// Main Page global
	import MainPage from '../Main.svelte'

	// materialify
	import { Dialog } from 'svelte-materialify'
	
	// header + footer
	import Header from './Header.svelte'
	import Footer from './Footer.svelte'

	// properties from Router
    export let currentRoute: any 
	export let params: any 
	
</script>

<style>
    
</style>

<Dialog fullscreen bind:active>
    <h2>About</h2>
</Dialog>