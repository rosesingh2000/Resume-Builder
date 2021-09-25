import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class Third extends Component {
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
                    <AppBar title="Educational Details"/>
                    <TextField
                    hintText="College/University"
                    floatingLabelText="College/University"
                    onChange={handleChange('College')}
                    defaultValue={values.College}
                    />
                    
                    <TextField
                    hintText="Qualification"
                    floatingLabelText="Qualification"
                    onChange={handleChange('Qualification')}
                    defaultValue={values.Qualification}
                    />
                    <br/>
                    <TextField
                    hintText="Description"
                    floatingLabelText="Description"
                    onChange={handleChange('Description')}
                    defaultValue={values.Description}
                    />
                    <br/>
                    <TextField
                    hintText="graduation year"
                    floatingLabelText="graduation year"
                    onChange={handleChange('graduation_year')}
                    defaultValue={values.graduation_year}
                    />
                    <br/>
                    <TextField
                    hintText="School"
                    floatingLabelText="School"
                    onChange={handleChange('School')}
                    defaultValue={values.School}
                    />
                    <TextField
                    hintText="class 12 percentage"
                    floatingLabelText="class 12 percentage"
                    onChange={handleChange('percentage')}
                    defaultValue={values.percentage}
                    />
                    <br/>
                    <TextField
                    hintText="year"
                    floatingLabelText="year"
                    onChange={handleChange('year')}
                    defaultValue={values.year}
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
export default Third
