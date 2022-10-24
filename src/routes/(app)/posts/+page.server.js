import { seriealizedNonPOJOs } from '$lib/helpers';
/** @type {import('./$types').PageLoad} */
export async function load({ locals }) {
	console.log(`+page.server.js ${JSON.stringify(locals.user.profile, null, 4)}`);

	const res = await locals.pb.records.getList('todos', 1, 50, {
		filter: `authorId = "${locals.user.profile.userId}"`,
	});
	return { res: seriealizedNonPOJOs(res) };
}
