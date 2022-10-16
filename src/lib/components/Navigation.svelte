<script>
	import { getAuth, signOut } from 'firebase/auth';
	import { onMount } from 'svelte';
	import { guest } from '$lib/store/authstore';
	// console.log($guest)
	const auth = getAuth();

	function logout() {
		signOut(auth)
			.then(() => {
				console.log('Sign-out successful.');
				guest.set(true);
				location.reload();
			})
			.catch((error) => {
				console.log('Error Hapened.');
			});
	}
</script>

<div class="flex w-full items-center justify-between bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 text-white">
	<a class="text-2xl font-bold" href="/">SvelteKit</a>
	<div>
		{#if $guest}
			<a href="/auth/login">login</a>
		{:else if !$guest}
			<span>Hello, Member</span>
			<button class="border bg-slate-500 px-2 py-1" on:click="{() => logout()}">Logout</button>
		{/if}
	</div>
</div>
