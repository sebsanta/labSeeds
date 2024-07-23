
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore, initializeFirestore} from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getStorage } from 'firebase/storage';



// Initialize Firebase
// export const initFirebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

//----
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = initializeFirestore(app, {
//    experimentalForceLongPolling: true,
//  });

// export {auth, db};
//----




//export const db = getFirestore(initFirebase);



*/
