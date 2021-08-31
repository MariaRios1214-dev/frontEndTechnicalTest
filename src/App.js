import React from 'react';

import Login from './components/Login';
import Features from './components/Features';
import VSUsersFeatures from './components/VSUsersFeatures';
import {Switch,Route, } from 'react-router-dom';


function App() {
  return (
      <div className="App" >
        <nav>
          <section ><h1>Consulta de cuentas </h1> </section>
        </nav> <main>
          <Switch >
            <Route path="/detalleCuentas" component={Features}/>
            <Route path="/vsCaracteristicas" component={VSUsersFeatures}/>
            <Route path="/" component={Login}/>
          </Switch>
        </main>
      </div>
  );
}

export default App;
