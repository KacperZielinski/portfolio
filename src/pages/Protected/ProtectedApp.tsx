import React, {ChangeEvent, useEffect, useState} from 'react';
import {useNavigate, Link} from "react-router-dom";
import {loadFirebaseConfigFromLocalStorage} from "../firebase";
import {FirebaseConfig} from "../../model/LocalStorageData";

function ProtectedApp() {
    const [firebaseConfig, setFirebaseConfig] = useState<FirebaseConfig>()
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("firebase") !== null) {
            navigate("/todo");
        }
    }, [navigate])

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
                localStorage.setItem("firebase", JSON.stringify(({
                    ...firebaseConfig,
                    email: email,
                    password: password
                })));
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
            <Link to="/todo">Backlog</Link>
            <Link to="/learn">LearnIT</Link>
        </div>
    );
}

export default ProtectedApp;
