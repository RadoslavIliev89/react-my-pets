import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBvxgvuCt4C1I3mYW3kX62_kiuA7rfTrpI",
    authDomain: "react-my-pets-811dd.firebaseapp.com",
    projectId: "react-my-pets-811dd",
    storageBucket: "react-my-pets-811dd.appspot.com",
    messagingSenderId: "114396139762",
    appId: "1:114396139762:web:39db56757c9f4c5a46806b"
};
if (!firebase.apps.length) {

    firebase.initializeApp(firebaseConfig)
}


export default firebase;
export const auth = firebase.auth();