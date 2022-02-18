import React, {useEffect, useState} from 'react';
import {createOrUpdate, getDataFromCollection, NATIVE_TO_FOREIGN_COLLECTION} from "../../firebase";

function NativeToForeignMode() {
    const [newNativeWord, setNewNativeWord] = useState('');
    const [newForeignWord, setNewForeignWord] = useState('');
    const [newForeignGermanWord, setNewForeignGermanWord] = useState('');

    // TODO use reducers here
    const [guessInput, setGuessInput] = useState('');
    const [guessWord, setGuessWord] = useState('');
    const [guessWordSolution, setGuessWordSolution] = useState('');
    const [guessWordGermanSolution, setGuessWordGermanSolution] = useState('');
    const [guessResult, setGuessResult] = useState(true);

    const sendNewWord = async () => {
        await createOrUpdate(NATIVE_TO_FOREIGN_COLLECTION, {
            pl: newNativeWord,
            en: newForeignWord,
            de: newForeignGermanWord
        });
        setNewNativeWord('');
        setNewForeignWord('');
        setNewForeignGermanWord('');
    }

    const checkWordAndTakeNext = async () => {
        if (guessInput === guessWordSolution || guessInput === guessWordGermanSolution) {
            setGuessResult(true);
            setGuessInput('');
        } else {
            setGuessResult(false);
        }
        // TODO get random from DB, not on FE side!
        const words = await getDataFromCollection(NATIVE_TO_FOREIGN_COLLECTION);
        const docs = words?.docs;
        const randomItem = docs[Math.floor(Math.random() * docs.length)];
        setGuessWord(randomItem?.data()?.pl);
        setGuessWordSolution(randomItem?.data()?.en);
        setGuessWordGermanSolution(randomItem?.data()?.de);
    }

    useEffect(() => {
        (async () => checkWordAndTakeNext())()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <p>Add new word/phrase</p>
            <p>PL</p>
            <input value={newNativeWord} onChange={e => setNewNativeWord(e.target.value)} />
            <p>EN</p>
            <input value={newForeignWord} onChange={e => setNewForeignWord(e.target.value)} />
            <p>DE</p>
            <input value={newForeignGermanWord} onChange={e => setNewForeignGermanWord(e.target.value)} />
            <br />
            <button onClick={sendNewWord}>Send</button>
            <hr />
            <div>GuessMode</div>
            <p>{guessWord}</p>
            <input value={guessInput} onChange={e => setGuessInput(e.target.value)} />
            <br />
            <button onClick={checkWordAndTakeNext}>Check</button>
            <p>Last result: {guessResult ? 'OK' : 'BAD'}</p>
            <p>Todo: Display whole previous word</p>
        </div>
    );
}

export default NativeToForeignMode;
