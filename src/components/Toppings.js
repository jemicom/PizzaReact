import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';


// Toppings, Base.js , Order.js : varants 추가 
const containerVariants = {
  start: { 
    opacity: 0, 
    x: '100vw' 
  },
  end: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', delay: 0.5 }
  },
};

const nextVariants = {
  start: { 
    x: '-100vw' 
  },
  end: {
    x: 0,
    transition: { type: 'spring', stiffness: 120 }
  } 
}


// yoyo : repeat 지정
const buttonVariantsRepeat = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo:Infinity 
      // 왕복 횟수 , Infinity
    }
  }
}

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['파인애플 8개/40g', '올리브 20g', '페퍼로니 8개/20g', '베이컨 8개/24g', '올리브 10/24g', '치즈 100g', '토마토 소스 10g'];

  return (
    <motion.div className="toppings container"
          variants={containerVariants}
          initial="start"
          animate="end"
    >
      
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
           variants={buttonVariantsRepeat}
           whileHover="hover"
        >
          주문
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;