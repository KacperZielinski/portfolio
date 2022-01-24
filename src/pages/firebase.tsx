import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { Auth, getAuth } from "firebase/auth";
import {FirebaseConfig, User} from "../model/LocalStorageData";

let db: Firestore | undefined;
let auth: Auth | undefined;

const initializeFirebase = (firebaseConfig: any) => {
    const firebaseApp = initializeApp(firebaseConfig);
    db = getFirestore(firebaseApp);
    auth = getAuth(firebaseApp);
}

export const loadFirebaseConfigFromLocalStorage: () => void = () => {
    const firebaseLocalConfig = localStorage.getItem("firebase");
    if (firebaseLocalConfig !== null) {
        const localData: FirebaseConfig & User = JSON.parse(firebaseLocalConfig);
        const config: FirebaseConfig = {
            appId: localData.appId,
            authDomain: localData.authDomain,
            messagingSenderId: localData.messagingSenderId,
            projectId: localData.projectId,
            apiKey: localData.apiKey,
            storageBucket: localData.storageBucket,
        }
        console.log(config);
        initializeFirebase(config);
        // login user and put userCredential in store Context/Redux ?
        // route to some other place or render component
    }
}
loadFirebaseConfigFromLocalStorage();

export {initializeFirebase, db, auth}
