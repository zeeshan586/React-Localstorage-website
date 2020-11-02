import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';







export default class Singup extends React.Component {
    constructor(props){
     super(props);
    
    if (!ValidatorForm.hasValidationRule('isPasswordMatch')) {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            const { formData } = this.state;
            if (value !== formData.password) {
                return false;
            }
            return true;
        });
    }

    this.state = {
        formData: {
            userName:'',
            email: '',
            password: '',
            repeatPassword:'',
        },
        submitted: false,
    }
    }
    componentWillUnmount() {
        if (ValidatorForm.hasValidationRule('isPasswordMatch')) {
            ValidatorForm.removeValidationRule('isPasswordMatch');
        }
    }
    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        
        this.setState({ formData });
    }

    handleSubmit = () => {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });
    }
 
    submitted=()=>{

    }


    render() {
        const { formData, submitted } = this.state;
        
        return (
            <ValidatorForm  
           
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <h1 id="transition-modal-title">Sing Up</h1>
<br/>
                <TextValidator
                label="User name"
                onChange={this.handleChange}
                name="userName"
                value={formData.username}
                // validators={['required']}
                // errorMessages={['this field is required','userNaem is not valid']}
                
                />
               
               <br/>
                <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <br/>
                <TextValidator
                    label="Password"
                    onChange={this.handleChange}
                    name="password"
                    value={formData.password}
                    validators={['required']}
                    errorMessages={['this field is required']}

                />
                 <br/>
                <TextValidator
                    label="Repeat password"
                    onChange={this.handleChange}
                    name="repeatPassword"
                    type="password"
                    validators={['isPasswordMatch', 'required']}
                    errorMessages={['password mismatch', 'this field is required']}
                    value={formData.repeatPassword}
                  
                />
                <br />
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    onClick={this.submitted}
                >
                    {
                        (submitted && 'Your form is submitted!')
                        || (!submitted && 'Sing up')
                    }
                </Button>
            </ValidatorForm>
        );
    }
}
