import './css/App.scss';
import Home from './pages/Home';
import Paymentndelivery from './pages/Paymentndelivery';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Contacts from './pages/Contacts';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/paymentndelivery'>
            <Paymentndelivery />
          </Route>
          <Route path='/contacts'>
            <Contacts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
