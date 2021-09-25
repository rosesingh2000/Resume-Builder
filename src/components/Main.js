import React, { Component } from 'react'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'
import Fifth from './Fifth'
import Sixth from './Sixth'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AccountBoxIcon from '@material-ui/icons/AccountBox'


export class Main extends Component {
    state = {
        step:1,
        firstname: '',
        lastname: '',
        email: '',
        phonenumber: '',
        website: '',
        GitHub: '',
        instagram: '',
        College: '',
        Qualification: '',
        Description: '',
        graduation_year: '',
        School: '',
        percentage: '',
        year: '',
        Title: '',
        Describe: '',
        Title2: '',
        About: '',
        Institute:'',
        Position: '',
        Describe1: '',
        Institute1:'',
        Position1: '',
        Describe2: '',
        Skill_1: '',
        Skill_2: '',
        Skill_3: '',
        Skill_4: '',
        Skill_5: '',
        Interest_1: '',
        Interest_2: '',
        Interest_3: '',
        Interest_4: ''
    }
    nextstep = () => {
        const {step} = this.state;
        console.log('check1111')
        console.log(step)
        this.setState ({
            step: step + 1
        });
        console.log('check22')
    };
    prevstep = () => {
        const {step} = this.state;
        this.setState ({
            step: step - 1
        });
    
    }
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }
    render() {
        const {step} = this.state;
        const { firstname, lastname,email,phonenumber,website,GitHub,instagram, 
            College,Qualification,Description,graduation_year,School,percentage,year,
            Title,Describe,Title2,About,
            Institute,Position,Describe1,Institute1,Position1,Describe2} = this.state
        const values = {firstname, lastname,email,phonenumber,website,GitHub,instagram,
            College,Qualification,Description,graduation_year,School,percentage,year,
            Title,Describe,Title2,About,
            Institute,Position,Describe1,Institute1,Position1,Describe2}
            console.log('shivam pagal hai ', step)
        
        switch(step) {
            case 1:
                return(
                    <>
                    <AppBar position="static">
                        <Toolbar>
                            {<AccountBoxIcon style= {{marginLeft: 20 , marginRight:20 }} />}
                            <Typography variant="h5"> RESUME BUILDER </Typography>
                        </Toolbar>

                    </AppBar>
                    <Second
                    nextstep={this.nextstep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                    </>
                )

            case 2:
                return(
                    <Third
                    nextstep={this.nextstep}
                    prevstep={this.prevstep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )

                
            case 3:
                return(
                    <Fourth
                    nextstep={this.nextstep}
                    prevstep={this.prevstep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            
            case 4:
                return(
                    <Fifth
                    nextstep={this.nextstep}
                    prevstep={this.prevstep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 5:
                return(
                    <Sixth
                    nextstep={this.nextstep}
                    prevstep={this.prevstep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            default: 
                return(
                    <div>
                        thankhuhh done bye byeee
                    </div>
                )
        }
    }
}

export default Main
