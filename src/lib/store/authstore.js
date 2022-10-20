import { writable } from 'svelte/store';

export const userData = writable({
	uid: '',
	displayName: '',
	photoURL: '',
	email: '',
});

