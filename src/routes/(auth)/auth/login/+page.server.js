/* eslint-disable no-unused-vars */
import { redirect } from '@sveltejs/kit';

export const load = ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}
};



export const actions = {
	login: async ({ locals, request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);

		console.log(data);

		try {
			const { token, user } = await locals.pb.users.authViaEmail(data.email, data.password);
		} catch (err) {
			console.log(err);
			return {
				error: true,
				email: data.email,
			};
		}

		throw redirect(303, '/posts');
	},
};
