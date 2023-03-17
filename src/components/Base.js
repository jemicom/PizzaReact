import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const Base = ({ addBase, pizza }) => {
  const bases = ['클래식', '씬 & 크리스피', '프리미엄'];

  return (
    <div className="base container">

      <h3>Step 1: 도우를 선택하세요.</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
        >
          <Link to="/toppings">
            <button>다음</button>
          </Link>
        </motion.div>
      )}

    </div>
  )
}

export default Base;