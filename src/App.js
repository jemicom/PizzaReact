import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
  Header, 
  Home,
  Base,
  Toppings,
  Order
} from './components';

// home컴포넌트에 모션을 넣기 위해 다음과 같이 셋팅
// npm i framer-motion
// import {motion} from 'framer-motion';

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
// git branch lesson-01-v6
// git switch lesson-01-v6
// git add .
// git commit -m "react-router-dom v6 update"
// git push --set-upstream origin lesson-01-v6