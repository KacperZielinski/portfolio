import { initializeApp } from "firebase/app";
import {addDoc, collection, Firestore, getDocs, getFirestore} from "firebase/firestore";
import {Auth, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {FirebaseConfig, User} from "../model/LocalStorageData";

export const NATIVE_TO_FOREIGN_COLLECTION = 'ntf';

export let db: Firestore | undefined;
export let auth: Auth | undefined;

export const initializeFirebase = (firebaseConfig: any) => {
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
        initializeFirebase(config);
        signInWithEmailAndPassword(auth!, localData.email || '', localData.password || '')
            .then((userCredential) => {
                // Signed in
                // const user = userCredential.user;
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
            });
        // login user and put userCredential in store Context/Redux ?
        // route to some other place or render component
    }
}
loadFirebaseConfigFromLocalStorage();

export const getDataFromCollection = async (path: string) => {
    return getDocs(collection(db!, path))
}

export const createOrUpdate = async (path: string, data: any) => {
    try {
        return addDoc(collection(db!, path), data);
    } catch (e) {
        return;
    }
}
