/**
 * Created by SuhairZain on 12/5/16.
 */

import React, {Component} from 'react';

import Card from 'material-ui/Card';
import TextField from 'material-ui/TextField';

class InputCard extends React.Component {
    styles = {
        card: {
            marginLeft: '4px',
            marginRight: '4px',
            width: '50%'
        },
        field: {
            margin: '8px'
        }
    };

    render() {
        return (
            <Card style={this.styles.card}>
                <TextField
                    style={this.styles.field}
                    hintText="MultiLine with rows: 2 and rowsMax: 4"
                    multiLine={true}
                    onChange={this.props.onChange}
                    rows={2}/>
            </Card>
        );
    }
}

export default InputCard;