/**
 * Created by SuhairZain on 12/5/16.
 */

import React, {Component} from 'react';

import InputCard from './InputCard.jsx';

import {reactify} from './core/reactify';

class App extends React.Component {
    styles = {
        root: {
            display: 'flex'
        }
    };

    handleChange = (event) => {
        console.log(reactify(event.target.value));
    };

    render() {
        return (
            <div style={this.styles.root}>
                <InputCard onChange={this.handleChange}/>
                <InputCard/>
            </div>
        );
    }
}

export default App;