import { firebase_conf } from '$lib/conf/firebase_conf';
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { browser } from '$app/environment';
import { guest } from '$lib/store/authstore';

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
		guest.set(false);
		return {
			user: user.displayName
		}
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
