import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class Seventh extends Component {
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
                    <AppBar title="EXTRA Details"/>
                    <TextField
                    hintText="Skill 1"
                    floatingLabelText="Skill 1"
                    onChange={handleChange('Skill_1')}
                    defaultValue={values.Skill_1}
                    />
                    <TextField
                    hintText="Skill 2"
                    floatingLabelText="Skill 2"
                    onChange={handleChange('Skill_2')}
                    defaultValue={values.Skill_2}
                    />
                    
                    <TextField
                    hintText="Skill 3"
                    floatingLabelText="Skill 3"
                    onChange={handleChange('Skill_3')}
                    defaultValue={values.Skill_3}
                    />
                    <br/>
                    <TextField
                    hintText="Skill 4"
                    floatingLabelText="Skill 4"
                    onChange={handleChange('Skill_4')}
                    defaultValue={values.Skill_4}
                    />
                    <TextField
                    hintText="Skill 5"
                    floatingLabelText="Skill 5"
                    onChange={handleChange('Skill_5')}
                    defaultValue={values.Skill_5}
                    />
                    <br/>
                    <TextField
                    hintText="Interest 1"
                    floatingLabelText="Interest 1"
                    onChange={handleChange('Interest_1')}
                    defaultValue={values.Interest_1}
                    />
                    <TextField
                    hintText="Interest 2"
                    floatingLabelText="Interest 2"
                    onChange={handleChange('Interest_2')}
                    defaultValue={values.Interest_2}
                    />
                    <br/>
                    <TextField
                    hintText="Interest 3"
                    floatingLabelText="Interest 3"
                    onChange={handleChange('Interest_3')}
                    defaultValue={values.Interest_3}
                    />
                    <TextField
                    hintText="Interest 4"
                    floatingLabelText="Interest 4"
                    onChange={handleChange('Interest_4')}
                    defaultValue={values.Interest_4}
                    />
                   
                    <br/>
                    <RaisedButton
                    label="DONE"
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
export default Seventh
