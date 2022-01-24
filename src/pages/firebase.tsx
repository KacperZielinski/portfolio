import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { Auth, getAuth } from "firebase/auth";

let db: Firestore | undefined;
let auth: Auth | undefined;

const initializeFirebase = (firebaseConfig: any) => {
    const firebaseApp = initializeApp(firebaseConfig);
    db = getFirestore(firebaseApp);
    auth = getAuth(firebaseApp);
}

export {initializeFirebase, db, auth}
