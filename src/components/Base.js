import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

// Toppings, Base.js, Order.js : varants 추가 
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

const Base = ({ addBase, pizza }) => {
  const bases = ['클래식', '씬 & 크리스피', '프리미엄'];

  return (
    <motion.div className="base container"
      variants={containerVariants}
      initial="start"
      animate="end"
      transition={{ type: 'spring', delay: 0.5 }}
    >
      <h3>Step 1: 도우를 선택하세요.</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
          variants={nextVariants}
        >
          <Link to="/toppings">
            <motion.button
               whileHover={{ 
                scale: 1.1, 
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              다음
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Base;