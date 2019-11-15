import App from './App.svelte';
import giphyService from './giphyService'

const app = new App({
	target: document.body,
	props: {
		name: "Svelte Fish"
	}
});

export default app;