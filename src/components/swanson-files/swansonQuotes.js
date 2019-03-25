import React, { Component } from 'react';

import SwansonEdit from './swansonEdit';
import SwansonAdd from './swansonAdd';

import './swansonQuotes.css';

class SwansonQuotes extends Component {
    constructor() {
        super();

        this.state = {
            index: 0,
            externalIndex: 0,
        }
    }

    deleteQuote = (id) => {
        let answer = prompt("Are you sure you want to delete this glorious quote? Type 'yes' if you are certain.")
        if (answer) {
            answer = answer.toLowerCase();
            if (answer === 'yes') {
                this.props.deleteQuoteFn(id);
                let currentIndex = this.state.index
                if (currentIndex > 0) {
                    this.setState({ index: currentIndex - 1})
                };
            };
        };
    };

    deleteQuoteExternal = (id) => {
        let answer = prompt("Are you sure you want to delete this glorious quote? Type 'yes' if you are certain.")
        if (answer) {
            answer = answer.toLowerCase();
            if (answer === 'yes') {
                this.props.deleteQuoteExternalFn(id);
                let currentIndex = this.state.index
                if (currentIndex > 0) {
                    this.setState({ index: currentIndex - 1})
                };
            };
        };
    };

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
        this.setState({ index: randomNum });
    };

    randomExternal = () => {
        let currentIndex = this.props.externalQuotes.length;
        let randomNum = Math.floor(Math.random() * currentIndex);
        this.setState({ externalIndex: randomNum });
    };

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
                    <button className="previous-button" onClick={() => this.previous()}>Previous</button>
                    <button className="random-button" onClick={() => this.random()}>Random Quote</button>
                    <button className="next-button" onClick={() => this.next()}>Next</button>
                    <SwansonEdit className="toggle-display-edit"
                    editQuoteFn={this.props.editQuoteFn}
                    id={quote.id}/>
                </div>
            );
        });
        let external = this.props.externalQuotes.map((quote, index) => {
            return(
                <div className="quote-box" key={index} style={{marginTop: 20}}>
                    <h1 className="quote-quote">Random Quote from API: "{quote}"</h1>
                    <button className="quote-push" onClick={() => this.props.pushQuoteFn(quote)}>Push Quote</button>
                    <button className="quote-random-external" onClick={() => this.randomExternal()}>Random</button>
                    <button className="quote-delete" onClick={() => this.deleteQuoteExternal(index)}>Delete Quote</button>
                </div>
            )
        })
        return(
            <div className="swanson-quotes">
                

                <div className="quote-box">
                <SwansonAdd addQuoteFn={this.props.addQuoteFn}/>
                    <h1>Internal API Quote: {this.state.index + 1}/{this.props.quotes.length}</h1>
                    {quote[this.state.index]}
                    <h1>External API Quote: {this.state.externalIndex + 1}/{this.props.externalQuotes.length}</h1>
                    {external[this.state.externalIndex]}
                </div>
            </div>
        )
    }
}

export default SwansonQuotes;