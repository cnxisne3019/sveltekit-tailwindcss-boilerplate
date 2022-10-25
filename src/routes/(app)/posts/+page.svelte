<script>
	import { onMount } from 'svelte';
	import { client } from '$lib/pocketbase';

	// Received from /src/route/+layout.server.js as data below
	export let data;
	console.log(`received from /src/route/+layout.server.js -> ${data.authProfile}`);

	let todoItems = [];

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
		todoItems = res.items;

	});
</script>

<div class="flex justify-between items-center">
	<h1 class="text-2xl font-semibold">My Posts</h1>
	<a href="/posts/add-new" class="px-4 py-2 bg-amber-400 text-white font-semibold rounded">Add New</a>
</div>

<div class=" flex flex-col gap-3 mt-4">
	{#each todoItems as item}
		<div class="p-4 border rounded bg-white">
			<p>{item.title}</p>
			<p>{item.description}</p>
		</div>
	{/each}
</div>
