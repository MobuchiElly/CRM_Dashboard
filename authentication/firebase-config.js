import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const actionCodeSettings = {
  url: "https://crm-dashboard-ochre.vercel.app/",
  handleCodeInApp: true,
  iOS: {
    bundleId: "com.example.ios",
  },
  android: {
    packageName: "com.example.android",
    installApp: true,
    minimumVersion: "12",
  },
  dynamicLinkDomain: "example.page.link",
};

const firebaseConfig = {
  apiKey: "AIzaSyBcZ3wojtFBdpk24yW-khi5QF6J1wLEfV4",
  authDomain: "buchi-app-34066.firebaseapp.com",
  projectId: "buchi-app-34066",
  storageBucket: "buchi-app-34066.appspot.com",
  messagingSenderId: "579874961380",
  appId: "1:579874961380:web:084796ea0e1132980b79f1",
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);