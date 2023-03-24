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
import { useState } from 'react';

function App() {
  let [isLoading, setLoading] = useState(false);
  let { data: productList } = useFetch('https://thaliastudio.ru/wp-json/wp/v2/product/?per_page=100&acf_format=standard')
  let { data: novelties } = useFetch('https://thaliastudio.ru/wp-json/wp/v2/novelties?per_page=100&acf_format=standard')
  
  function checkLocalStorageItem(key, defaultValue) {
    if (localStorage.getItem(key) === null) {
      localStorage.setItem(key, defaultValue)
    }
  }
  
  Promise.all([productList, novelties]).finally(() => { setTimeout(() => { setLoading(true) }, 1000) })

  checkLocalStorageItem('liked', 'null');
  checkLocalStorageItem('ordered', 'null');
  

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
            <Favourites productList={productList} />
          </Route>
          <Route path='/order'>
            <Order productList={productList} />
          </Route>
          <Route path='/catalog'>
            <Catalog productList={productList} />
          </Route>
          {productList && productList.map((item) => {
            return <Route path={`/card/${item.acf.code}`} key={item.id}>

              {productList == null && <Preloader />}

              {productList && <CatalogCard productList={item} url={item.acf.code} />}

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
