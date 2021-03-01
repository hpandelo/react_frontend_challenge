
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PadawanMasterProvider from './contexts/PadawanMaster';
import DestinyPage from './pages/Destiny';
import HomePage from './pages/Home';


function App() {
  return (
    <PadawanMasterProvider>
      <Router>
        <Switch>
          <Route path="/welcome" component={ HomePage } />
          <Route path="/destiny" component={ DestinyPage } />
          <Route path="/" exact>  
            <Redirect to="/welcome" />
          </Route>
        </Switch>
      </Router>
    </PadawanMasterProvider>
  );
}

export default App;
