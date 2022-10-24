<script>
	/** @type {import('./$types').PageData} */
	// export let data;
	let avatar, fileinput;

	const onFileSelected = (e) => {
		let image = e.target.files[0];
		let reader = new FileReader();
		reader.readAsDataURL(image);
		reader.onload = (e) => {
			avatar = e.target.result;
		};
	};
</script>

<section class="w-full max-w-[600px] bg-slate-100 border border-slate-400 p-4 mx-auto mt-4 rounded-lg">
	<h1 class="text-2xl font-bold">New Post</h1>
	<form enctype="multipart/form-data" class="space-y-2 mt-2 flex flex-col" action="?/addPost" method="post">
		<label for="title">
			<p>Title</p>
			<input
				type="text"
				name="title"
				id="title"
				placeholder="Lorem Ipsum ..."
				class="p-2 border border-slate-200 w-full"
			/>
		</label>
		<label for="description">
			<p>Description</p>
			<textarea
				rows="8"
				name="description"
				id="description"
				placeholder="Lorem Ipsum ..."
				class="p-2 border border-slate-200 w-full"
			/>
		</label>
		<label for="status">
			<p>is done ?</p>
			<input type="checkbox" id="status" name="status" value="true" />
		</label>
		<label for="status">
			<p>featuredImage</p>
			<input type="file" name="featuredImage" id="featuredImage" />
		</label>
		<img class="avatar" src="{avatar}" alt="d" />
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="p-4 w-full bg-indigo-500" on:click={()=>{fileinput.click();}}>Choose Image</div>
		<input
			style="display:none"
			type="file"
			accept=".jpg, .jpeg, .png"
			on:change={(e) => onFileSelected(e)}
			bind:this={fileinput}
		/>
		<button class="w-full p-4 text-white bg-sky-600 rounded-md">Add new post</button>
	</form>
</section>
