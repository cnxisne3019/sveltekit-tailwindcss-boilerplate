// import * as cookie from 'cookie';
// import { redirect } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	// const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	console.log('hooks.server.js is running...');
	return await resolve(event);
}

// export async function handle({ event, resolve }) {
// 	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
// 	const jwt = cookies.jwt && Buffer.from(cookies.jwt, 'base64').toString('utf-8');
// 	event.locals.user = jwt ? JSON.parse(jwt) : null;
// 	return await resolve(event);
// }
