<script>
	import { isUser } from '$lib/store/auth';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import cookie from 'cookiejs';

	let logged_in = '';
	if (browser) {
		console.log(cookie.get('logged_in'));
		logged_in = cookie.get('logged_in');
		console.log(typeof logged_in);
	}

	let currentLocal = '';
	onMount(async () => {
		currentLocal = (await browser) ? localStorage.getItem('user') : null;
		currentLocal = parseInt(currentLocal);
	});

	function login() {
		isUser.set(1);
		cookie.set('logged_in', 'yes', 1);
	}

	function logOut() {
		isUser.set(0);
		cookie.set('logged_in', 'no', 1);
	}
</script>

<div>{'STORE => isUser: ' + $isUser}</div>
<div>{'LOCALSTORAGE => currentLocal: ' + currentLocal}</div>
<div>{'COOKIES => logged_in: ' + logged_in}</div>

{#if $isUser == '1'}
	Congreats! login {$isUser}
{:else if $isUser == '0'}
	Please Login
{:else}
	loading...
{/if}

<!-- {#if $isUser}
	Congreats!
{:else if !$isUser}
	Please Login
{:else}
	loading..
{/if} -->

<div class=" flex space-x-3">
	<button class="bg-slate-900 p-2 text-white" on:click={login}>Log In</button>
	<button class="bg-slate-900 p-2 text-white" on:click={logOut}>Log Out</button>
</div>
