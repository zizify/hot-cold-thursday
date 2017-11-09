import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    //console.log(props);
    function handleSubmit(e) {
        e.preventDefault();
        props.increment();
        props.updateCurrentGuess(Number(e.target.userGuess.value))
        e.target.userGuess.value = '';
    }
    return (
        <form onSubmit={e => {handleSubmit(e)}}>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess"  />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};

