import React, {Component} from 'react'

class Palindrome extends Component {
    constructor (props) {
        super(props)
        this.state= {
            userInput: '',
            palindrome: '',
        }
    }

    updateUserInput = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }

    solveProblem = () => {
        let {userInput} = this.state
        
        let palindrome = userInput.toLowerCase().split('').reverse().join('') === userInput.toLowerCase() ? true : false
        this.setState({userInput: '', palindrome})
    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input placeholder='Enter a word or phrase' onChange={this.updateUserInput} className='inputLine'></input>
                <button onClick={this.solveProblem} className='confirmationButton'>Check</button>
        <span className='resultsBox'>Palindrome: {JSON.stringify(this.state.palindrome)}</span>
            </div>
        )
    }
}

export default Palindrome