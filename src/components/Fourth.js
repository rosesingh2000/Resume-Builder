import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class Fourth extends Component {
    continue = e => {
        e.preventDefault();
        console.log('fghhjjjjj')
        this.props.nextstep();
        console.log('ttyfjdnx')
        
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
                    <AppBar title="PROJECTS Details"/>
                    <TextField
                    hintText="Title"
                    floatingLabelText="Title"
                    onChange={handleChange('Title')}
                    defaultValue={values.Title}
                    />
                    
                    <TextField
                    hintText="Description"
                    floatingLabelText="Description"
                    onChange={handleChange('Describe')}
                    defaultValue={values.Describe}
                    />
                    <br/>
                    <TextField
                    hintText="Title2"
                    floatingLabelText="Title2"
                    onChange={handleChange('Title2')}
                    defaultValue={values.Title2}
                    />
                    <TextField
                    hintText="About"
                    floatingLabelText="About"
                    onChange={handleChange('About')}
                    defaultValue={values.About}
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
export default Fourth
