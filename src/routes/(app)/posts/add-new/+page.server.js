/* eslint-disable no-unused-vars */
import { redirect } from '@sveltejs/kit';


export const load = ({ locals }) => {
	console.log(locals.pb.records);
	// console.log(locals.pb.authStore.baseModel.profile);
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/auth/login');
	}
};

export const actions = {
	addPost: async ({ locals, request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);
		console.log('TRY TO SEND THIS DATA');
		console.log(data);
		try {
			const newPost = await locals.pb.records.create('posts', data);
			// const updatedPost = await locals.pb.records.update('posts', posts.id, {
			// 	// trim name from email
			// });
		} catch (err) {
			console.log('THIS IS ERROR MESSAGE:', err);
			return {
				error: true,
				// message: seriealizedNonPOJOs(err),
			};
		}

		throw redirect(303, '/auth/login');
	},
};
