import { browser } from '$app/environment';
import { writable } from 'svelte/store';

let isUser = browser && localStorage.getItem('user');

console.log('Persist:', isUser);
export let user = writable(isUser ? JSON.parse(localStorage.getItem('user')) : null);

if (browser) {
	user.subscribe((u) => (localStorage.user = u));
}

console.log(user)
