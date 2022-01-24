import React, {useEffect, useState} from 'react';
import { collection, getDocs } from "firebase/firestore";
import {db} from "../firebase";

interface SimpleTodo {
    id: string;
    title: string;
}

function BacklogApp() {
    const [todos, setTodos] = useState<SimpleTodo[]>([]);
    useEffect(() => {
        getDocs(collection(db!, "backlog"))
            .then(res => {
                const arr: SimpleTodo[] = [];
                res.forEach((doc) => {
                    console.log(`${doc.id} => ${doc.data().title}`);
                    arr.push({id: doc.id, title: doc.data().title});
                });
                setTodos(arr);
            });
    }, [])

    return (
        <div>
            <p>Cześć, jestem BacklogApp!</p>
            {todos.map(todo => <div key={todo.id}>{todo.title}</div>)}
        </div>
    );
}

export default BacklogApp;
