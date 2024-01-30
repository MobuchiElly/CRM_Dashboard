import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBcZ3wojtFBdpk24yW-khi5QF6J1wLEfV4",
    authDomain: "buchi-app-34066.firebaseapp.com",
    projectId: "buchi-app-34066",
    storageBucket: "buchi-app-34066.appspot.com",
    messagingSenderId: "579874961380",
    appId: "1:579874961380:web:084796ea0e1132980b79f1"
}

// if (firebaseConfig.apps.length < 1) {
//     const firebaseApp = initializeApp(firebaseConfig);
// }

const firebaseApp = initializeApp(firebaseConfig);