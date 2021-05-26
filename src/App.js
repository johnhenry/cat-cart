import { useEffect, useState } from 'react';
import './App.css';
import KittyGrid from './KittyGrid.js';
import KittyCart from './KittyCart.js';

import fetchData from './fetch-data.js';

const Application = () => {
  const [data, setData] = useState([]);
  useEffect(() => fetchData().then(setData), []);
  const [cart, updateCart] = useState([]);

  return (
    <div className="App">
      <header></header>
      <KittyGrid data={data} updateCart={updateCart}></KittyGrid>
      <KittyCart cart={cart} ></KittyCart>
    </div>
  );
}

export default Application;
