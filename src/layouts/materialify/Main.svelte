<svelte:head>
	<link rel="stylesheet" href="//cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css">
</svelte:head>

<script lang="ts">

    // https://unpkg.com/svelte-materialify@0.3.4/compiled/index.js
    // https://unpkg.com/browse/svelte-materialify@0.3.4/

    // media-queries
    import { media } from '../../stores/media'
    import { settings } from '../../settings'
    
    // router
    import { Route, navigateTo, routeIsActive } from 'svelte-router-spa'
    //import { Navigate, navigateTo} from 'svelte-router-spa'

    import { MaterialApp } from 'svelte-materialify'
    import { AppBar, Button, Icon, Menu, ListItem, Footer } from 'svelte-materialify/src'


    // properties from Router
    export let currentRoute: any 
    export let params: any 

    // set Main menu
    const items = settings.menues.main

    let backBtnVisible 

    $ : if (currentRoute) {
        backBtnVisible = !routeIsActive('/')
        //params = 'willi'
    }

    // go back in history
    function handleHistory(evt) {
        window.history.back()
    }

    function handleNavigate(to) {
        console.log('navTo',to)
        navigateTo(to)
    }

</script>

<style>
   main {
       overflow: hidden
   } 

   .hidden {
        visibility: hidden;
   }
      
</style>

<!-- APP -->
<MaterialApp theme={settings.layout?.theme || 'dark'} >

    <!-- Header -->
    {#if settings.layout?.header}
    
        <AppBar class="{settings.layout?.header_color}">

            <!-- Back-Button -->
            <div slot="icon" class:hidden={!backBtnVisible}>
                <Button fab icon depressed on:click={handleHistory}>
                    <Icon class="mdi mdi-arrow-left" />
                </Button>
            </div>

            <!-- Title -->
            <span slot="title">{settings.layout?.header_title}{currentRoute.component.name}</span>
            
            <div style="flex-grow:1" />
    <!--
            <Button>Item</Button>
    -->
            <Menu right>

                <div slot="activator">
                    <Button fab icon depressed>
                        <Icon class="mdi mdi-dots-vertical" />
                    </Button>
                </div>

                <!-- has ICON -->
                {#each items as item, i}
                    <ListItem on:click="{() => handleNavigate(item.linkTo)}">

                        <span style="width: 40px" slot="prepend">
                            {#if item.icon}
                              <Icon class="mdi {item.icon}" />
                            {/if}
                        </span>

                        {item.title}
                          
                    </ListItem>
                {/each}
                

            </Menu>
        </AppBar>

    {/if}
    
    <!-- our current content from routes -->
    <main style="height: calc(100vh - {(settings.layout.footer + settings.layout.header)}px">
        <Route {currentRoute} {params}/>
    </main>

    <!-- Footer -->
    {#if settings.layout?.footer}
        <Footer absolute padless class="{settings.layout?.footer_color || settings.layout?.header_color} justify-center flex-column">
            <div class="{settings.layout?.footer_color || settings.layout?.header_color} pa-2 text-center" style="width:100%">
                {@html settings.layout?.footer_title}
            </div>
        </Footer>
    {/if}

</MaterialApp >