import { seriealizedNonPOJOs } from '$lib/helpers';
/** @type {import('./$types').LayoutServerLoad} */
export const load = ({ locals }) => {
	if (locals.user && locals.user.profile) {
		return {
			profile: seriealizedNonPOJOs(locals.user.profile),
		};
	}
};
