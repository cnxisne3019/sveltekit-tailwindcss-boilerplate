<script>
	import Avatar from '$lib/components/Avatar.svelte';
	export let data;

	// console.log('import data from +layout.server.js -> ' + JSON.stringify(data, null, 2));
</script>

<div class="py-4 text-center leading-relaxed">
	<h1 class="text-3xl">Welcome to SvelteKit with TailwindCSS</h1>
	<p>Visit <a class="text-sky-500" href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</div>


<div class="px-4 flex justify-center">
	{#if data?.authProfile}
		<Avatar />
	{:else}
		Go Login
	{/if}
</div>
