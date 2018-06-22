import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import AboutPage from '../components/AboutPage';
import HomePage from '../components/HomePage';
import ContactPage from '../components/ContactPage';
import FAQPage from '../components/FAQPage';
import NotFoundPage from '../components/NotFoundPage';
import ServicesPage from '../components/ServicesPage';

import PublicRoute from './PublicRouter';
import PrivateRoute from './PrivateRouter';
import LoginPage from '../components/LoginPage';
import GetStartedPage from '../components/GetStartedPage';
import ProductsPage from '../components/ProductsPage';
import FormsPage from '../components/FormsPage';





const AppRouter = () => (
  <BrowserRouter>
    <div>
      
      <Switch>
        
        <PublicRoute path="/" component={LandingPage} exact={true} />
         <PrivateRoute path="/home" component={HomePage} />
       
        <Route path="/login" component={LoginPage}  />
        <PublicRoute path="/about" component={AboutPage} />
        <PublicRoute path="/products" component={ProductsPage} />
        <PublicRoute path="/forms" component={FormsPage} />
        
        <PublicRoute path="/start" component={GetStartedPage} />
        <PublicRoute path="/contact" component={ContactPage} />
        <PublicRoute path="/FAQ" component={FAQPage} />
         
         <Route path="/services" component={ServicesPage} />
        <Route component={NotFoundPage} />
      </Switch>
      
    </div>
  </BrowserRouter>
);

export default AppRouter;