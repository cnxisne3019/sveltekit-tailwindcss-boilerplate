<script>
	import { onMount } from 'svelte';
	import { client, addAuthHeader } from '$lib/pocketbase';

	export let data;
	let posts = [];

	onMount(async (event) => {
		try {
			addAuthHeader(data.authToken);
			const records = await client.records.getFullList('posts', 200 /* batch size */, {
				sort: '-created',
			});
			posts = await records;
		} catch (err) {
			console.log(err.isAbort);
		}
	});
</script>

<div class="flex justify-between items-center">
	<h1 class="text-2xl font-semibold">My Posts</h1>
	<a href="/posts/add-new" class="px-4 py-2 bg-amber-400 text-white font-semibold rounded">Add New</a>
</div>

<div class=" flex flex-col gap-3 mt-4">
	{#each posts as post}
		<div class="p-4 border rounded bg-white">
			<p>{post.title}</p>
			<p>{post.description}</p>
		</div>
	{/each}
</div>
