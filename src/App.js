import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route} from "react-router-dom";
import SearchBox from './views/SearchBox';
import ProductList from './views/ProductList';


function App() {
  return (
    <Router >
          
    <Route path="/"render={(props) => <SearchBox {...props} />} />
    <Route path="/items"render={(props) => <ProductList {...props} />} />
    {/* <Route path="/home" render={(props) => <Home {...props} />} />
    <Route path="/login" render={(props) => <LogIn {...props} />} />
    <Route path="/recuperar" render={(props) => <ForgotPassword {...props} />} /> */}
    
    </Router>
  );
}

export default App;
