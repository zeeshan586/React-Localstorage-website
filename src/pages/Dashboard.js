import React from 'react';
import './Dashboard.css';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles,  createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PhoneIcon from '@material-ui/icons/Phone';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
const useStyles = makeStyles((theme) =>
createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      
      
          table: {
            minWidth: 50,
          },
      
      },
    },
  }),
);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Mobile Phone', 159, 6.0, 24, 4.0),
  createData('Car', 237, 9.0, 37, 4.3),
  createData('Laptop', 262, 16.0, 24, 6.0),
  createData('Bikes', 305, 3.7, 67, 4.3),
  createData('Cycles', 356, 16.0, 49, 3.9),
];

function Dashboard() {
  const classes = useStyles();
  // let zee =  localStorage.getItem("uid");
  // if(!zee){

  //   return (<Redirect to={"user"}/>)
  // }
  return (
    <div  >
      <div className='reports'>
      <Card 
      style={{width:"20%" 
       , height:"90px" ,float:"left", margin:"1%",display:"flex", marginLeft:"15%",flexDirection:"row",
       backgroundColor: 'rgb(0,123,255)'
    }}
      >
   <CardContent >

      <p>75</p>
      <p>Campaigns</p>
     
    </CardContent>
    {/* <Progress type="circle" percent={75} width={70} /> */}
      </Card>
      
      <Card 
      style={{height:"90px",width:"20%" ,float:"left", margin:"1%" , display:"flex",flexDirection:"row", marginLeft:"0%"
    , backgroundColor:"rgb(250,173,20)" }}
      >
      <CardContent>

      
      <p>230</p>
      <PhoneIcon style={{float:"right"}}/>
     <p>Coustomer</p>
  
    
    
      
</CardContent>
      
      </Card>
      <Card 
      style={{ 
        height:"90px",width:"20%",margin:"1%", display:"flex",flexDirection:"row",marginLeft:"0%",float:"left"
    , backgroundColor:"rgb(245,34,45)"}}
      >
    
<CardContent>
      
      <h1>323</h1>
      <NotificationsIcon/>
      <p>Queries</p>
    
    
 
 </CardContent>
</Card>
<Card 
style={{
  float:"left",width:"20%",height:"90px",display:"flex",flex:"row",margin:"1%",marginLeft:"0%" ,
   backgroundColor:"rgb(20,20,20)"
}}
>
  <CardContent>
    <h1>870</h1>
    <p>Opens</p>
  <ChatBubbleIcon/>
  </CardContent>
</Card>
</div>
<div className="tb">
<TableContainer component={Paper} style={{width:"71%" , marginLeft:"15%" }}>
<div className={classes.root}>
    
      
    </div>
    
  
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Electronic Devices</TableCell>
            <TableCell align="right">Model Number</TableCell>
            <TableCell align="right">Prices</TableCell>
            <TableCell align="right">Model Year</TableCell>
            <TableCell align="right">Company</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Card 
    style={{float:"left",width:"12%",height:"365px",display:"flex",flex:"row",margin:"0%",
    marginLeft:"1%" }}
    >
      <CardContent>

      </CardContent>
    </Card>
    </div>
  
    </div>
  );
}
      
export default Dashboard;

