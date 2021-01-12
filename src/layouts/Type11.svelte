<svelte:head>
	<title>{title}</title>
</svelte:head>

<script lang="ts">

    //*************************************
    //* Type11 -> modal
    //* 
    //*************************************

    export let transition
    export let title = ""
    export let fullscreen = true

    // style="" from child 
    let stylish = $$props.style

</script>

<div style="{stylish}">
    
    <slot name="header"></slot>
    <slot name="content"></slot>
    <slot name="footer"></slot>

</div>
