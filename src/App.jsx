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
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        },
        cards: {
            display: 'flex',
            flexGrow: 1
        },
        title: {
            color: '#fff',
            fontSize: '3em',
            fontWeight: 100,
            textAlign: 'center',
            width: '100%'
        },
        footer: {
            color: '#fff',
            textAlign: 'center'
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
                <p style={this.styles.title}>Convert from Vanilla CSS to React Inline styles</p>
                <div style={this.styles.cards}>
                    <InputCard onChange={this.handleChange} text={this.state.input} hint="Vanilla css"/>
                    <InputCard text={this.state.output} hint="React inline styles"/>
                </div>
                <div style={this.styles.footer}>
                    Created by <a href="https://suhairzain.me">Suhair Zain</a>.
                    Hosted at and Source code available at <a href="https://github.com/SuhairZain/css-reactify">GitHub</a>
                </div>
            </div>
        );
    }
}

export default App;