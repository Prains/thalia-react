import './css/App.scss';
import Home from './pages/Home';
import Paymentndelivery from './pages/Payments/Paymentndelivery';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header';
import Contacts from './pages/Contacts/Contacts';
import Novelties from './pages/Novelties/Novelties';
import Favourites from './pages/Favourites/Favourites';
import Order from './pages/Order/Order';
import Catalog from './pages/Catalog/Catalog';
import CatalogCard from './pages/Catalog-card';
import Preloader from './components/Preloader/Preloader';
import Footer from './components/Footer/Footer';
import useFetch from './hooks/useFetch';


function App() {
  let { data: temp } = useFetch('https://thaliastudio.ru/wp-json/wp/v2/product')
  let { data: maintemp } = useFetch('https://thaliastudio.ru/wp-json/wp/v2/pages/7')

  if (localStorage.getItem('liked') === null) {
    localStorage.setItem('liked', 'null')
  }
  if (localStorage.getItem('ordered') === null) {
    localStorage.setItem('ordered', 'null')
  }
    return (
      <Router>
        <div className="App">
          {maintemp && <Header />}
          <Switch>
            <Route exact path='/'>
              {maintemp == null && <Preloader />}
              {maintemp && <Home maintemp={maintemp} />}
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
                {temp && <CatalogCard temp={item} url={item.product_code} />}
              </Route>
            })
            }
            <Route path='*'>
              {maintemp == null && <Preloader />}
              {maintemp && <Home maintemp={maintemp} />}
            </Route>
          </Switch>
          {maintemp && <Footer />}
        </div>
      </Router>
    );
  }

  export default App;
