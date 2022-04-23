import {Component} from 'react';
import './search.css'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: props.term
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <div className="search-form">
                <label htmlFor="search" className="search-label">Lookiing for</label>
                <input autoFocus type="text" name="search" value={this.state.term} placeholder="start typing here..." className="search-input" onChange={this.onUpdateSearch} />
            </div>
        )
    }
    
}

export default Search;