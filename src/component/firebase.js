/*import {
  initializeApp
} from 'firebase/app';
import {
  getAuth
} from 'firebase/auth';
import {
  getFirestore
} from 'firebase/firestore';
import {
  getStorage
} from 'firebase/storage';
*/


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Configure Firebase.
export const firebaseConfig = {
  apiKey: "AIzaSyANFYKD6449KVOKKjfFVTsncw-amvo4Ar0",
  authDomain: "stankindoska.firebaseapp.com",
  databaseURL: "https://stankindoska-default-rtdb.firebaseio.com",
  projectId: "stankindoska",
  storageBucket: "stankindoska.appspot.com",
  messagingSenderId: "921833089073",
  appId: "1:921833089073:web:b76079cf1fb96635e10d10"
};

export const app = firebase.initializeApp(firebaseConfig)



/*export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
*/

export const auth = firebase.auth();
export const db = firebase.firestore()