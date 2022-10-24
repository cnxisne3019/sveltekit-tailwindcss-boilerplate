/* eslint-disable no-unused-vars */
import { redirect } from '@sveltejs/kit';
import { seriealizedNonPOJOs } from '$lib/helpers';

export const actions = {
	addPost: async ({ locals, request }) => {

		const authorData = {
			authorId: `${locals.user.profile.userId}`,
			authorName: `${locals.user.profile.name}`,
		};

		const formData = await request.formData();

		// Append current user into data formData
		const FinalData = Object.assign(Object.fromEntries([...formData]), authorData);

		console.log('🚀 TRY TO SEND THIS DATA');
		console.log(FinalData);
		console.log(`🚀 Current userID to post this is : ${locals.pb.authStore.model.profile.userId}`);
		
		try {
			const newPost = await locals.pb.records.create('todos', FinalData);
			console.log(`Created post id: ${newPost.id}`);
		} catch (err) {
			console.log('THIS IS ERROR MESSAGE:', err);
			return {
				error: true,
				message: seriealizedNonPOJOs(err),
			};
		}

		throw redirect(303, '/posts');
	},
};
