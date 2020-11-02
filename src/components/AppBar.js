import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import MoreIcon from '@material-ui/icons/More';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Typography from '@material-ui/core/Typography';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import LogOut from '../pages/LogOut';
import Serachbar from '../pages/Serach-bar'
import { Redirect } from "react-router-dom";
import SettingsIcon from '@material-ui/icons/Settings';
import Darkmode from '../darkmode'


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      color:"#fff",
      marginLeft: theme.spacing(23),
    }
  },
   
  // search: {
  //   position: 'relative',
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: fade(theme.palette.common.white, 0.15),
  //   '&:hover': {
  //     backgroundColor: fade(theme.palette.common.white, 0.25),
  //   },
  //   marginRight: theme.spacing(1),
  //   marginLeft: 0,
  //   width: '100%',
  //   [theme.breakpoints.up('sm')]: {
  //     marginLeft: theme.spacing(2),
  //     width: 'auto',
  //   },
  // },
  // searchIcon: {
  //   padding: theme.spacing(0, 2),
  //   height: '100%',
  //   position: 'absolute',
  //   pointerEvents: 'none',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // inputRoot: {
  //   color: 'black',
  //   border:"0px soild black"
  // },
  // inputInput: {
  //   padding: theme.spacing(1, 1, 1, 0),
  //   // vertical padding + font size from searchIcon
  //   paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  //   transition: theme.transitions.create('width'),
  //   width: '100%',
  //   [theme.breakpoints.up('md')]: {
  //     width: '20ch',
     
    
  //   },
  // },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  
  const isMenuOpen = Boolean (anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
const handleProfileMenuOpen =(event)=>{
  setAnchorEl(event.currentTarget)
};
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
 
  const handleOpen=(event)=>{
    setAnchorEl(event.currentTarget)
  }
  const menuId ='primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <SettingsIcon/>Setting</MenuItem>
      <MenuItem >
        <LogOut/>
      </MenuItem>
 
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
    
      <MenuItem onClick={handleOpen}>
        <IconButton aria-label="show 4 new mails" color="inherit" >
          <Badge badgeContent={4} color="secondary">
            <MailIcon/>
          </Badge>
        </IconButton>
        <p>Messages</p>
  
      </MenuItem>
    
      
      <MenuItem onClick={handleOpen}>
        <IconButton aria-label="show 11 new notifications" color="inherit"  
          aria-controls="primary-search-account-menu"
          aria-haspopup="true">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon  />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>

    </Menu>
  );
  let zee =  localStorage.getItem("uid");
  if(!zee){
    
    return (<Redirect to={"user"}/>)
  }

  return (
  
    <div className={classes.grow}>
      
    
        <Toolbar>
         
           <Typography className={classes.title}  variant="h4" noWrap>
           <ShoppingCartSharpIcon/>
           
            Shopping
          </Typography>
          
            <Serachbar/>
          <Darkmode/>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 2 new mails" color="inherit" style={{color:"#fff"}}>
              <Badge badgeContent={2} color="secondary">
              
                <MailIcon />
                
              </Badge>
              
            </IconButton>
            <IconButton aria-label="show 2 new notifications" style={{color:"#fff"}}
             >
              <Badge badgeContent={2} color="secondary" >
                <NotificationsIcon  />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              style={{color:"#fff"}}
            >
             
              <AccountCircle />
              
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              
            >
                
              <MoreIcon />
              
            </IconButton>
            
          </div>
        
        </Toolbar>
  

      {renderMobileMenu}
      {renderMenu}
      
    </div>
    
  );
}
