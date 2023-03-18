import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion';

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
  exit:{
    x : '-100vw'
  }
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

const Base = ({ addBase, pizza }) => {
  const [exit, setExit] = useState(true);

  const bases = ['클래식', '씬 & 크리스피', '프리미엄'];

  return (
    <AnimatePresence>
      {
        exit &&  <motion.div className="base container"
          variants={containerVariants}
          initial="start"
          animate="end"
          transition={{ type: 'spring', delay: 0.5 }}

          exit="exit"
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
                  variants={buttonVariantsRepeat}
                  whileHover="hover"

                  onMouseEnter={()=>setExit(false)}
                >
                  다음
                </motion.button>
              </Link>
            </motion.div>
          )}
          
        </motion.div>
    }
    </AnimatePresence>
  )
}

export default Base;