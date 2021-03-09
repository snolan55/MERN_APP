import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ProductList from './components/ProductList';
import ProductModal from './components/ProductModal';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store'
import { loadUser } from './actions/authActions';

import './App.css';


class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (            
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ProductModal />
            <ProductList />
          </Container>
        </div>
       </Provider> 
    );
  }
}

export default App;
