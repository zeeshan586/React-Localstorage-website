import React ,{ Component } from 'react';
import './LogIn.css'
import  Modal  from './Create'
import { Redirect , Link} from "react-router-dom";


const validEmailRegex = 
RegExp(/^(([^<>()[\],;:\s@]+([^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+)+[^<>()[\],;:\s@]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class Validation extends Component {
    static displayName = 'RememberMe'
    constructor(props) {
      super(props);
      this.state = {
        email : "null",
        password: "null",
        token: ""   ,
        errors: {
          email: '',
          password: '',
        },
         
             
          }
      };
    
      checkValidation=(name,value)=>{
        let errors = this.state.errors;
        switch (name) {
        
          case 'email': 
            errors.email = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
          case 'password': 
            errors.password = 
              value.length < 8
                ? 'Password must be at least 8 characters long!'
                : '';
            break;
          default:
            break;
        }
        return errors
      }
    handleChange = (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      if(value.length === 0)
            {
                // alert("fill input field first")
            }
  
      // let errors = this.state.errors;
      let errors = this.state.errors;
  //  let response = this.checkValidation(name,value)
  
      this.setState({errors, [name]: value});
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      if(validateForm(this.state.errors)) {
        console.info('Valid Form')
      }else{
        console.error('Invalid Form')
      }
    }
 
   
    clickMe = (e) => {
        e.preventDefault();
     if( this.state.email === "zeeshan@test.com" & this.state.password === "123456789"){
        console.log("Successfully Authenticate")
     
      
        let id = Math.random()
        console.log(Math.random ,"rending")
        localStorage.setItem("uid", id);
     alert('successfully login')
     
        this.setState({token: id })
     
       }else{
        let {email,password} = this.state
        let errors = this.state.errors;
        
         if(!email){
          errors.email = 'enter your email'
        }
         if(!password){
          errors.password = 'enter you password'
        }
        this.setState({
          errors
        })
        
         alert('Login is inValid')
     
       console.log("Fail Authenticated")
       }
     }
   
     
    render() {
        if(localStorage.getItem("uid")){
            return (<Redirect to={"Dashboard"}/>)
            
          }
      const {errors} = this.state;
  
      return (

      <div className='full-wrapper'>
        <div className='mid-wrapper'>
           
  <form 
    className="from-wrapper" 
    onSubmit={this.handleSubmit}
    noValidate>
         
    <div className='email-1'>
<label htmlFor="email">Email</label>
<input 
className="input-3" type='email' 
placeholder="@example.com" name='email' 
onChange={this.handleChange} noValidate />
{errors.email.length > 0 && 
<span className='error'>{errors.email}</span>}
              </div>
<div className='password-2'>
<label htmlFor="password">Password</label>
 <input
className="input-3"  type='password'
 name='password' placeholder="password"
  onChange={this.handleChange}
  noValidate 
 />
{errors.password.length > 0 && 
<span className='error'>{errors.password}</span>}
                        
              
              </div>
              
<div className='submit' onClick={this.clickMe}>
<button className="btn-sub">Log in</button>
               </div>
              <div>
              
<Link to="/ForgetPassword">Forgotten password?</Link>
              </div>
<div className='btn-main'>
<Modal/>
            </div>
         </form>
          </div>
       
        </div>
      );
    }
  }
  
  export default Validation;