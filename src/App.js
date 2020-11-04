import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Home from './views/Home';


function App() {
  return (
    <Router>
      <Route component={Home} />
    </Router>
  );
}

export default App;
