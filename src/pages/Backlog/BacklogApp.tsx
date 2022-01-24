import React, {useEffect} from 'react';
import { collection, getDocs } from "firebase/firestore";
import {db} from "../firebase";

function BacklogApp() {
    useEffect(() => {
        if(!!db) {
            getDocs(collection(db!, "backlog"))
                .then(res => {
                    res.forEach((doc) => {
                        console.log(`${doc.id} => ${doc.data().title}`);
                    });
                });
        }
    }, [])

    return (
        <div>
            <p>Cześć, jestem BacklogApp!</p>
        </div>
    );
}

export default BacklogApp;
