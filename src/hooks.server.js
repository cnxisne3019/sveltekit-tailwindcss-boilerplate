import PocketBase from 'pocketbase';

export async function handle({ event, resolve }) {
	event.locals.pb = new PocketBase('http://localhost:8090');

	// load the store data from the request cookie string
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	if (event.locals.pb.authStore.isValid) {
		event.locals.user = event.locals.pb.authStore.model;
		console.log(`(hooks): CURRENT AUTH USER IS ${JSON.stringify(event.locals.user.profile, null, 4)}`);
		// console.log(event.locals.user);
	}

	const response = await resolve(event);

	//TODO: secure cookie before deployment

	// send back the default 'pb_auth' cookie to the client with the latest store state
	response.headers.set(
		'set-cookie',
		event.locals.pb.authStore.exportToCookie({
			secure: false,
		})
	);

	return response;
}
