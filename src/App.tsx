import React from 'react';
import { WbnPlayer } from './features/video/WbnPlayer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={WbnPlayer}/>
          <Route exact path="/:activeVideo" component={WbnPlayer}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
