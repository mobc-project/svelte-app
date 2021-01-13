<script lang="ts">
    import { navigateTo, routeIsActive } from 'svelte-router-spa'

    import { settings, mainMenu, media  } from '../../settings'

    // materialify
    import { AppBar, Button, Icon, Menu, ListItem } from 'svelte-materialify/src'

    // properties
    export let color: string
    export let hasBackBtn = false
    export let backToHome = true
    export let appName: string = ""
    //export let appIcon: string = ""
    export let title: string = ""
    export let hasMenuBtn = true

    // fixed height
    export const height = 56

    // go back in history 
    function handleBackBtn(evt) {
        if (backToHome) {
            navigateTo('/')
        }
        else {
            window.history.back()
        }
    }

    // navigate to
    function handleNavigate(to) {
        navigateTo(to)
    }

</script>

<style>

</style>

<AppBar class="{color}">
 
    <!-- Back-Button -->
    <div slot="icon">
        {#if hasBackBtn}
        <Button fab icon depressed on:click={handleBackBtn}>
            <Icon class="mdi mdi-arrow-left" />
        </Button>
        {/if}
    </div>

    <!-- App-Icon -->
    
    <!-- App Title -->
    <span slot="title">
        {appName}{title}
    </span>
    
    <div style="flex-grow:1" />

    <!-- Buttons 1 / 2 / 3
    <Button>Item</Button>
    -->
    {#if hasMenuBtn}
        <Menu right>

            <div slot="activator">
                <Button fab icon depressed>
                    <Icon class="mdi mdi-dots-vertical" />
                </Button>
            </div>

            <!-- Main Menu -->
            {#each mainMenu as item, i}
                <ListItem active="{routeIsActive(item.linkTo)}" on:click="{() => handleNavigate(item.linkTo)}">
                    <span style="width: 40px" slot="prepend">

                        <!-- has ICON -->
                        {#if item.icon}
                            <Icon class="mdi {item.icon}" />
                        {/if}

                    </span>
                    {item.title}
                </ListItem>
            {/each}
        </Menu>
    {/if}
</AppBar>