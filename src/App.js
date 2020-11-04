import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from './views/Home';


function App() {
  return (
    <Router>
      {/* Componente principal */}
      <Route component={Home} />
    </Router>
  );
}

export default App;
