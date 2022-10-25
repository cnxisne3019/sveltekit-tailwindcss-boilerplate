import { seriealizedNonPOJOs } from '$lib/helpers';

/** @type {import('./$types').LayoutServerLoad} */
export const load = ({ locals }) => {
	if (locals.user && locals.user.profile && locals.pb.authStore) {
		return {
			authToken: seriealizedNonPOJOs(locals.pb.authStore.baseToken),
			authProfile: seriealizedNonPOJOs(locals.user.profile),
		};
	}
};
