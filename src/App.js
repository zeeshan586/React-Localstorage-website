import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Reports from './post/Reports';
import Products from './pages/Products';
import User from './pages/User';
import ForgetPassword from './pages/ForgetPassword';



function App() {
  
  const isCheck =  true
  return( 
    <>
     {isCheck ?
     
     <Router>
     
     <Navbar/>
  
     <Switch>

     <Route  exact path='/User' component={User}/> 
       <Route path='/Dashboard' component={Dashboard} />
       <Route path='/Reports' component={Reports} />
       <Route path='/products' component={Products} />
       <Route path='/ForgetPassword'  component={ForgetPassword} />

        
        
     
       
     </Switch>

</Router>
     : 
     
     <Router>
     
   
    
     <Switch>

       
       <Route  exact path='/User'  component={User}/>
       <Route path='/ForgetPassword'  component={ForgetPassword} />
       
     </Switch>

</Router>
     
     
     }
  
  
  
  
 

   
 </>
);

      

}

export default App;
