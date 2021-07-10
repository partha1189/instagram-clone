import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAGfoQ-fMqlDBIoEuaag6o_qfY4VqzipEM',
  authDomain: 'instagram-clone-8e1eb.firebaseapp.com',
  projectId: 'instagram-clone-8e1eb',
  storageBucket: 'instagram-clone-8e1eb.appspot.com',
  messagingSenderId: '918288649148',
  appId: '1:918288649148:web:4428b842b7ee60dd5c79b9'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };

console.log('firebase', firebase);
