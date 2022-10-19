// import * as cookie from 'cookie';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  // const cookies = cookie.parse(event.request.headers.get('cookie') || '');
  // console.log(event)

	return await resolve(event);
}

// export async function handle({ event, resolve }) {
// 	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
// 	const jwt = cookies.jwt && Buffer.from(cookies.jwt, 'base64').toString('utf-8');
// 	event.locals.user = jwt ? JSON.parse(jwt) : null;
// 	return await resolve(event);
// }
