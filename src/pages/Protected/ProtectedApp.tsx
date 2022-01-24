import React, { ChangeEvent, useState} from 'react';
import {Link} from "react-router-dom";
import {auth, loadFirebaseConfigFromLocalStorage} from "../firebase";
import {FirebaseConfig} from "../../model/LocalStorageData";
import { signInWithEmailAndPassword } from 'firebase/auth';

function ProtectedApp() {
    const [firebaseConfig, setFirebaseConfig] = useState<FirebaseConfig>()
    const [masterKey, setMasterKey] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    async function fileToJSON(file: ChangeEvent<HTMLInputElement>) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.onload = event => resolve(JSON.parse(event.target!.result as string))
            fileReader.onerror = error => reject(error)
            fileReader.readAsText(file.target!.files![0])
        }).then(result => setFirebaseConfig(result as FirebaseConfig))
    }

    return (
        <div>
            <h1>Welcome, please login</h1>
            <br />
            <form onSubmit={(e) => {
                e.preventDefault();
                localStorage.setItem("firebase", JSON.stringify(firebaseConfig));
                console.log(firebaseConfig);
                loadFirebaseConfigFromLocalStorage();
            }}>
                <input value={firebaseConfig?.appId} hidden readOnly />
                <input value={firebaseConfig?.apiKey} hidden readOnly />
                <input value={firebaseConfig?.authDomain} hidden readOnly />
                <input value={firebaseConfig?.projectId} hidden readOnly />
                <input value={firebaseConfig?.storageBucket} hidden readOnly />
                <input value={firebaseConfig?.messagingSenderId} hidden readOnly />
                <input value={email} onChange={e => setEmail(e.target.value)} />
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                <input type="file" accept='application/json' onChange={(e) => fileToJSON(e)} />
                <button type='submit'>Save</button>
            </form>
            <br />
            <p>Or use password!</p>
            <input type='password' value={masterKey} onChange={e => setMasterKey(e.target.value)} />
            <button onClick={() => {
                loadFirebaseConfigFromLocalStorage()
                // const auth = getAuth();
                signInWithEmailAndPassword(auth!, email, password)
                    .then((userCredential) => {
                        // Signed in
                        const user = userCredential.user;
                        alert('succeeddd!');
                        console.log(user);
                        // ...
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        alert('failed!');
                    });
            }}>
                Login
            </button>
            <br />
            <Link to="/todo">Backlog</Link>
            <Link to="/learn">LearnIT</Link>
        </div>
    );
}

export default ProtectedApp;
