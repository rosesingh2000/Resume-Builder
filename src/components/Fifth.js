import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class Sixth extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextstep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevstep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="EXPERIENCE Details"/>
                    <TextField
                    heading="experri"
                    hintText="Institute/Organisation"
                    floatingLabelText="Institute/Organisation"
                    onChange={handleChange('Institute')}
                    defaultValue={values.Institute}
                    />
                    <TextField
                    hintText="Position"
                    floatingLabelText="Position"
                    onChange={handleChange('Position')}
                    defaultValue={values.Position}
                    />
                    
                    <TextField
                    hintText="Description"
                    floatingLabelText="Description"
                    onChange={handleChange('Describe1')}
                    defaultValue={values.Describe1}
                    />
                    <br/>
                    <TextField
                    heading="experri2"
                    hintText="Institute/Organisation"
                    floatingLabelText="Institute/Organisation"
                    onChange={handleChange('Institute1')}
                    defaultValue={values.Institute1}
                    />
                    <TextField
                    hintText="Position"
                    floatingLabelText="Position"
                    onChange={handleChange('Position1')}
                    defaultValue={values.Position1}
                    />
                    
                    <TextField
                    hintText="Description"
                    floatingLabelText="Description"
                    onChange={handleChange('Describe2')}
                    defaultValue={values.Describe2}
                    />
                   
                    <br/>
                    <RaisedButton
                    label="Continue"
                    secondary={true}
                    style={styles.button}
                    onClick={this.continue}
                    />
                    <RaisedButton
                    label="Back"
                    primary={true}
                    style={styles.button}
                    onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
const styles = {
    button: {
        margin: 15
    }
}
export default Sixth
