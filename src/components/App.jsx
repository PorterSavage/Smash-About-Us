import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Contact from './Contact';
import About from './About';
import Home from './Home';
import CharacterListControl from './CharacterListControl';

function App() {
  return(
    <div>
      <div>
        <style jsx global>{`
          .page {
            margin-left: -8px;
            margin-right: -8px;
            margin-top: -17px;
          }
          .nav {
            margin-left: -8px;
            margin-top: -4px;
          }
        `}</style>
      </div>
      <div>
        <div className="nav">
          <Nav/>
        </div>
        <div className="page">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/contact' component={Contact}/>
          <Route exact path='/about' component={About}/>
        </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;