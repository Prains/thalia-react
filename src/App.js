import './css/App.scss';
import Home from './pages/Home';
import Paymentndelivery from './pages/Paymentndelivery';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Contacts from './pages/Contacts';
import Novelties from './pages/Novelties';
import Favourites from './pages/Favourites';
import Order from './pages/Order';
import Catalog from './pages/Catalog';
import { useState, useEffect } from 'react'
import CatalogCard from './pages/Catalog-card';
import Preloader from './components/Preloader';

function App() {
  let [temp, setTemp] = useState(null)

  useEffect(() => {
    fetch('https://thaliastudio.ru/wp-json/wp/v2/product', {
    })
      .then((res) => { return res.json() })
      .then((data) => { setTemp(data) })
  }, [])

  if (localStorage.getItem('liked') === null) {
    localStorage.setItem('liked', 'null')
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/thalia-react'>
            <Home />
          </Route>
          <Route path='/paymentndelivery'>
            <Paymentndelivery />
          </Route>
          <Route path='/contacts'>
            <Contacts />
          </Route>
          <Route path='/novelties'>
            <Novelties />
          </Route>
          <Route path='/favourites'>
            {temp == null && <Preloader />}
            {temp && <Favourites temp={temp} />}
          </Route>
          <Route path='/order'>
            {temp == null && <Preloader />}
            {temp && <Order temp={temp} />}
          </Route>
          <Route path='/catalog'>
            {temp == null && <Preloader />}
            {temp && <Catalog temp={temp} />}
          </Route>
          {temp && temp.map((item) => {
            return <Route path={`/card/${item.product_code}`} key={item.id}>
              {temp == null && <Preloader />}
              {temp && <CatalogCard temp={item} />}
            </Route>
          })

          }
        </Switch>
      </div>
    </Router>
  );
}

export default App;
