import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Webpage} from './components/pages/webPage';
import AboutAll from './components/pages/aboutAll';
import Minting from './components/pages/minting';
import {Login, contract, account} from '../src/components/pages/wallet';

function App() {
  if(contract != null){
    console.log("contract in app" , contract)
  }
  else{
    console.log("instance is found ", contract);
  }
  
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
            <Route  path="/minting">
              {<Minting />}
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
