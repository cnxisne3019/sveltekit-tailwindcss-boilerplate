<script>
	export let data;
	import '../app.css';

	console.log(JSON.stringify(data, null, 2))
</script>

<nav class="px-4 py-1 bg-white items-center text-slate-800 justify-between flex border-b border-slate-200">
	<div class="text-3xl font-bold">
		<a href="/">Sveltekit</a>
	</div>

	{#if data?.authProfile}
		<div class="flex space-x-4 items-center font-medium italic text-slate-600">
			<p>Hello, {data.authProfile.name}</p>
			<form action="/auth/logout" method="post">
				<button class="px-4 py-2 rounded-md bg-rose-500 font-semibold text-white">Logout</button>
			</form>
		</div>
	{:else}
		<div class="flex space-x2 items-center space-x-2">
			<a href="/auth/register">Register</a>
			<a href="/auth/login" class="px-4 py-2 rounded-md bg-sky-600">Login</a>
		</div>
	{/if}
</nav>

<div>
	<slot />
</div>
