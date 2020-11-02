import React ,{Fragment} from "react";
import { Redirect } from "react-router-dom";
import Button from '@material-ui/core/Button'
import Loader from '../post/Loader'
export default class LogOut extends React.Component {
  state= {
    user: "",
    Loading:false,
  }
  logoutMethond =(e)=>{
    this.setState({Loading:true,capcite:0.5})
    e.preventDefault();

    ( localStorage.removeItem("uid"))
     this.setState({user: "removed" })

  }
  render(){
    if(!localStorage.getItem("uid")){
      return (<Redirect to={"user"}/>)
    } 
     return (
       <Fragment>
         {!this.state.Loading ? (
       <div>
    <Button
  
    onClick= {(e => this.logoutMethond(e))}
    >
      Log out
    </Button>
    </div>
    ):(
    <div
            style={{ paddingTop: 80, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <p> Please Wait....... </p>
            <Loader isActive={this.state.Loading} />
  
          </div>
  )}
    </Fragment>
  );
      
};
}
