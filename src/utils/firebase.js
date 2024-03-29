import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {initializeFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCVVL2C5Tuz5HQSjptupQxc5yIjdtEA7XA",
  authDomain: "lab-seeds.firebaseapp.com",
  projectId: "lab-seeds",
  storageBucket: "lab-seeds.appspot.com",
  messagingSenderId: "188796667433",
  appId: "1:188796667433:web:6316404073c65b8a2a3e38",
  measurementId: "G-5ENP04680T"
};

// Initialize Firebase
//export const initFirebase = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export {auth, db};

//export const db = getFirestore(initFirebase);

//apiKey: "AIzaSyCVVL2C5Tuz5HQSjptupQxc5yIjdtEA7XA",
//authDomain: "lab-seeds.firebaseapp.com",
//projectId: "lab-seeds",
//storageBucket: "lab-seeds.appspot.com",
//messagingSenderId: "188796667433",
//appId: "1:188796667433:web:6316404073c65b8a2a3e38",
//measurementId: "G-5ENP04680T"