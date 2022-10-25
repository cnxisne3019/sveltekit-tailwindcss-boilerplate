import { writable } from 'svelte/store';

export let authToken = writable('guest');
