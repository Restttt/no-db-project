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
            img: ''
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
        if (this.state.display === "hidden") {
            this.setState({ display: "visible"});
        } else {
            this.setState({ display: "hidden"})
        };
    };

    render() {
        let display = {
            visibility: this.state.display
        }

        return(
            <div className="add-fields">
                <button className="toggle-display-add" onClick={() => this.changeDisplay()}>Add Quote</button>
                <input name="img" type="text" style={display} placeholder="img" onChange={this.updateText}/>
                <input name="season" type="number" style={display} placeholder="season" onChange={this.updateText}/>
                <input name="episode" type="number" style={display} placeholder="episode" onChange={this.updateText}/>
                <input name="quote" type="text" style={display} placeholder="quote" onChange={this.updateText}/>
                <button style={display} className="add-quote-button" onClick={() => this.addQuote()}>Submit Quote</button>
            </div>
        )
    }
}

export default SwansonAdd;