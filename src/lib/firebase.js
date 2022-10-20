import { firebase_conf } from '$lib/conf/firebase_conf';
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { browser } from '$app/environment';

let firebaseApp;
let auth;
let unsubOnAuthStateChangedHandler;

export function getFirebaseAuth() {
	auth = getAuth(getFirebaseApp());
	auth.useDeviceLanguage();
	// applies the default browser language or use auth.languageCode = "fr";

	if (browser) {
		
		unsubOnAuthStateChangedHandler = onAuthStateChanged(auth, onAuthStateChangedHandler);
	}
	return auth;
}

function onAuthStateChangedHandler(user) {
	if (user) {
		console.log('user is logged in');
		localStorage.setItem('isLogggedIn', true);
		return {
			user: user.displayName,
		};
	} else {
		unsubOnAuthStateChangedHandler();
		console.log('user is logged out');
	}
}

// firebaseApp
export function getFirebaseApp() {
	const firebaseAppConfig = getFirebaseConfig();
	if (getApps.length === 0) {
		firebaseApp = initializeApp(firebaseAppConfig);
	} else {
		firebaseApp = getApp();
	}
	return firebaseApp;
}

function getFirebaseConfig() {
	if (!firebase_conf || !firebase_conf.apiKey) {
		throw new Error('No Firebase configuration object provided.' + '\n' + "Add your web app's configuration object to firebase-config.js");
	} else {
		return firebase_conf;
	}
}

export async function firebaseLogout() {
	await signOut(auth)
		.then(() => {
			console.log('Sign-out successful.');
			// eslint-disable-next-line no-unused-vars
			if (browser){
				localStorage.setItem('isLogggedIn', false);
			}
			location.reload();
		})
		.catch((error) => {
			console.log('Error Message:', error);
		});
}
