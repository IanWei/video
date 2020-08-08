import React from 'react';
import { WbnPlayer } from './features/video/WbnPlayer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={WbnPlayer}/>
          <Route exact path="/:activeVideo" component={WbnPlayer}/>
        </Switch>
        <GlobalStyle/>
      </BrowserRouter>
  );
}

export default App;
