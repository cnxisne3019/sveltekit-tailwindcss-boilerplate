import { getFirebaseAuth } from '$lib/firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { goto } from '$app/navigation';

let auth = getFirebaseAuth();

export async function loginWithGoogle() {
	try {
		console.log('trying to login with Google...');
		const provider = new GoogleAuthProvider();
		provider.addScope('email');
		await signInWithPopup(auth, provider);
		await goto('/dashboard');
	} catch (error) {
		console.error(error);
	}
}
