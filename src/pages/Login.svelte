<script lang="ts">

    // Router
    import { navigateTo } from 'svelte-router-spa'

    // User from Dialog
    import { user } from '../stores/dialog' 

    // settings & media queries
    import { settings } from '../settings'
    
    // layout Dialog Modal-Content
    import Dialog from '../layouts/materialify/DialogModal.svelte'

    // header 
    import Header from '../layouts/materialify/Header.svelte'
    
    // materialify
    import { Row, Col, Button, Icon, TextField } from 'svelte-materialify'
    
    // Error Message
    import ErrorMSG from './Message.svelte'

    // properties    
    export let active
    export let title = "Anmelden"

    let show = false
    let username: string = $user.name || ""
    let password: string = ""

    let showError = false
    const maxTry = 3
    let currTry = 1

    // check logged in
    function handleLogin() {
        // console.log('handleLogin', $user.name)

        //
        if (username === "willi" && password === "butz") {
            $user.auth = true
        }

        // check if auth
        if (!$user.auth) {
            password = ""

            if (currTry <= maxTry) {
                currTry += 1
                // show Message
                showError = true
            }
            else {
                // go to Help Page
                navigateTo('/help')
                active = false
            }

            
        }
        else {
            // set values
            $user.name = username
            active = false
        }

    }

    // cancel on login
    function handleCancel() {
        active = false
        navigateTo('/')
        //window.history.back()
    }

    // login-dlg is created
    function handleCreate() {
    }

    // login-dlg is opened
    function handleOpen() {
        console.log('Login openend ...')
    }

    // login-dlg is closed
    function handleClose() {
        console.log('Login closed ...')
        
       // $user.name = username
    }

</script>

<style>

</style>

<!-- modal Dialog -->
<Dialog
    active={active}
    theme="light"
    persistent={true}
    opacity={0.92}
    on:create={handleCreate}
    on:open={handleOpen}
    on:close={handleClose}
>
    <!-- show Error -->
    <ErrorMSG
        bind:active={showError}
        persistent={false}
        title="ein Fehler ist aufgetreten !"
        content="Der Username und/oder das Passwort stimmen nicht überein !!! bitte überprüfen Sie Ihre Eingaben ...."
    >
    </ErrorMSG>

    <!-- header -->
    <Header
        hasBackBtn={false}
        backToHome={false}
        hasMenuBtn={false}
        color="{settings.layout?.header_color} white-text"
        title="{title}"
    >
    </Header>

    <!-- content -->
    <div class="text-center ma-3">

        <Row>
            <Col>
                <TextField 
                    bind:value={username}
                    dense 
                    outlined
                >
                    Name
                </TextField>

                <br />
                <TextField 
                    bind:value={password}
                    dense
                    outlined
                    type={show ? 'text' : 'password'}
                >
                    Password
                    <div
                      slot="append"
                      on:click={() => {
                        show = !show;
                      }}>
                      <Icon class="mdi mdi-{show ? 'eye-off' : 'eye'}" />
                    </div>
                  </TextField>
              </Col>
        </Row>
        
        <Button 
            on:click={handleLogin}
            size="default" 
            depressed
            outlined
            class="{settings.layout?.header_color} text-center mr-2"
        >
            <Icon class="mdi mdi-login mr-3" />
            Login
        </Button>

        <Button 
            on:click={handleCancel}
            size="default" 
            text
            class1="white-text"
        >   
            <Icon class="mdi mdi-cancel mr-3" />
            Abbruch
        </Button>
       
    </div>

</Dialog>


