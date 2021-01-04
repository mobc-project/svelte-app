
<svelte:head>
	<link rel="stylesheet" href="//cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css">
</svelte:head>

<script lang="ts">

    // https://unpkg.com/svelte-materialify@0.3.4/compiled/index.js
    // https://unpkg.com/browse/svelte-materialify@0.3.4/

    import { Route } from 'svelte-router-spa'
    import { MaterialApp } from 'svelte-materialify'
    import { Footer } from 'svelte-materialify/src';
    import { AppBar, Button, Icon, Menu, ListItem } from 'svelte-materialify/src'

    let theme: 'light' | 'dark' = 'dark'

    // from Router
    export let currentRoute
    export let params = {}

</script>

<style>
    :global(body) {
        display: flex;
        flex-direction: column;
        overscroll-behavior-y: contain; 
    }
    
    main {
        margin: 10px;
    }
</style>


<MaterialApp theme={theme}>

    <AppBar class="indigo lighten-1 ">
        <div slot="icon">
          <Button fab depressed>
            <Icon class="mdi mdi-menu" />
          </Button>
        </div>
        <span slot="title">Title</span>
        <div style="flex-grow:1" />
        <Button>Item</Button>
        <Menu right>
          <div slot="activator">
            <Button fab depressed>
              <Icon class="mdi mdi-dots-vertical" />
            </Button>
          </div>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
        </Menu>
      </AppBar>

    <!-- our current content from routes -->
    <main >
        <Route {currentRoute} {params}/>
    </main>

    <!-- Footer -->
    <Footer absolute padless class="indigo theme--dark justify-center flex-column">
        
        <div class="indigo lighten-1 pa-2 text-center" style="width:100%">
          2020 - <b>Svelte PWA Materialify</b> 
        </div>
    </Footer>

</MaterialApp >