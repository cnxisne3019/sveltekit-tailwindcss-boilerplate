import { writable } from 'svelte/store';

export const currentUser = writable({
	id: '',
	name: '',
});

export let num = writable(0);
