<script lang="ts">
    import Slide from '../components/Slide.svelte'
   
    export let transition
    
</script>

{#if transition === "slide"}
    <Slide>
        <slot></slot>
    </Slide>
{:else}
    <slot></slot>
{/if}

