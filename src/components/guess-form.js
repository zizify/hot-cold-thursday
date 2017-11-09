import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    console.log(props);
    return (
        <form>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" onSubmit={e => {e.preventDefault; console.log(e.target.value)}} />
            <input type="submit" id="guessButton" onSubmit={e => {e.preventDefault; props.increment()}} className="button" name="submit" value="Guess"/>
        </form>
    );
};

