import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            answer: null,
            currentGuess: null,
            currentFeedback: 'Make a guess!',
            feedback: ['hot', 'warm', 'cool', 'cold', 'You won!'],
            count: 0,
            pastGuesses: [],
            whatView: false
        };

        this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount() {
        let newCount = this.state.count + 1;
        this.setState({count: newCount})
    }

    updateCurrentGuess(guess) {
        this.setState({currentGuess: guess})
    }

    render() {
        return (
            <div>
                <Header />
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

