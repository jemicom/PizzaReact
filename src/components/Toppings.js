import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

// Toppings.js, Base.js : whileHover 추가 

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['파인애플 8개/40g', '올리브 20g', '페퍼로니 8개/20g', '베이컨 8개/24g', '올리브 10/24g', '치즈 100g', '토마토 소스 10g'];

  return (
    <div className="toppings container">
      
      <h3>Step 2: 토핑을 선택하세요. </h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          // 클래스 추가 
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
              whileHover={{ scale: 1.3, originX: 0, color: 'hotpink' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
      <motion.button
           whileHover={{ 
            scale: 1.1, 
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >
          주문
        </motion.button>
      </Link>

    </div>
  )
}

export default Toppings;