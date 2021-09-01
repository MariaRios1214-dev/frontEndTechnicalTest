import React from 'react';

import Login from './components/Login';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Consulta de cuentas </h1>{' '}
        </section>
      </nav>{' '}
      <main>
        <Switch>
          <Route path="/" component={Login} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
