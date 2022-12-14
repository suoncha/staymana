import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

export const firebaseConfig = {
    apiKey: "AIzaSyDE5D42xun3HtJZzJwASo6P7y2sj7SfNMg",
    authDomain: "staymanaauth.firebaseapp.com",
    projectId: "staymanaauth",
    storageBucket: "staymanaauth.appspot.com",
    messagingSenderId: "21411155699",
    appId: "1:21411155699:web:af6a8d26ae190f10fc3186"
}

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig)