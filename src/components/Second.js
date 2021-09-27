import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class Second extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextstep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Personal Details"/>
                    <TextField
                    hintText="First Name"
                    floatingLabelText="First Name"
                    onChange={handleChange('firstname')}
                    defaultValue={values.firstname}
                    />
                    
                    <TextField
                    hintText="Last Name"
                    floatingLabelText="Last Name"
                    onChange={handleChange('lastname')}
                    defaultValue={values.lastname}
                    />
                    <br/>
                    <TextField
                    hintText="email"
                    floatingLabelText="email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    />
                    <br/>
                    <TextField
                    hintText="phone number"
                    floatingLabelText="phone number"
                    onChange={handleChange('phonenumber')}
                    defaultValue={values.phonenumber}
                    />
                    <br/>
                    <TextField
                    hintText="website"
                    floatingLabelText="website"
                    onChange={handleChange('website')}
                    defaultValue={values.website}
                    />
                    <TextField
                    hintText="GitHub"
                    floatingLabelText="GitHub"
                    onChange={handleChange('GitHub')}
                    defaultValue={values.GitHub}
                    />
                    <br/>
                    <TextField
                    hintText="instagram"
                    floatingLabelText="instagram"
                    onChange={handleChange('instagram')}
                    defaultValue={values.instagram}
                    />
                    <br/>
                    <RaisedButton
                    label="Continue"
                    secondary={true}
                    style={styles.button}
                    onClick={this.continue}
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
export default Second
