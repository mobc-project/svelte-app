import App from './App.svelte';

// app settings and media-queries
import { createSettings, Isetting } from './stores/setting'

// create settings
let settings: Isetting = {
	name: "PWA APP",
	version: "1.0.0",
    language: "de",
    created: "01.01.2021",
	changed: "01.01.2021",
	is_pwa: true,
	serviceworker: "/service-worker.js",
	is_dev: true,
	is_fixed: false,
    fixed_w: 400,
    fixed_h: 200,
}
createSettings(settings)

// create APP
const app = new App({
	target: document.body,
	props: {
		//name: 'Svelte PWA App '  
	}
});

export default app;