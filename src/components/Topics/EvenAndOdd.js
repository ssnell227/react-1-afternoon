import React, { Component } from 'react'

class EvenAndOdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: null,
        }
    }

    updateUserInput = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }

    solveProblem = () => {
        const evenArray = []
        const oddArray = []
        if (this.state.userInput) {
            const inputArray = this.state.userInput.split(',').map(string => Number(string))
            inputArray.forEach(item => {
                item % 2 === 0 ? evenArray.push(item) : oddArray.push(item)
            })

            this.setState({ evenArray, oddArray, userInput: null })
        }
    }

    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input placeholder='Enter comma-separated numbers' onChange={this.updateUserInput} className='inputLine'></input>
                <button onClick={this.solveProblem} className='confirmationButton'>Split</button>
                <span className='resultsBox'>Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className='resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd