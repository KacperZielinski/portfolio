import React from 'react';
import {Link} from "react-router-dom";

function ForeignLanguageLearn() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    return (
        <div>
            <p>Cześć, jestem BacklogApp!</p>
            <Link to="/todo">Backlog</Link>
            <form onSubmit={(e) => {
                e.preventDefault();
                console.log(username + password)
            }}>
                <input value={username} onChange={e => setUsername(e.target.value)} />
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                <button type='submit'>SEND ME</button>
            </form>
        </div>
    );
}

export default ForeignLanguageLearn;
