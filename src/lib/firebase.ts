import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { connectAuthEmulator } from 'firebase/auth';
import {
	PUBLIC_FIREBASE_API_KEY,
	PUBLIC_FIREBASE_AUTH_DOMAIN,
	PUBLIC_FIREBASE_PROJECT_ID,
	PUBLIC_FIREBASE_STORAGE_BUCKET,
	PUBLIC_FIREBASE_APP_ID,
	PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	PUBLIC_FIREBASE_MEASUREMENT_ID
} from '$env/static/public';

const firebaseConfig = {
	apiKey: PUBLIC_FIREBASE_API_KEY,
	authDomain: PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: PUBLIC_FIREBASE_STORAGE_BUCKET,
	appId: PUBLIC_FIREBASE_APP_ID,
	messagingSenderId: PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	measurementId: PUBLIC_FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const USE_EMULATOR = true; // TODO
if (USE_EMULATOR) {
	connectAuthEmulator(auth, 'http://127.0.0.1:9099', {
		disableWarnings: true
	});
}
