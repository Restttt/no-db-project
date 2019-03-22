import React, { Component } from 'react';

import './swansonEdit.css';

class SwansonEdit extends Component {
    constructor() {
        super();

        this.state = {
            season: 0,
            episode: 0,
            quote: '',
            img: '',
            edit: false
        };
    };

    updateText = (e) => {
        let { name, value } = e.target
        this.setState({ [name]: value})
    }

    editQuote = () => {
        let quote = {
            season: this.state.season,
            episode: this.state.episode,
            quote: this.state.quote,
            img: this.state.img
        };
        this.props.editQuoteFn(quote, this.props.id);
    }

    changeDisplay = () => {
        if (this.state.edit === false) {
            this.setState({ edit: true});
        } else {
            this.setState({ edit: false})
        };
    };

    render() {

        return this.state.edit ? (
            <div>
                <button className="toggle-display-edit edit-button" onClick={() => this.changeDisplay()}>Edit Quote</button> <br />
                <input name="img" type="text" placeholder="img" onChange={this.updateText}/>
                <input name="season" type="number"placeholder="season" onChange={this.updateText}/>
                <input name="episode" type="number" placeholder="episode" onChange={this.updateText}/>
                <input name="quote" type="text" placeholder="quote" onChange={this.updateText}/> <br />
                <button className="edit-quote-button edit-button" onClick={() => this.editQuote()}>Submit Edit</button>
            </div>
        ) : ( 
            <div>
                <button className="toggle-display-edit edit-button" onClick={() => this.changeDisplay()}>Edit Quote</button>
            </div>
        )
    }
}

export default SwansonEdit;