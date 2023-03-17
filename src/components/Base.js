import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

// Toppings.js, Base.js : whileHover 추가 

const Base = ({ addBase, pizza }) => {
  const bases = ['클래식', '씬 & 크리스피', '프리미엄'];

  return (
    <motion.div className="base container"
          initial={{ opacity: 0, x: '100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', delay: 0.5 }}
    >

      <h3>Step 1: 도우를 선택하세요.</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
                whileHover={{ scale: 1.3, originX: 0, color: 'hotpink' }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
        >
          <Link to="/toppings">
            <button>다음</button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;