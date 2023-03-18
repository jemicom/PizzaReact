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
 
// AnimatePresence 
// 사라질때 Animate 적절히 적용하기 위한 기술
// animation.md 참고 home, order 연습 구현 후 라우트 적용 안됨 
// 레이아웃 적용하면 될 것 같음
// onClick 일때 동작하지 않고 onMouseEnter일때 동작함 
// 각 페이지 하단에 연습 파일 test 백업 후 복원
// Order.js

function App() {
  const location = useLocation();
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
    <>
      <Header />
      <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route path="/" element={ <Home /> } /> 
        <Route path="/base" element={<Base addBase={addBase} pizza={pizza} />} /> 
        <Route path="/toppings" element={
           <Toppings addTopping={addTopping} pizza={pizza} />
        }>  
        </Route>
        <Route path="/order" element={<Order pizza={pizza} />} /> 
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