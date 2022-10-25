/* eslint-disable no-unused-vars */
import { redirect } from '@sveltejs/kit';
import { seriealizedNonPOJOs } from '$lib/helpers';

export const load = ({ locals }) => {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}
};

export const actions = {
	register: async ({ locals, request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries([...formData]);

		try {
			const newUser = await locals.pb.users.create(data);

			const { token, user } = await locals.pb.users.authViaEmail(data.email, data.password);

			const updatedProfile = await locals.pb.records.update('profiles', user.profile.id, {
				// trim name from email
				name: data.email.substring(0, data.email.lastIndexOf('@')),
			});

			locals.pb.authStore.clear();
		} catch (err) {
			console.log('THIS IS ERROR MESSAGE:', err);
			return {
				error: true,
				message: seriealizedNonPOJOs(err),
			};
		}

		throw redirect(303, '/auth/login');
	},
};
