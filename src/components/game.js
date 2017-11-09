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
        this.updateCurrentGuess = this.updateCurrentGuess.bind(this);
        this.updateFeedBack = this.updateFeedBack.bind(this);
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
    }

    updateFeedBack() {
        console.log(this.state.currentFeedback)
        this.setState({currentFeedback: 'hot'})
        // const temp = this.state.feedback.map(msg => console.log(msg))
        // const secretNumber = this.state.answer;
        // let userFeedback = this.state.currentFeedBack
        // const secretNumber = Math.floor(Math.random()*100)+1;
        // const userGuess = this.state.currentGuess;
        // console.log(userFeedback, secretNumber, userGuess)
        // if(secretNumber == userGuess){
        //     userFeedback = 'You Won. Click new game to play again';
        // } else if(Math.abs(secretNumber - userGuess) < 10){
        //     userFeedback = 'hot';
        // } else if(Math.abs(secretNumber - userGuess) < 20 && Math.abs(secretNumber - userGuess) > 9){
        //     userFeedback = ' Kinda hot';
        // } else if(Math.abs(secretNumber - userGuess) < 30 && Math.abs(secretNumber - userGuess) > 19){
        //     userFeedback = 'less than warm';
        // } else {
        //     userFeedback = 'cold';
        // }
        // function generateNumber(){
        //     secretNumber = Math.floor(Math.random()*100)+1;
        // }
    }

    render() {

        const temp = this.state.feedback.map(msg => msg)
        return (
            <div>
                <Header />
                {this.updateFeedBack}
                <GuessSection 
                    feedback={temp} 
                    increment={this.incrementCount} 
                    updateCurrentGuess={this.updateCurrentGuess}/>
                <GuessCount count={this.state.count} />
                <GuessList guesses={this.state.pastGuesses} />
            </div>
        );
    }
}

