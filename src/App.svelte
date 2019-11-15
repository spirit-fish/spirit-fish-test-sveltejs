<script>
	import { Router, Route } from "svelte-routing";
	import Home from './pages/home/Home.svelte'
	export let name;
	export let url = "";
</script>

<Router url="{url}">
	<div class="appRoot">
		<Route path="/"><Home name={name} /></Route>
	</div>
</Router>