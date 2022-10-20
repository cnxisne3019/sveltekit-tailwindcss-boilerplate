<script>
	import { firebaseLogout } from '$lib/firebase';
	import { userData } from '$lib/store/authstore';
	import { slide } from 'svelte/transition';

	let isExpanded = false;
	function expandedHandler() {
		isExpanded = !isExpanded;
	}
</script>

<div class="flex max-h-[50px] w-full items-center justify-between border-b bg-white px-4 py-3 text-slate-800">
	<a class="text-2xl font-bold text-rose-500" href="/">SvelteKit</a>
	<!-- <p>isLoggedIn:</p> -->
	{#if !$userData?.photoURL}
		<div class="flex space-x-2">
			<div class="aspect-square h-8 rounded-full bg-slate-300"></div>
		</div>
	{:else}
		<div class="relative flex items-center space-x-2">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="flex items-center space-x-2 hover:cursor-pointer" on:click="{() => expandedHandler()}">
				<img class="aspect-square h-8 w-auto rounded-full" src="{$userData.photoURL}" referrerpolicy="no-referrer" alt="{$userData.displayName}" />
				<!-- <button on:click="{() => expandedHandler()}">V</button> -->
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
					<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
					></path>
				</svg>
			</div>
			{#if isExpanded}
				<ul class="absolute top-10 right-0 rounded-lg border bg-white p-3 shadow-sm" transition:slide>
					<li class="py-2 pl-2 pr-16 hover:cursor-pointer hover:bg-slate-100">Setting</li>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<li class="py-2 pl-2 pr-16 hover:cursor-pointer hover:bg-slate-100" on:click="{() => firebaseLogout()}">Logout</li>
				</ul>
			{/if}
			<!-- <button class="rounded-md bg-emerald-500 px-4 py-2 text-sm text-white" on:click="{() => firebaseLogout()}">Log Out</button> -->
		</div>
	{/if}
</div>
