/**
 * Created by SuhairZain on 12/5/16.
 */

import React, {Component} from 'react';

import Card from 'material-ui/Card';
import TextField from 'material-ui/TextField';

class InputCard extends React.Component {
    styles = {
        root: {
            marginLeft: '4px',
            marginRight: '4px',
            width: '50%'
        },
        field: {
            padding: '0 4px'
        },
        underline: {
            left: '4px',
            width: 'calc(100% - 16px)'
        }
    };

    render() {
        return (
            <div style={this.styles.root}>
                <Card style={this.styles.card}>
                    <TextField
                        value={this.props.text}
                        style={this.styles.field}
                        hintText={this.props.hint}
                        multiLine={true}
                        fullWidth={true}
                        rows={8}
                        underlineStyle={this.styles.underline}
                        style={this.styles.field}
                        onChange={this.props.onChange}/>
                </Card>
            </div>
        );
    }
}

export default InputCard;