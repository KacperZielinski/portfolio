import React, {useEffect, useState} from 'react';
import Quiz from "./Quiz/Quiz";
import NativeToForeignMode from "./NativeToForeignMode/NativeToForeignMode";

enum Mode {
    NOT_CHOSEN,
    QUIZ,
    NATIVE_TO_FOREIGN
}

function ForeignLanguageLearn() {
    const [mode, setMode] = useState(Mode.NOT_CHOSEN);

    return (
        <div>
            {mode === Mode.NOT_CHOSEN && (
                <>
                    <p>Please select mode: </p>
                    <div onClick={() => setMode(Mode.QUIZ)}>Quiz</div>
                    <div onClick={() => setMode(Mode.NATIVE_TO_FOREIGN)}>NativeToForeign</div>
                </>
            )}
            {mode === Mode.QUIZ && (
                <Quiz />
            )}
            {mode === Mode.NATIVE_TO_FOREIGN && (
                <NativeToForeignMode />
            )}
        </div>
    );
}

export default ForeignLanguageLearn;
