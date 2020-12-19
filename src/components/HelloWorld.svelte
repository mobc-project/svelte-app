<script lang="ts">

    import { count } from "../store/store"

    export let name: string;

    // Increases the count variable from the store by 1
    function incrementCount() {
      count.set($count + 1);
    }

</script>
  
<style>
    main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
    <button on:click={() => incrementCount()}>
      Count is {$count}
    </button>
    <h1>Hello {name} !</h1>
	  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>