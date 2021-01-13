<script lang="ts">
    // Router
    import { Navigate, navigateTo} from 'svelte-router-spa'

    // Params for Dialog (PageMain or PageModal)
    import { paramsDlg } from '../stores/dialog' 
    
    // layout Page-Content
    import Content from '../layouts/PageContent.svelte'
    
    // set by Router
    export let currentRoute
    export let params

    // content is created
    function handleCreate(evt) {
        //console.log("create", evt.detail.title)
    }

    // page-settings
    let pageSettings = {
        title: "Über uns",
        checkauth: false,
        hasHeader: true,
        hasFooter: true,
    }
    
    // assign settings
    $paramsDlg = pageSettings

</script>

<style>

</style>

<Content
    style="background-color: red;"
    transition="" 
    on:create={handleCreate}
    title="{pageSettings.title}"
    
>
    <!-- your content goes here-->
    <h4>About</h4>
    
</Content>

