import React from 'react';
import { Route } from "react-router";

import Home from './Home.js';
import About from './About.js';
import Contacts from './Contacts.js';

const routes = (
  <>
    <Route path="/" component={Home}/>
    <Route path="about" component={About}/>
    <Route path="contacts" component={Contacts}/>
  </>
)

export default routes;
