import React, {Component} from 'react'

class Sum extends Component {
    constructor (props) {
        super(props)
        this.state = {
            number1: 0,
            number2: 0,
            sum: null,
        }
    }

    updateNumber = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(this.state.number1, this.state.number2)
    }

    solveProblem = () => {
        let { number1, number2} = this.state

        let sum = Number(number1) + Number(number2)

        this.setState({
            number1: 0,
            number2: 0,
            sum
        })
    }

    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input onChange={this.updateNumber} id='number1' placeholder='Enter first number'className='inputLine'></input>
                <input onChange={this.updateNumber} id='number2' placeholder='Enter second number' className='inputLine'></input>
                <button onClick={this.solveProblem} className='confirmationButton'>Sum the numbers</button>
        <span className='resultsBox'>Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum