// src/firebase.js
import { initializeApp }        from 'firebase/app';
import { getAuth }              from 'firebase/auth';
import { initializeFirestore }  from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAbZHWwmFasHxYJ7_qkqUhq12lCaEGxOW0",
  authDomain: "chorestarschild-app.firebaseapp.com",
  projectId: "chorestarschild-app",
  storageBucket: "chorestarschild-app.firebasestorage.app",
  messagingSenderId: "135065292680",
  appId: "1:135065292680:web:82a8017b2acfd50966f43d",
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  cache: 'persistent'
});
