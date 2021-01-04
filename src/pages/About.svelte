<svelte:head>
	<title>About</title>
</svelte:head>

<script lang="ts">
    import Page from '../layouts/Type01.svelte'
    import Slots from '../components/PageLayout01.svelte'
</script>

<Page transition="slide">
    <Slots>
        <h1 slot="header">Header</h1>

        <h2 slot="content"> 
            <h1 >Hello</h1>
        </h2>

        <h1 slot="footer">Footer</h1>
    </Slots>
</Page>