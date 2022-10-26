import { seriealizedNonPOJOs } from '$lib/helpers';

/** @type {import('./$types').LayoutServerLoad} */

// THIS IS ROOT OF USER DATA THAT PASS TO EVERY PAGE
// -> when use in /routes : access by >> export let data
// -> when need to access in /lib or /lib/* : access by >> page.data (must import '$app/stores')

export const load = ({ locals }) => {
	if (locals.user && locals.user.profile && locals.pb.authStore) {
		return {
			authToken: seriealizedNonPOJOs(locals.pb.authStore.baseToken),
			authProfile: seriealizedNonPOJOs(locals.user.profile),
		};
	}
};