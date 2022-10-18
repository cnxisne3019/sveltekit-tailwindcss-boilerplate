<script>
	import { guest } from '$lib/store/authstore';
	// import components
	import Navigation from '$lib/components/Navigation.svelte';
	import '../app.css';
	import { getFirebaseAuth } from '$lib/firebase';
	import { onAuthStateChanged } from 'firebase/auth';

	const auth = getFirebaseAuth();

	let member = {
		uid: '',
		displayName: '',
		profileURL: '',
		email: '',
	};

	onAuthStateChanged(auth, (user) => {
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
			member.uid = user.uid;
			member.displayName = user.displayName;
			member.profileURL = user.photoURL;
			member.email = user.email;
			guest.set(false);
			// ...
		} else {
			// User is signed out
			// ...
		}
	});
</script>

<Navigation />
<div class="px-4">
	<slot />
	<pre>{member.displayName}</pre>
	<img referrerpolicy="no-referrer" src="{member.profileURL}" alt="" />
</div>
