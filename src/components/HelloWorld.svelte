<script lang="ts">

    import { count } from "../store/store"

    export let name: string;

    let deferredPrompt
    let showInstallBtn = false

    //
    window.addEventListener('appinstalled', (evt) => {
      // Log install to analytics
      console.log('INSTALL: Success');
    })

    // Listen for the beforeinstallprompt event 
    window.addEventListener('beforeinstallprompt', (evt) => {

      // Prevent the mini-infobar from appearing on mobile
      evt.preventDefault();

      // Stash the event so it can be triggered later.
      deferredPrompt = evt;

      // Update UI notify the user they can install the PWA
      showInstallBtn = true
      
    })

    // show install PWA Prompt
    function installPWA() {

      // show prompt
      deferredPrompt.prompt()

      // reset
      showInstallBtn = false

      // check result ...
      deferredPrompt.userChoice.then( (choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
      })

      $count =+ 1
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
    {#if showInstallBtn}
    <button on:click={() => installPWA()}>
      Install PWA
    </button>
    {/if}
    <h1>Hello {name} !</h1>
	  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>