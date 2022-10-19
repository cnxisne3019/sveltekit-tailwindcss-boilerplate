<script>
	import { isUser } from '$lib/store/auth';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let currentLocal = '';
	onMount(async () => {
		currentLocal = (await browser) ? localStorage.getItem('user') : null;
		currentLocal = parseInt(currentLocal);
	});

	function login() {
		isUser.set(1);
		location.reload();
	}

	function logOut() {
		isUser.set(0);
		location.reload();
	}
</script>

<div>{'STORE => isUser: ' + $isUser}</div>
<div>{'LOCALSTORAGE => currentLocal: ' + typeof currentLocal}</div>

{#if currentLocal}
	Congreats!
{:else}
	login
{/if}

<div class=" flex space-x-3">
	<button class="bg-slate-900 p-2 text-white" on:click="{login}">Log In</button>
	<button class="bg-slate-900 p-2 text-white" on:click="{logOut}">Log Out</button>
</div>
