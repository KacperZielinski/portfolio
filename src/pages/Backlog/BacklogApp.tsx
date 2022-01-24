import React, {useEffect, useState} from 'react';
import {addDoc, collection, getDocs } from "firebase/firestore";
import {db} from "../firebase";

interface SimpleTodo {
    id: string;
    title: string;
}

function BacklogApp() {
    const [todos, setTodos] = useState<SimpleTodo[]>([]);
    const [title, setTitle] = useState<string>('');
    // debounce input or make snapshot realtime from firestore
    const [refreshData, setRefreshData] = useState<boolean>(true);

    useEffect(() => {
        if(refreshData) {
            getDocs(collection(db!, "backlog"))
                .then(res => {
                    const arr: SimpleTodo[] = [];
                    res.forEach((doc) => {
                        console.log(`${doc.id} => ${doc.data().title}`);
                        arr.push({id: doc.id, title: doc.data().title});
                    });
                    setTodos(arr);
                });
        }
        setRefreshData(false);
    }, [refreshData])

    const createOrUpdate = async () => {
        try {
            const docRef = await addDoc(collection(db!, "backlog"), {
                title: title
            });
            setTitle('');
            setRefreshData(true);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <div>
            <p>Cześć, jestem BacklogApp!</p>
            {todos.map(todo => <div key={todo.id}>{todo.title}</div>)}
            <input value={title} onChange={e => setTitle(e.target.value)} />
            <button onClick={createOrUpdate}>Add</button>
        </div>
    );
}

export default BacklogApp;
