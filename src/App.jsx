/**
 * Created by SuhairZain on 12/5/16.
 */

import React, {Component} from 'react';

import InputCard from './InputCard.jsx';

class App extends React.Component {
    styles = {
        root: {
            display: 'flex'
        }
    };

    render() {
        return (
            <div style={this.styles.root}>
                <InputCard/>
                <InputCard/>
            </div>
        );
    }
}

export default App;