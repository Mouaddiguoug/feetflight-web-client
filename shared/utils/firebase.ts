import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getMessaging, isSupported, Messaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_APP.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_APP.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Ensure Firebase is only initialized once
const app: FirebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

let messaging: Messaging | null = null;

if (typeof window !== "undefined") {
  // Only import messaging in browser (not on server)
  isSupported().then((supported) => {
    if (supported) {
      messaging = getMessaging(app);
    } else {
      console.warn("Firebase Messaging not supported in this browser.");
    }
  });
}

export { app, messaging };