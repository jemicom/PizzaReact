import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation  } from 'react-router-dom'
import {
  Header, 
  Home,
  Base,
  Toppings,
  Order
} from './components';
import {motion, AnimatePresence} from 'framer-motion';
import Modal from './components/Modal'; 
// 모달 컴포넌트 추가 

function App() {
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(false);
  // 모달  state => Order.js 추가

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
    <>
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/" element={ <Home /> } /> 
          <Route path="/base" element={<Base addBase={addBase} pizza={pizza} />} /> 
          <Route path="/toppings" element={
            <Toppings addTopping={addTopping} pizza={pizza} />
          }>  
          </Route>
          <Route path="/order" element={
            <Order pizza={pizza} setShowModal={setShowModal} />} 
          /> 
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
// git branch lesson-01-v6
// git switch lesson-01-v6
// git add .
// git commit -m "react-router-dom v6 update"
// git push --set-upstream origin lesson-01-v6