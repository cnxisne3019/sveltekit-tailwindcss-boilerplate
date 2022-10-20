export const ssr = false;

import { goto } from '$app/navigation';
import { getFirebaseAuth } from '$lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { userData } from '$lib/store/authstore';

/** @type {import('./$types').LayoutLoad} */

console.log('+layout.js loadded');
const auth = getFirebaseAuth();

export async function load() {
	console.log('+layout.js in load() loaded');
	await onAuthStateChanged(auth, (user) => {
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User

			console.log('time to return value from firebase');
			userData.set({
				uid: user.uid,
				displayName: user.displayName,
				photoURL: user.photoURL,
				email: user.email,
			});
			goto('/dashboard');
		} else {
			userData.set({});
			goto('/auth/login');
			// User is signed out
		}
	});
}
