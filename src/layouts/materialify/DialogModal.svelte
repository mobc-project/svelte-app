<script lang="ts">
    import { onMount } from 'svelte'

    // Dialog parameters
    import { paramsDlg } from '../../stores/dialog'
    
	// settings & media queries
    import { settings } from '../../settings'
    
    // materialify
	import { MaterialApp, Dialog } from 'svelte-materialify'
	
    // properties
    export let theme = settings.layout?.theme || 'dark'
    export let active = false
    export let fullscreen = false
    export let persistent = false
    export let height = 0
    export let width = 0
    
    // overlay settings
    let overlay = {
        opacity: 0 
    }

    // on init
    onMount( async() => { 
        console.log("create Modal Dialog ...")
    })

</script>

<style>
    
</style>

<MaterialApp theme={theme}>
    <Dialog 
        bind:active
        overlay={overlay}
        fullscreen={fullscreen}
        persistent={persistent}
    >

    {#if fullscreen || height || width}
        <div style="height: {height}px; width: {width}px;">
            <slot></slot>
        </div>
    {:else}
        <div>
            <slot></slot>
        </div>
    {/if}

    </Dialog>
</MaterialApp >