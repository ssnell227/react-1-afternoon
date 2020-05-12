import React, {Component} from 'react'

class FilterString extends Component {
    constructor (props) {
        super(props)
        this.state = {
            unfilteredArray: [
                'Create a constructor method that creates an initial state:',
                'unFilteredArray - This should default to an array of strings. You choose what strings go in the array.',
                'userInput - This should default to an empty string.',
                'filteredArray - This should default to an empty array.'
            ],
            userInput: '',
            filteredArray: []
        }
    }

    updateUserInput = (e) => {
        this.setState ({
            userInput: e.target.value
        })
    }

    solveProblem = () => {
        const { unfilteredArray, userInput } = this.state

        const filteredArray = unfilteredArray.filter(string => string.toLowerCase().includes(userInput.toLowerCase())===true)
        console.log(filteredArray)

        this.setState({
            userInput: '',
            filteredArray
        })
    }

    render() {
        return (
        <div className='puzzleBox filterStringPB'>
            <h4>Filter String</h4>
        <span className='puzzleText'>Original: {JSON.stringify(this.state.unfilteredArray)}</span>
            <input placeholder='Enter filter-by parameter' onChange={this.updateUserInput} className='inputLine'></input>
            <button onClick={this.solveProblem} className='confirmationButton'>Filter</button>
        <span className='resultsBox filterStringRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
        </div>
        )
    }
}

export default FilterString