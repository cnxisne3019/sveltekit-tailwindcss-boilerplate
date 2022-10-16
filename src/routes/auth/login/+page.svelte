<script>
	import { loginWithGoogle } from '$lib/loginWithGoogle';
</script>

<section class="space-y-4 p-4 text-center">
	<h1 class="text-3xl">Login page</h1>
	<button class="border px-4 py-3" on:click="{() => loginWithGoogle()}">Login With Google</button>
</section>
