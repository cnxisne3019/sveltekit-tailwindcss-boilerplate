<script>
	import { user } from '$lib/store/auth';
	import { onDestroy } from 'svelte';

	let user_value;
	user.subscribe((u) => (user_value = u));

	let unsubscribe = user.subscribe((u) => (user_value = u));

	let email;
	let password;

	function handleLogin() {
		if (!email || !password) {
			alert('please enter your credentials');
			return;
		}

		// By the way, you MUST return the values to the store, otherwise
		// it will end up as undefined, which is bad
		user.update((u) => (u = JSON.stringify({ email: email, password: password })));
	}

	function handleLogout() {
		user.update((u) => (u = ''));
	}

	// $: console.log('user_value', user_value);
	// $: console.log('user', $user);

	onDestroy(unsubscribe);
</script>

<svelte:head>
	<title>Local Storage Stores Login</title>
</svelte:head>

<div class="border p-4 max-w-xl mx-auto flex flex-col space-y-2">
	{#if !user_value}
		<input class="border p-2" type="email" bind:value="{email}" placeholder="enter email" />
		<input class="border p-2" type="password" bind:value="{password}" placeholder="enter password" />
		<button class="bg-sky-600 text-white p-3" on:click="{handleLogin}">Login</button>
	{:else if user_value}
		<h3>You are logged in as: {JSON.parse(user_value).email}</h3>
		<button class="bg-sky-600 text-white" on:click="{handleLogout}">Logout</button>
	{/if}
</div>
