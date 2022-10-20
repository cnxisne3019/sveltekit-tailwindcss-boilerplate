<script>
	import Navigation from '$lib/components/Navigation.svelte';
</script>

<main class="flex h-screen flex-col bg-slate-900 text-white">
	<Navigation />
	<div class=" flex flex-grow flex-col items-center justify-center">
		<div class="flex flex-col space-y-3 items-start">
			<p class="w-fit  rounded-lg bg-white/10 p-1 px-2">(app)/+layout.svelte</p>
			<slot />
		</div>
	</div>
</main>
