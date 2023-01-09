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
  let isLoading = false;
  let { data: temp } = useFetch('https://thaliastudio.ru/wp-json/wp/v2/product/?per_page=100&acf_format=standard')
  let { data: novelties } = useFetch('https://thaliastudio.ru/wp-json/wp/v2/novelties?per_page=100&acf_format=standard')

  if (localStorage.getItem('liked') === null) {
    localStorage.setItem('liked', 'null')
  }
  if (localStorage.getItem('ordered') === null) {
    localStorage.setItem('ordered', 'null')
  }

  if (novelties !== null) isLoading = true

  return (
    <Router>
      {isLoading ? <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home novelties={novelties} />
          </Route>
          <Route path='/paymentndelivery'>
            <Paymentndelivery />
          </Route>
          <Route path='/contacts'>
            <Contacts />
          </Route>
          <Route path='/novelties'>
            <Novelties novelties={novelties} />
          </Route>
          <Route path='/favourites'>
            <Favourites temp={temp} />
          </Route>
          <Route path='/order'>
            <Order temp={temp} />
          </Route>
          <Route path='/catalog'>
            <Catalog temp={temp} />
          </Route>
          {temp && temp.map((item) => {
            return <Route path={`/card/${item.acf.code}`} key={item.id}>

              {temp == null && <Preloader />}

              {temp && <CatalogCard temp={item} url={item.acf.code} />}

            </Route>
          })
          }
          <Route path='*'>
            <Home novelties={novelties} />
          </Route>
        </Switch>
        <Footer />
      </div> : <Preloader />}
    </Router>
  );
}

export default App;
