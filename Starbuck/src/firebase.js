import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDxN7DKh8jbWjrFhd7jGJuAKs7h-xAZfcQ",
    authDomain: "jcwd-2302.firebaseapp.com",
    projectId: "jcwd-2302",
    storageBucket: "jcwd-2302.appspot.com",
    messagingSenderId: "61875750896",
    appId: "1:61875750896:web:c7fcae1e932e772448bf35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);