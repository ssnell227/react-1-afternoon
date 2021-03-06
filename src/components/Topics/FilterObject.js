import React, {Component} from 'react'

class FilterObject extends Component {
    constructor (props) {
        super(props)
        this.state = {
            unfilteredArray: [
                {name: 'Stephen',  dinosaur: 'Stegasaurus', dog: 'Rex'},
                {name: 'Mike',  dinosaur: 'T-rex', laptop: 'Acer'},
                {name: 'Danny',  dinosaur: 'Pterodactyl', dog: 'Fluffy'},
                {name: 'Laura',  dinosaur: 'Philosoraptor', laptop: 'Macbook'},
                {name: 'Dougie',  dinosaur: 'Brontosaurus', janitor: 'Scruffy'}
            ],
            userInput: '',
            filteredArray: [],
        }
    }

    updateUserInput = (e) => {
        this.setState(
            {userInput: e.target.value}
        )
    }

    solveProblem = () => {
        let {unfilteredArray, userInput} = this.state

        
        let filteredArray = unfilteredArray.filter(obj => obj[userInput])

        this.setState({
            userInput: '',
            filteredArray
        })
    }

    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: {JSON.stringify(this.state.unfilteredArray)}</span>
                <input placeholder='Enter filter-by parameter' onChange={this.updateUserInput} className='inputLine'></input>
                <button onClick={this.solveProblem} className='confirmationButton'>Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject