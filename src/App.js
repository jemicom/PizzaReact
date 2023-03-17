import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// v6 
import {
  Header, 
  Home,
  Base,
  Toppings,
  Order
} from './components';


function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }
  
  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } /> 
        <Route path="/base" element={<Base addBase={addBase} pizza={pizza} />} /> 
        <Route path="/toppings" element={
           <Toppings addTopping={addTopping} pizza={pizza} />
        }>  
        </Route>
        <Route path="/order" element={<Order pizza={pizza} />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;