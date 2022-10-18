<script>
	import { guest } from '$lib/store/authstore';
	import { firebaseLogout } from '$lib/firebase';
</script>

<div class="flex w-full items-center justify-between bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 text-white">
	<a class="text-2xl font-bold" href="/">SvelteKit</a>
	<div class="space-x-1">
		Is Guest ? :
		<span>
			Store: {$guest},
		</span>
		<span>
			<!-- Context: {cont_is_guest} -->
		</span>
	</div>
	<div>
		{#if $guest}
			<a href="/auth/login">login</a>
		{:else}
			<span>Hello, Member</span>
			<button class="border bg-slate-500 px-2 py-1" on:click="{() => firebaseLogout()}">Logout</button>
		{/if}
	</div>
</div>
