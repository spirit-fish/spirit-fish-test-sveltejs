<script>
	import GiphyImage from './GiphyImage.svelte'

	export let name;
</script>

<style>
	h1 {
		color: rgb(181, 95, 181);
	}
</style>

<div class="appRoot">
	<marquee><h1>Hello {name}!</h1></marquee>
	<GiphyImage/>
</div>