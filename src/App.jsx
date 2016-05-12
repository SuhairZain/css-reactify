/**
 * Created by SuhairZain on 12/5/16.
 */

import React, {Component} from 'react';

import InputCard from './InputCard.jsx';

import stringify from 'stringify-object';

import {reactify} from './core/reactify';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            input: "",
            output: ""
        };
    }

    styles = {
        root: {
            display: 'flex'
        }
    };

    handleChange = (event) => {
        this.setState({
            input: event.target.value,
            output: stringify(reactify(event.target.value))
        });
    };

    render() {
        return (
            <div style={this.styles.root}>
                <InputCard onChange={this.handleChange} text={this.state.input}/>
                <InputCard text={this.state.output}/>
            </div>
        );
    }
}

export default App;