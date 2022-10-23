<script>
	export let data;
	import '../app.css';
</script>

<nav class="bg-white items-center text-slate-800 justify-between flex border-b border-slate-200">
	<div class="text-3xl">Sveltekit</div>
	{#if data?.profile}
		<div class="flex space-x-2 items-center">
			<p>Hello, {data.profile.name}</p>
			<form action="/auth/logout" method="post">
				<button class="px-4 py-3 bg-sky-600">Logout</button>
			</form>
		</div>
	{:else}
		<div class="flex space-x2 items-center space-x-2">
			<a href="/auth/login">Register</a>
			<a href="/auth/login" class="px-4 py-3 bg-sky-600">Login</a>
		</div>
	{/if}
</nav>

<div class="px-4">
	<slot />
</div>
