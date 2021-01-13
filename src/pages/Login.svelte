<script lang="ts">
    // Router
    import { Navigate, navigateTo } from 'svelte-router-spa'

    // Params for Dialog (PageMain or PageModal)
    import { user } from '../stores/dialog' 

    // settings & media queries
    import { settings } from '../settings'
    
    // layout Dialog Modal-Content
    import Dialog from '../layouts/materialify/DialogModal.svelte'

    // header 
    import Header from '../layouts/materialify/Header.svelte'
    
    // materialify
	import { Button, Icon  } from 'svelte-materialify'

    
    export let active

    function handleLogin() {
        console.log('handleLogin')
        $user.auth = true
    }

    function handleCancel() {
        
        window.history.back()
        active = false
    }

    //let ctrlDialog
    // bind:this="{ctrlDialog}"

</script>

<style>

</style>


<Dialog
    active={active}
    theme="light"
    persistent={false}
>
    <Header
        hasBackBtn={false}
        backToHome={false}
        hasMenuBtn={false}
        color="{settings.layout?.header_color}"
        title="Login"
    >
    </Header>

    <div class="text-center">

        <h4>LOGIN</h4>
        <h4>DATAS</h4>
    
        <Button 
            on:click={handleLogin}
            size="default" 
            class="blue white-text"
        >
            <Icon class="mdi mdi-pen mr-3" />
            Login
        </Button>

        <Button 
            on:click={handleCancel}
            size="default" 
            class="red white-text"
        >   
            <Icon class="mdi mdi-pen mr-3" />
            Abbruch
        </Button>
      </div>

</Dialog>


