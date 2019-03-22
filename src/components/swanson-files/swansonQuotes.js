import React, { Component } from 'react';

import SwansonEdit from './swansonEdit';

import './swansonQuotes.css';

class SwansonQuotes extends Component {
    constructor() {
        super();

        this.state = {
            index: 0,
        }
    }

    deleteQuote = (id) => {
        let currentIndex = this.state.index
        this.props.deleteQuoteFn(id);
        this.setState({ index: currentIndex - 1})
    }

    previous = () => {
        let currentIndex = this.state.index
        if (this.state.index > 0) {
            this.setState({ index: currentIndex - 1});
        } else {
            this.setState({ index: this.props.quotes.length - 1});
        };
    };

    next = () => {
        let currentIndex = this.state.index
        if (this.state.index < this.props.quotes.length - 1) {
            this.setState({ index: currentIndex + 1 });
        } else {
            this.setState({ index: 0 });
        };
    };

    random = () => {
        let currentIndex = this.props.quotes.length;
        let randomNum = Math.floor(Math.random() * currentIndex);
        console.log(randomNum);
        this.setState({ index: randomNum })
    }

    render() {
        let quote = this.props.quotes.map(quote => {
            return(
                <div className="quote-box" key={quote.id}>
                    <figure className="quote-img-box">
                        <img className="quote-img" src={quote.img} alt="of event"/>
                    </figure>
                    <h1 className="quote-quote">Quote: "{quote.quote}"</h1>
                    <h1 className="quote-season">Season: {quote.season}</h1>
                    <h1 className="quote-episode">Episode: {quote.episode}</h1>
                    <button className="quote-delete" onClick={() => this.deleteQuote(quote.id)}>Delete Quote</button>
                    <SwansonEdit className="toggle-display-edit"
                    editQuoteFn={this.props.editQuoteFn}
                    id={quote.id}/>
                </div>
            )
        })
        return(
            <div>
                <h1 className="quote-counter">Ron Quote: {this.state.index + 1} / {this.props.quotes.length}</h1>
                <button className="previous-button" onClick={() => this.previous()}>Previous</button>
                <button className="next-button" onClick={() => this.random()}>Random Quote</button>
                <button className="next-button" onClick={() => this.next()}>Next</button>
                {quote[this.state.index]}
            </div>
        )
    }
}

export default SwansonQuotes;