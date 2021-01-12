<svelte:head>
	<title>About</title>
</svelte:head>

<script lang="ts">

    import { onMount } from 'svelte'
    import { paramsDlg } from '../stores/dialog' 

    // Router
    import { Navigate, navigateTo} from 'svelte-router-spa'

    
    // Pagetype
    import Page from '../layouts/Type01.svelte'
    
    // set by Router
    export let currentRoute
    export let params

    // settings for page
    let pageSettings = {
        hasHeader: true
    }
    //$paramsDlg.hasHeader = true
    $paramsDlg = pageSettings

    //
    onMount( async() => { 
        
        // set params for dialog
        //$paramsDlg.hasHeader = true
    })


</script>

<!--
<Dialog fullscreen bind:active>
    <h2>About</h2>
</Dialog>
-->

<!--
<Page 
    transition="slide"
    title="About"
>

    <h2>About</h2>
</Page>
-->

<h2>About</h2>
Info{JSON.stringify(currentRoute)}
Info{JSON.stringify(params)}