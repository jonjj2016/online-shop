import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCphy3vPUbIJv6_ZMdMnBXr8PK81-xNgIg",
    authDomain: "samle-db.firebaseapp.com",
    databaseURL: "https://samle-db.firebaseio.com",
    projectId: "samle-db",
    storageBucket: "",
    messagingSenderId: "480162923391",
    appId: "1:480162923391:web:1f5ab2bb3575d9e0b3d04a",
    measurementId: "G-394HMT60NW"
}
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;