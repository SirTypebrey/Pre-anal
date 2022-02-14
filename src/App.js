import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { MenuElements } from './data/MenuElements';
import Barrita from './data/Barrita';

export default function App() {
  return (
    <Router>
      <Barrita />
      {MenuElements.map((item) => {
        return (
          <Route
            key={item.id}
            path={item.path}
            exact
            component={item.component}
          />
        );
      })}
    </Router>
  );
}
