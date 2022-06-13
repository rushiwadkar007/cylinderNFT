import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Webpage from './components/pages/webPage';
import AboutAll from './components/pages/aboutAll';
import Minting from './components/pages/minting';
import Login from './components/pages/wallet';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              {/* {!isConnected && <Login onLogin= {onLogin} onLogout={onLogout}/>}
              {isConnected && <Home />} */}
              <Webpage />
            </Route>
            <Route path="/all">
              <AboutAll />
            </Route>
            <Route path="/minting">
              <Minting />
            </Route>
            
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
