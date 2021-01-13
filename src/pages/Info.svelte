<script lang="ts">
    // Params for Dialog (PageMain or PageModal)
    import { paramsDlg } from '../stores/dialog' 

    // Router for navigation - optional
    import { Navigate, navigateTo} from 'svelte-router-spa'
    
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
        title: "Information",
        checkauth: true,
        hasHeader: true,
        hasFooter: true,
    }
    
    // assign settings
    $paramsDlg = pageSettings

</script>

<style>

</style>

<Content
    style=""
    transition="slide" 
    on:create={handleCreate}
    title="{pageSettings.title}"
>
    <!-- your content goes here-->
    <h4>{pageSettings.title}</h4>
    

</Content>

