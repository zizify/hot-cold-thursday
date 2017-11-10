import React from 'react';

import './guess-form.css';

class GuessForm extends React.Component {
  // We now controlled an input
  state = {
    guess: ''
  }

  _handleSubmit = e => {
    e.preventDefault();

    if (!this.state.guess) {
      return
    }

    this.props.updateCurrentGuess(this.state.guess)
    this.setState({ guess: '' })
  }

  _handleChange = e => {
    const { value } = e.target
    // if the type is a letter we dont let it go
    if (isNaN(value)) {
      alert('Plz provided only number')
      return
    }


    // If the number is bigger then 100 we dont let the user type it
    if (parseInt(value, 0) > 100) {
      return
    }

    this.setState({ guess: value })
  }

  render() {
    return (
        <form onSubmit={this._handleSubmit}>
            <input type="text" onChange={this._handleChange}
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" value={this.state.guess}  />

            <input type="submit" className="button" value="Guess"/>
        </form>
    )
  }
}

export default GuessForm
