import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: Math.floor(Math.random() * 100) + 1,
            currentGuess: null,
            currentFeedback: 'Make a guess!',
            feedback: ['hot', 'warm', 'cool', 'cold', 'You won!'],
            count: 0,
            pastGuesses: [],
            whatView: false
        };

        this.incrementCount = this.incrementCount.bind(this);
        this.updateCurrentGuess = this.updateCurrentGuess.bind(this);
        this.updateFeedBack = this.updateFeedBack.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    incrementCount() {
        let newCount = this.state.pastGuesses.length+1;
        this.setState({count: newCount})
    }

    updateCurrentGuess(guess) {
    //     this.state.pastGuesses.map(num => {
    //        if(num === guess) {
    //         return alert('Number already guessed, Pick a new number!')
    //        }
    //    }) 
        const newGuesses = [...this.state.pastGuesses, guess]
        this.setState({currentGuess: guess})
        this.setState({pastGuesses: newGuesses})

        this.updateFeedBack(guess);
    }

    updateFeedBack(guess) {
        let answer = this.state.answer;
        console.log(answer);
        let result;
        let index;

        if (guess > answer) {
            result = guess - answer;
        }

        else {
            result = answer - guess;
        }

        if (result === 0) {
            index = 4;
        }

        else if (result <= 10) {
            index = 0;
        }

        else if (result <= 20 && result > 10) {
            index = 1;
        }

        else if (result <= 50 && result > 20) {
            index = 2;
        }

        else if (result > 50) {
            index = 3;
        }

        console.log(result);

        let currentFeedback = this.state.feedback[index];

        this.setState({currentFeedback})
    }

    resetState() {
        this.setState({
            answer: Math.floor(Math.random() * 100) + 1,
            currentGuess: null,
            currentFeedback: 'Make a guess!',
            feedback: ['hot', 'warm', 'cool', 'cold', 'You won!'],
            count: 0,
            pastGuesses: [],
            whatView: false
        })
    }

    render() {

        return (
            <div>
                <Header reset={this.resetState}/>
                <GuessSection 
                    feedback={this.state.currentFeedback} 
                    increment={this.incrementCount} 
                    updateCurrentGuess={this.updateCurrentGuess}/>
                <GuessCount count={this.state.count} />
                <GuessList guesses={this.state.pastGuesses} />
            </div>
        );
    }
}

