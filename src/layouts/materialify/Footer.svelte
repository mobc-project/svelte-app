<script lang="ts">
    // materialify
    import { Footer } from 'svelte-materialify/src'

    // properties
    export let color: string
    export let text: string

</script>

<style>

</style>

<Footer 
    absolute 
    padless 
    class="{ color } justify-center flex-column"
>
    <div 
        class="{ color } pa-2 text-center" 
        style="width:100%"
    >
        {@html text}
    </div>
</Footer>