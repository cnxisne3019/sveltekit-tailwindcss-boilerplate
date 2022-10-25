<script>
	import Avatar from '$lib/components/Avatar.svelte';
	// import { client } from '$lib/pocketbase';
	// import { onMount } from 'svelte';
	export let data;
</script>

<div class="py-4 text-center leading-relaxed">
	<h1 class="text-3xl">Welcome to SvelteKit with TailwindCSS</h1>
	<p>Visit <a class="text-sky-500" href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</div>


<div class="px-4 flex justify-center">
	{#if data?.profile}
		<Avatar />
	{:else}
		Go Login
	{/if}
</div>
