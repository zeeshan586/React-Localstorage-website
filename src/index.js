import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
// import Auth0ProviderWithHistory from "./auth0/auth0-provider-with-history";


ReactDOM.render(
  <Router>
  {/* <Auth0ProviderWithHistory 
      domain="dev-j5ma2omf.us.auth0.com"
      clientId="nf4r3ZpCMlRZp22KfnHqLAp81PxlTZFE"
      redirectUri={window.location.origin}> */}
    <App />
  {/* </Auth0ProviderWithHistory> */}
</Router>,
  document.getElementById('root')
);

