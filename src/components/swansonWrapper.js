import React, { Component } from 'react';
import axios from 'axios';

import SwansonQuotes from './swanson-files/swansonQuotes';
import SwansonAdd from './swanson-files/swansonAdd';

import './swansonWrapper.css'

class SwansonWrapper extends Component {
    constructor() {
        super();

        this.state = {
            quotes: [],
            index: 0,
        };
    };

    addQuote = (quote) => {
        axios.post('/api/swansonQuotes', quote).then(res => {
            this.setState({ quotes: res.data });
        }).catch(err => console.log("We have an error", err));
    };

    deleteQuote = (id) => {
        axios.delete(`/api/swansonQuotes/${id}`).then(res => {
            this.setState({ quotes: res.data });
        }).catch(err => console.log("We have an error", err));
    };

    editQuote = (quote, id) => {
        axios.put(`/api/swansonQuote/${id}`, quote).then(res => {
            this.setState({ quotes: res.data });
        }).catch(err => console.log("We have an error", err));
    }

    componentDidMount() {
        axios.get('/api/swansonQuotes').then(res => {
            this.setState({ quotes: res.data });
        }).catch(err => console.log("We have an error", err));
    };

    render() {
        return(
            <div>
                <SwansonAdd addQuoteFn={this.addQuote}/>
                <SwansonQuotes 
                quotes={this.state.quotes}
                deleteQuoteFn={this.deleteQuote}
                editQuoteFn={this.editQuote}/>
            </div>
        )
    };
};

export default SwansonWrapper;