
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore, initializeFirestore} from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getStorage } from 'firebase/storage';

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


//clave api 2: AIzaSyCd761OvxB280CfLEv0UvDm6mKkgzUlXww
//clave api : AIzaSyDJTZGoAxqEB1kAluflCt2MX-phao3vt4A
//Configuration: Build Credentials z_5cM0_38P (Default)  
// Keystore  
// Type                JKS
// Key Alias           7ab8f7033703d64936ebbcd87cc60564
// MD5 Fingerprint     C0:45:67:CA:55:4B:83:63:DF:38:3F:FA:1F:83:75:37
// SHA1 Fingerprint    47:64:20:58:07:44:26:04:E2:6D:27:10:F7:1D:20:85:97:08:99:54
// SHA256 Fingerprint  B7:0F:ED:A0:C7:85:D7:8E:23:31:7A:86:27:97:92:57:5A:62:85:2F:45:F5:92:C2:D6:02:F0:13:8A:58:68:67
// Updated             2 hours ago

//export const db = getFirestore(initFirebase);

//medidor agua datos originales
  /* 
  apiKey: "AIzaSyCRil_9HhL2UwrcLGLG5ooT3RFKwls6VXQ",
  authDomain: "medidor-agua-b5a83.firebaseapp.com",
  databaseURL: "https://medidor-agua-b5a83-default-rtdb.firebaseio.com",
  projectId: "medidor-agua-b5a83",
  storageBucket: "medidor-agua-b5a83.appspot.com",
  messagingSenderId: "483811688154",
  appId: "1:483811688154:web:5d84bc4bd650a9252cefe3"  
  */

//-----------------------------

//apiKey: "AIzaSyCVVL2C5Tuz5HQSjptupQxc5yIjdtEA7XA",
//authDomain: "lab-seeds.firebaseapp.com",
//projectId: "lab-seeds",
//storageBucket: "lab-seeds.appspot.com",
//messagingSenderId: "188796667433",
//appId: "1:188796667433:web:6316404073c65b8a2a3e38",
//measurementId: "G-5ENP04680T"

//labsseeds
/*
const firebaseConfig = {
  apiKey: "AIzaSyCVVL2C5Tuz5HQSjptupQxc5yIjdtEA7XA",
  authDomain: "lab-seeds.firebaseapp.com",
  projectId: "lab-seeds",
  storageBucket: "lab-seeds.appspot.com",
  messagingSenderId: "188796667433",
  appId: "1:188796667433:web:6316404073c65b8a2a3e38",
  measurementId: "G-5ENP04680T"
};

*/