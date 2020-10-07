import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StoreProvider } from './Components/Store';
import * as serviceWorker from './serviceWorker';
import {Router, RouteComponentProps} from '@reach/router'
import HomePage from './Pages/HomePage';
import FavPage from './Pages/FavPage';

const RouterPage = (props) => props.pageComponent 
ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path='/'>
        <RouterPage pageComponent={<HomePage />} path='/' />
        <RouterPage pageComponent={<FavPage />} path='/fav' />
      </App>
    </Router>
      
  </StoreProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
