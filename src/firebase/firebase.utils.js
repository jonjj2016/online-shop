import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBH5hy1NGN1KD47Fi2lialmLr093R2lMW8",
    authDomain: "crwn-db-8c93e.firebaseapp.com",
    databaseURL: "https://crwn-db-8c93e.firebaseio.com",
    projectId: "crwn-db-8c93e",
    storageBucket: "",
    messagingSenderId: "973146180029",
    appId: "1:973146180029:web:7e382f45c3543a50896ad4",
    measurementId: "G-8WYQ6DX6S6"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    console.log(snapShot)
    if (!snapShot.exists) {
        const {
            displayName,
            email
        } = userAuth;
        const createdAt = new Date()
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log("Error creating user", err)
        }
    }
    return userRef;
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