<script lang="ts">

    // layout Dialog Modal-Content
    import Dialog from '../layouts/materialify/DialogModal.svelte'
    
    // materialify
	import { Button, Card, CardTitle, CardText, CardActions, } from 'svelte-materialify'

    // properties    
    export let active
    export let title = "Title"
    export let content = "Content"
    export let accept = "OK"
    export let persistent = false

    // message-dlg is opened
    function handleOpen() {
        console.log('Message openend ...')
    }

    // message-dlg is closed
    function handleClose() {
        console.log('Message closed ...')
        active = false
    }

    // message-dlg is opened
    function handleAccepted() {
        console.log('Message accepted ...')
        active = false
    }

</script>

<style>

</style>

<!-- modal Dialog -->
<Dialog
    active={active}
    theme="light"
    persistent={persistent}
    opacity={0.1}
    
    on:open={handleOpen}
    on:close={handleClose}
>
    <Card>
        <CardTitle>
            {title}
        </CardTitle>
        
        <CardText>
            <div class="text-subtitle-1">{content}</div>
        </CardText>
        
        <CardActions>
           
            <Button 
                on:click={handleAccepted} 
                text class="primary-text"
               
            >
                {accept}
            </Button>
           
        </CardActions>
    
    </Card>
</Dialog>


