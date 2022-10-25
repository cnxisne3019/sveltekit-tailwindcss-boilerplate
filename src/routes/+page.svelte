<script>
	import Avatar from '$lib/components/Avatar.svelte';
	import { client } from '$lib/pocketbase';
	import { onMount } from 'svelte';
	export let data;

	let listTodos = [];

	onMount(async (event) => {
		client.beforeSend = function (url, reqConfig) {
			// For list of the possible reqConfig properties check
			// https://developer.mozilla.org/en-US/docs/Web/API/fetch#options
			reqConfig.headers = Object.assign({}, reqConfig.headers, {
				Authorization: `User ${data.authToken}`,
			});
			return reqConfig;
		};
		const res = await client.records.getList('todos');
		listTodos = res.items;

		await console.log(listTodos);
		// await console.log(`User Credentials = ${JSON.stringify(data.authToken, null, 2)}`);
	});
</script>

<div class="py-4 text-center leading-relaxed">
	<h1 class="text-3xl">Welcome to SvelteKit with TailwindCSS</h1>
	<p>Visit <a class="text-sky-500" href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</div>

<div class="flex flex-col gap-4">
	{#each listTodos as todo}
		<div class="p-4 border bg-white">
			<p>{todo.title}</p>
		</div>
	{/each}
</div>

<!-- <div class="px-4 flex justify-center">
	{#if data?.profile}
		<Avatar />
	{:else}
		Go Login
	{/if}
</div> -->
