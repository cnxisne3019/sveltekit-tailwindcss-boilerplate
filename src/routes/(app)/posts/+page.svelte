<script>
	import { onMount } from 'svelte';
	import { currentUser } from '$lib/store/authStore';

	async function getList() {
	}

	getList();

	let datas = [];
	onMount(async ({ locals }) => {
		console.log('onMount Working...')
		const res = await locals.pb.records.getFullList('posts', 200 /* batch size */, {
			sort: '-created',
		});

		datas = await res.json();
	});
</script>

<p>{JSON.stringify($currentUser)}</p>
