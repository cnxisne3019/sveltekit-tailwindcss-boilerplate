<script>
	// Receive data from the server as data (Framework utilities)
	export let data;
	// Store in new var
	const items = data.res.items;
</script>

<div class="flex justify-between items-center">
	<h1 class="text-2xl font-semibold">My Posts</h1>
	<a href='/posts/add-new' class="px-4 py-2 bg-amber-400 text-white font-semibold rounded">Add New</a>
</div>
<!-- <div class="w-full px-4 overflow-hidden">
	<pre>{JSON.stringify(items, null, 2)}</pre>
</div> -->

<div class=" flex flex-col gap-3 mt-4">
	{#each items as item}
		<div class="p-4 border rounded bg-white">
			<p>{item.title}</p>
			<p>{item.description}</p>
		</div>
	{/each}
</div>
