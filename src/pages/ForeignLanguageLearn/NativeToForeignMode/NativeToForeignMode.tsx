import React, {useEffect, useState} from 'react';
import {createOrUpdate, getDataFromCollection, NATIVE_TO_FOREIGN_COLLECTION} from "../../firebase";
import {Input, Button} from "@mui/material";

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
    const [previousWord, setPreviousWord] = useState({ pl: '', en: '', de: '' });

    useEffect(() => {
        (async () => checkWordAndTakeNext())()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
        } else {
            setGuessResult(false);
        }

        setGuessInput('');
        setPreviousWord({
            pl: guessWord,
            en: guessWordSolution,
            de: guessWordGermanSolution
        });

        // TODO get random from DB, not on FE side!
        const words = await getDataFromCollection(NATIVE_TO_FOREIGN_COLLECTION);
        const docs = words?.docs;
        const randomItem = docs[Math.floor(Math.random() * docs.length)];
        setGuessWord(randomItem?.data()?.pl);
        setGuessWordSolution(randomItem?.data()?.en);
        setGuessWordGermanSolution(randomItem?.data()?.de);
    }


    return (
        <div>
            <p>Add new word/phrase</p>
            <Input value={newNativeWord} placeholder="PL" onChange={e => setNewNativeWord(e.target.value)}/>
            <Input value={newForeignWord} placeholder="EN" onChange={e => setNewForeignWord(e.target.value)}/>
            <Input value={newForeignGermanWord} placeholder="DE" onChange={e => setNewForeignGermanWord(e.target.value)}/>
            <br/>
            <Button variant="contained" onClick={sendNewWord}>Send</Button>
            <hr />
            <div>GuessMode</div>
            <p>{guessWord}</p>
            <Input value={guessInput} onChange={e => setGuessInput(e.target.value)} />
            <br />
            <Button variant="contained" onClick={checkWordAndTakeNext}>Check</Button>
            {guessResult && (<p>Last result: {guessResult ? 'OK' : 'BAD'}</p>)}
            <br />
            {!!previousWord.pl && (
                <>
                    <p>Previous word:</p>
                    <p>PL {previousWord.pl}</p>
                    <p>EN {previousWord.en}</p>
                    <p>DE {previousWord.de}</p>
                </>
            )}

        </div>
    );
}

export default NativeToForeignMode;
