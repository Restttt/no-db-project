import React, { Component } from 'react';
import axios from 'axios';

import SwansonQuotes from './swanson-files/swansonQuotes';

import './swansonWrapper.css'

class SwansonWrapper extends Component {
    constructor() {
        super();

        this.state = {
            externalQuotes: [],
            quotes: [],
            index: 0,
        };
    };

    addQuote = (quote) => {
        axios.post('/api/swansonQuotes', quote).then(res => {
            this.setState({ quotes: res.data });
        }).catch(err => console.log("We have an error", err));
    };

    pushQuote = (quote) => {
        let nowArray = [];
        nowArray.push(quote)
        console.log(nowArray);
        axios.post('/api/swansonPushExternal', nowArray).then(res => {
            this.setState({ quotes: res.data });
        }).catch(err => console.log("We have an error", err));
    }

    deleteQuote = (id) => {
        axios.delete(`/api/swansonQuotes/${id}`).then(res => {
            this.setState({ quotes: res.data });
        }).catch(err => console.log("We have an error", err));
    };

    deleteQuoteExternal = (index) => {
        let external = this.state.externalQuotes;
        external.splice(index, 1);
        this.setState({externalQuotes: external});
    }

    editQuote = (quote, id) => {
        axios.put(`/api/swansonQuote/${id}`, quote).then(res => {
            this.setState({ quotes: res.data });
        }).catch(err => console.log("We have an error", err));
    }

    componentWillMount() {
        axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes/58').then(res => {
            this.setState({ externalQuotes: res.data});
        }).catch(err => console.log("we have an error", err));
    };

    componentDidMount() {
        axios.get('/api/swansonQuotes').then(res => {
            this.setState({ quotes: res.data });
        }).catch(err => console.log("We have an error", err));
    };

    render() {
        return(
            <div>
                <SwansonQuotes 
                quotes={this.state.quotes}
                deleteQuoteFn={this.deleteQuote}
                editQuoteFn={this.editQuote}
                externalQuotes={this.state.externalQuotes}
                deleteQuoteExternalFn={this.deleteQuoteExternal}
                pushQuoteFn={this.pushQuote}
                addQuoteFn={this.addQuote}/>
            </div>
        )
    };
};

export default SwansonWrapper;