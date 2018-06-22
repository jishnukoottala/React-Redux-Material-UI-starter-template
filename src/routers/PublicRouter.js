import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (


    <Route {...rest} component={(props) => (
      isAuthenticated ? (

          <Redirect to="/home" />
        
      ) : (
        
        <React.Fragment>
         <Header/>
         
          
          <Component {...props} />
         
          
           <Footer/>
      </React.Fragment>
        )
    )} />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
