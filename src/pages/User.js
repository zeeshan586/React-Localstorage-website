
import React, { Component } from 'react';


import Validation from './validation';

class User extends Component {
  render() {
    return (
      <Validation/>
    );
  }
}


export default User;
// import './LogIn.css'
// import  Modal  from './Create'

// import Button from '@material-ui/core/Button'
// import { Redirect } from "react-router-dom";

// //  import axios from 'axios';


// export default class User extends React.Component { 
//  state ={
//    email : "",
//    password: "",
//    token: ""   ,

    
//  }

//     clickMe = (e) => {
//    e.preventDefault();
//   //   axios.post('https://reqres.in/api/users?page=2', {
//   //     email: 'eve.holt@reqres.in',
//   //     password: 'cityslicka'
//   //   })
//   //   .then(function (response) {
//   //     console.log(response);
//   //     let id = response.data.token
//   //     localStorage.setItem("uid", id);
//   //   })
//   //   .catch(function (error) {
//   //     console.log(error);
//   //   });
//     if(this.state.email === "zeeshan@test.com" & this.state.password === "123"){
//    console.log("Successfully Authenticate")

 
//    let id = Math.random()
//    console.log(Math.random ,"rending")
//    localStorage.setItem("uid", id);
// alert('successfully login')

//    this.setState({token: id })

//   }else{
//     alert('Login is inValid')

//   console.log("Fail Authenticated")
//   }
// }

// render(){
// if(localStorage.getItem("uid")){
//     return (<Redirect to={"Dashboard"}/>)
//   }
 
//    return (
//         <div className="User-app">
            
//                 <form 
//                 className="mid">
                  
//                   <div className='ipt1'>
//                     <label
//                     >
//                       email/user id*
//                       </label>
//                     <input className='foot' 
//                     type='email' 
//                     id='email' 
//                   //  value={"username"}  
//                     placeholder="@example.com"
//                     onChange={e=> this.setState({email: e.target.value})} 
//                     />
                    
//                   </div>
//                   <div className='pw1'>
//                     <label>
//                       password*
//                       </label>  
//                     <input  className='foot2'
//                      type='password' 
//                     // value={"password"} 
//                     placeholder="password" 
//                     onChange={e=> this.setState({password: e.target.value})} 
//                     />
                  
//                   <a  
//                     href="http://localhost:3000/ForgetPassword"> 
//                   forgetten password?                
//                 </a>
//                      </div>
                   
//                       <div className='log'
//                       >
                  
//                               <Button className="b1" 
//                                variant="contained" color="primary"   
//                               onClick= {(e => this.clickMe(e))}
//                               >
//                               LogIn
            
//                            </Button>
              
//               </div>
//               <div className="Or-border">
                
//               </div>
//              <div 
//              className='btn-main'>
             
//                   <Modal/>
//             </div>
           
//            </form>
//            </div> 
 
//                               )
//     }
//   }
    
    