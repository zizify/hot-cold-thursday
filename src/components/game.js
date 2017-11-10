import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

function newAnswer() {
  return Math.floor(Math.random() * 100) + 1
}

function guessFeedback(answer, userGuess) {
  const value = Math.abs(answer - parseInt(userGuess, 0))
  if (value > 50) {
    return 'You Colder'
  } else if (value > 40) {
    return 'You Cold'
  } else if (value > 30) {
    return 'You warm'
  } else if (value > 10) {
    return 'You warmer'
  } else if (value > 0) {
    return 'You hot'
  }

  return 'You won'
}


const initialState = {
  currentGuess: null,
  currentFeedback: 'Make a guess!',
  pastGuesses: [],
  whatView: false
}

export default class Game extends React.Component {
    constructor() {
        super();
        this.state = { ...initialState, answer: newAnswer() };

        this.incrementCount = this.incrementCount.bind(this);
        this.updateCurrentGuess = this.updateCurrentGuess.bind(this);
        this.updateFeedBack = this.updateFeedBack.bind(this);
        this.resetState = this.resetState.bind(this);
    }

    incrementCount() {
        this.setState({count: this.state.pastGuesses.length + 1})
    }

    updateCurrentGuess(guess) {
      if (this.state.pastGuesses.find(i => i === guess)) {
        alert(`You have already use the number ${guess}`)
        return
      }
      const newGuesses = [...this.state.pastGuesses, guess]
      this.setState({pastGuesses: newGuesses, currentGuess: guess})

      this.updateFeedBack(guess);
    }

    updateFeedBack(guess) {
      this.setState({ currentFeedback: guessFeedback(this.state.answer, guess)})
    }

    resetState() {
        this.setState({ ...initialState, answer: newAnswer() })
    }

    render() {

        return (
            <div>
                <Header reset={this.resetState}/>
                <GuessSection 
                    feedback={this.state.currentFeedback} 
                    increment={this.incrementCount} 
                    updateCurrentGuess={this.updateCurrentGuess}/>
                <GuessCount count={this.state.pastGuesses.length} />
                <GuessList guesses={this.state.pastGuesses} />
            </div>
        );
    }
}

