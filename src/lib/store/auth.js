import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const defaultValue = '';
const initialValue = browser ? window.localStorage.getItem('user') ?? defaultValue : defaultValue;

export const isUser = writable(initialValue);

isUser.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('user', value);
	}
});
