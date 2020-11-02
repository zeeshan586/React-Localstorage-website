import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button'
// import Alert from '@material-ui/lab/Alert';
import './CreateAccount.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
// import { useAuth0 } from "@auth0/auth0-react";
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
// import IconButton from '@material-ui/core/IconButton';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import clsx from 'clsx';
// import FormControl from '@material-ui/core/FormControl';
// import { useAuth0 } from "@auth0/auth0-react";
import Singup from './singUp'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    },      
    textField: {
      width: '35ch',
    },
}));


export default function TransitionsModal() {

  const classes = useStyles();
  // const [values, setValues] = React.useState({
   
    
   
  //   showPassword: false,
  // });

  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const handleChange=() =>{
    
  // };
  

  // const handleClickShowPassword = () => {
  //   setValues({ ...values, showPassword: !values.showPassword });
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  
    
  // }

  
  // const clickMe=()=>{
   
  // }
  
  return (

    
    <div className="mein-page">

    <div className='open-create-btn'> 
      <Button  variant="contained" color="primary" onClick={handleOpen}> 
        Create New Account
      </Button>
      
   </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className='classe-paper'>
           
            {/* <h1 id="transition-modal-title">Sing Up</h1>
           
            <form 
            className={classes.root} 
            noValidate autoComplete="off">
   
     <div>
     <FormControl
      className={clsx(classes.margin, classes.textField)}
      >
     <InputLabel htmlFor="standard-adornment-password"
        >Password
        </InputLabel>
          <Input
            id="standard-password-input" 
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          </FormControl>
  </div>
  <div>
  <FormControl 
  className={clsx(classes.margin, classes.textField)}
  >
  <InputLabel htmlFor="standard-adornment-password"
  >Confirm password
  </InputLabel>
          <Input
            id="standard-confirm-password-input"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          </FormControl>
  </div>
      <div className='classes-btn'>
      <Button 
      variant="contained" 
      color="primary" 
    
      onClick={clickMe
    }
    >
  Sing Up
</Button> */}

<Singup/>
   
   
      <div className="col">
        
          <i>
          <FacebookIcon
           href="#" className="fb btn"
           />
            </i> 
           
        
      
          <i 
          className="fab f-twitter fa-fw">
            <TwitterIcon href="#" 
            className="twitter btn"
            />
            </i> 
        
        <a href="google" className="google btn">
          <i className="fa fa-google fa-fw">
        
          </i> Login with Google+
        </a>
      </div>

    
          </div>
        </Fade>
      </Modal>
    </div>
  );
}