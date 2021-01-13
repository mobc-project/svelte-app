<svelte:head>
	<title>{title}</title>
</svelte:head>

<script lang="ts">

    // on Mount
    import { onMount, createEventDispatcher } from 'svelte'

    // import all transitions
    import Slide from '../components/Slide.svelte'

    // Dialog / user parameters
    import { paramsDlg, user } from '../stores/dialog'

    // Login Dialog
    import LoginDlg from '../pages/Login.svelte'
   
    // properties
    export let transition
    export let title = ""

    // event dispatcher
    const dispatch = createEventDispatcher()

    // add all style="" from child 
    let stylish = $$props.style

    // reference 
    let checkauth

    // responsitiv
    $ : if ($paramsDlg.title) {
        checkauth = $paramsDlg.checkauth
    }

    // on mount
	onMount( async () => { 

        console.log("create content", title)

        // dispatch on:create
        dispatch('create', { 
            title: title
        }) 

    })
    
</script>

{#if checkauth && !$user.auth}
    <LoginDlg 
        active={true}
    >
    </LoginDlg>
{:else}
    <div style="height: 100%; {stylish}">

        {#if transition === "slide"}
            <Slide>
                <slot></slot>
            </Slide>
        {:else}
            <slot></slot>
        {/if}

    </div>

{/if}



