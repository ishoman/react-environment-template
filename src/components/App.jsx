import React from 'react';
import { Switch, Route } from 'react-router-dom';


function App(){
  return (
    <div>
      <h1>Hello!</h1>
      <Switch>
        // <Route exact path='/' component={TicketList} /> //Add route here using this sytax
      </Switch>
    </div>
  );
}

export default App;
