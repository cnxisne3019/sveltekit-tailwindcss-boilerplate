<script>
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte'
	export let data;

	// console.log('import data from +layout.server.js -> ' + JSON.stringify(data, null, 2));
</script>

<Navigation/>
<div>
	<slot />
</div>
