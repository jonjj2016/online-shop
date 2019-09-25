import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Homepage from './page/homepage/homepage.component';
const JustPage = () => (
  <div>
    <h1> Just Component </h1>{' '}
  </div>
);

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />
      <Route path="/shop/hats" component={JustPage} />
    </div>
  );
}

export default App;
