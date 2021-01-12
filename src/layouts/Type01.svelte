<svelte:head>
	<title>{title}</title>
</svelte:head>

<script lang="ts">
    // https://stackoverflow.com/questions/59919457/svelte-transitions-how-to-make-incoming-in-dynamic-svelte-component-transitio

    //*************************************
    //* Type01
    //* 
    //*************************************

    // on Mount
    import { onMount, createEventDispatcher } from 'svelte'

    // import all transitions
    import Slide from '../components/Slide.svelte'
   
    // prperties
    export let transition
    export let title = ""

    // event dispatcher
    const dispatch = createEventDispatcher()

    // style="" from child 
    let stylish = $$props.style

    // on mount
	onMount( async () => { 

        dispatch('create', { 
            title: title
        }) 
        
    })
    
</script>

<div style="height: 100%; {stylish}">
    {#if transition === "slide"}
        <Slide>
            <slot></slot>
        </Slide>
    {:else}
        <slot></slot>
    {/if}
</div>
