import React from 'react';
import './ForgetPassword.css'
import { Link } from 'react-router-dom';
class ForgetPassword extends React.Component{


    render(){
        return(
            <div className="from-wrap">


                  <form className="password-f">

                <div className="password-h2">
                    <h2>Find your Account </h2>
                    </div>
                      
                            
                            <input className='rend' type='text' placeholder='Phone number  or email address'/>
                            
                            <div className="all-btn">
                                <button className='re-btn'>Research</button>
                    
                            
                                <Link to="./User">
                                    <button className='can-btn'>
                                    
                                    cancel 
                    
                                    </button>
                                </Link>
                                
                            </div>
                      
                    
                
                </form>
            </div>
        )
    }
}
export default ForgetPassword;