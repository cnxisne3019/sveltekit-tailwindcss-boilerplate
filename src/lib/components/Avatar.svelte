<script>
	let imagePreview, imageFile;

	const onFileSelected = (event) => {
		let image = event.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (event) => {
			imagePreview = event.target.result;
		};
	};

	// $: console.log(`imagePreview is ${imagePreview}`);
</script>

<div class="w-48">
	{#if imagePreview}
		<img class="avatar" src={imagePreview} alt="d" />
	{:else}
		<!-- show placeholder image -->
		<div class="bg-slate-200 aspect-square w-full rounded-md" />
	{/if}

	<button
		class="p-4 bg-purple-600 rounded-md text-white min-w-full mt-3"
		on:click={() => {
			imageFile.click();
		}}
	>
		Choose Image
	</button>
	<input
		style="display:none"
		type="file"
		accept=".jpg, .jpeg, .png"
		on:change={(e) => onFileSelected(e)}
		bind:this={imageFile}
	/>
</div>
