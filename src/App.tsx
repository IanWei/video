import React from 'react';
import { WbnPlayer } from './features/wbnPlayer/WbnPlayer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './styleComponents';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={WbnPlayer}/>
          <Route path="/:activeVideo" component={WbnPlayer}/>
        </Switch>
        <GlobalStyle/>
      </BrowserRouter>
  );
}

export default App;
