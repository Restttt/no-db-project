import React, { Component } from 'react';

import './swansonAdd.css';

class SwansonAdd extends Component {
    constructor() {
        super();

        this.state = {
            display: "hidden",
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

    addQuote = () => {
        let quote = {
            season: this.state.season,
            episode: this.state.episode,
            quote: this.state.quote,
            img: this.state.img
        };
        this.props.addQuoteFn(quote);
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
            <div className="add-fields">
                <button className="toggle-display-add" onClick={() => this.changeDisplay()}>Add Quote</button>
                <input name="img" type="text" placeholder="img" onChange={this.updateText}/>
                <input name="season" type="number" placeholder="season" onChange={this.updateText}/>
                <input name="episode" type="number" placeholder="episode" onChange={this.updateText}/>
                <input name="quote" type="text" placeholder="quote" onChange={this.updateText}/>
                <button className="add-quote-button" onClick={() => this.addQuote()}>Submit Quote</button>
            </div> 
    ) : (
        <div>
            <button className="toggle-display-add" onClick={() => this.changeDisplay()}>Add Quote</button>
        </div>
    )};
};

export default SwansonAdd;